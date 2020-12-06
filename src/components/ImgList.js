import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

import ImgItem from './ImgItem.js';
import Api from '../net/api';
import PrettyButton from './PrettyButton';
import ImageView from './ImageView';

class ImgList extends Component {

  loadMore() {
    prom = Api.search(this.apiState);
    this.apiState.page++;
    return prom;
  }

  componentDidMount() {
    //console.log("Mount");
    this.loadMore().then(d => { 
      this.setState((s, p) => ({
        data: d.data,
        meta: d.meta,
        updating: false,
      }))
    });
  }

  constructor(props) {
    super(props);
    this.apiState = props.apiState || {page: 1};
    this.state = {
      data: [],
      meta: {},
      updating: true,
      modalVis: false,
      viewImg: {}
    };
  }

  renderItem({item}) {
    return (
      <ImgItem
        thUrl={item.thumbs.small}
        onPress={() => {
          this.setState((s, p) => ({
            modalVis: true,
            viewImgId: item.id,
          }));
        }}
      />
    );
  }

  render() {
    //console.log(this.state.meta);
    let lastpage = this.state.meta.current_page === this.state.meta.last_page;
    let inside;
    if (this.state.updating && this.state.data.length === 0) {
      inside = <Text style={styles.cent}>Searching...</Text>
    }
    else if (this.state.data.length > 0) {
      inside = <FlatList
        columnWrapperStyle={styles.fl}
        data={this.state.data}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={i => i.id}
        numColumns={2}
        
        ListFooterComponent={() => {
          if (lastpage)
            return null;
          return (
            <PrettyButton
              disabled={this.state.updating}
              disabledText="Updating..."
              text="More..."
              onPress={() => {
                this.setState((s, p) => ({
                  updating: true,
                }))
                this.loadMore().then(d => {
                  this.setState((s, p) => ({
                    data: s.data.concat(d.data),
                    meta: d.meta,
                    updating: false,
                  }))
              })}}
              />
          );
        }}
        ListFooterComponentStyle={styles.footer}
        ListHeaderComponent={
          <View>
            <Text style={styles.hText}>Wallpaper Listing</Text>
          </View>
        }
        ListHeaderComponentStyle={styles.header}
      />
    } else {
      inside = <Text style={styles.cent}>No wallpapers found!{"\n"}:(</Text>
    }

    return (
        <View style={styles.container}>
          {inside}
          <View style={styles.modal}>
            <ImageView
              visible={this.state.modalVis}
              onRequestClose={() => {
                this.setState((s, p) => ({
                  modalVis: false,
                }))
              }}
              itemId={this.state.viewImgId}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {

  },
  cent: {
    fontSize: 30,
    paddingTop: 50,
    textAlign: 'center',
    color: '#f5f3d5',
  },
  hText: {
    fontSize: 30,
    color: '#f5f3d5',
  },
  header: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  footer: {
    marginHorizontal: 30,
    marginVertical: 40,
  },
  container: {
  },
  fl: {
    justifyContent: 'space-between',
  },
})

export default ImgList;