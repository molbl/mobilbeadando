import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const dw = Dimensions.get('window').width;
const gap = dw / 75;
const iw = (dw - gap) / 2;

const ImgItem = (props) => {
  return (
  <TouchableHighlight
    style={styles.view}
    onPress={props.onPress}
  >
    <Image
      style={styles.image}
      source={{
        uri: props.thUrl
      }}
    />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  image: {
    width: iw,
    height: 200,
  },
  view: {
    marginTop: gap,
  }
})

export default ImgItem;