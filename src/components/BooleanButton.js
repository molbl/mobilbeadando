import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const BooleanButton = (props) => {
    const [isOn, setOn] = useState(props.initial);
    
    return (
        <View style={[styles.container, props.styles, isOn ? styles.active : []]}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.onPress(!isOn);
                    setOn(!isOn);
                }}
            >
                <Text style={styles.txt}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: '#827680',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 3,
    },
    active: {
        backgroundColor: '#856187',
    },
    button: {
        
    },
    txt: {
        textAlign: 'center',
        color: '#f5f3d5',
    }
});

export default BooleanButton;