import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const PrettyButton = (props) => {
    let inside;
    if (props.disabled && props.disabledText) {
        inside = <Text style={styles.text}>{props.disabledText}</Text>;
    } else {
        inside = <Text style={styles.text}>{props.text}</Text>;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                disabled={props.disabled}
                onPress={props.onPress}
            >
                {inside}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#e3a9a6',
        backgroundColor: '#00000035',
    },
    button: {
        
    },
    text: {
        paddingVertical: 6,
        textAlign: 'center',
        fontSize: 20,
        color: '#f5f3d5',
    }
})

export default PrettyButton;