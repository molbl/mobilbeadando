import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Tagitem = (props) => {
    return (
        <View style={styles.tagView}>
            <Text key={props.tag.id} style={styles.txt}>
                {props.tag.name}
            </Text>
        </View>
    );
}

const TagList = (props) => {

    let txts = []
    for (let t of props.tags) {
        txts.push(
            <Tagitem
                tag={t}
            />
        );
    }
    return (
        <View style={styles.view}>
            {txts}
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 16,
        color: '#e0d8d7',
    },
    tagView: {
        padding: 4,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#cdc0ed',
        backgroundColor: '#414142',
        borderRadius: 30,
        alignSelf: 'flex-start',
        margin: 3,
    },
    view: {
    }
});

export default TagList;