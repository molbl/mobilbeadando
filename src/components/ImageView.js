import React, { useState } from 'react';
import { Image, Text, ScrollView, TouchableOpacity, View, StyleSheet, Modal, Dimensions } from 'react-native';

import Api from '../net/api';
import TagList from './TagList';


const dw = Dimensions.get('window').width;
const iw = dw - 20;

const ImageView = (props) => {
    if (props.itemId === undefined)
        return null;
    const [imInfo, setImInfo] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [iid, setIid] = useState(0);
    const [inRequest, setInRequest] = useState(false);
    
    //console.log(iid);

    if (props.itemId !== iid) {
        setIid(props.itemId);
        setIsLoaded(false);
    }

    if (!isLoaded && !inRequest) {
        setInRequest(true);
        Api.wpFullInfo(props.itemId)
            .then(d => {
                //console.log(d);
                setImInfo(d.data);
                setIsLoaded(true);
                setInRequest(false);
            });
    }

    let inside;
    if (isLoaded) {
        //console.log(imInfo.path);
        inside = <Modal
            animationType='slide'
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onRequestClose}
        >
            <View style={styles.view}>
                <ScrollView>
                    <View style={styles.back}>
                        <TouchableOpacity
                            onPress={props.onRequestClose}
                        >
                            <Text style={styles.txt}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Image
                            style={[styles.img, {aspectRatio: parseFloat(imInfo.ratio)}]}
                            source={{
                                uri: imInfo.path
                            }}
                        />
                    </View>
                    <View style={styles.tags}>
                        <TagList
                            tags={imInfo.tags}
                        />
                    </View>
                </ScrollView>
            </View>
        </Modal>
    } else {
        <Text style={styles.txt}>Loading...</Text>
    }

    return (
        <View style={styles.view}>
            {inside}
        </View>
    );
}

const styles = StyleSheet.create({
    tags: {
        margin: 10,
    },
    center: {
        margin: 20,
        marginTop: 50,
        alignItems: 'center',
        elevation: 5
    },
    img: {
        width: iw,
        borderColor: 'white',
        borderWidth: 1,
    },
    back: {
        left: 4,
        position: 'absolute',
        top: 10,
    },
    txt: {
        color: '#dbdbdb',
        fontSize: 24,
    },
    view: {
        width: dw,
        flex: 1,
        marginTop: 0,
        backgroundColor: '#414759',
    },
});

export default ImageView;