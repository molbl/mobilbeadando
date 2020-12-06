import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AboutScreen = (props) => {
    return (
        <View style={styles.view}>
            <Text style={[styles.txt, styles.header]}>mobilbeadando - WHClient</Text>
            <Text style={[styles.txt, {marginTop: 20, textAlign: 'center'}]}>
                https://wallhaven.cc telefonos alkalmazás. Készült a Mobil Alkalmazásfejlesztés tárgyra, 2020 november körül.
            </Text>
            <Text style={[styles.txt, {marginTop: 50, textAlign: 'center'}]}>
                https://github.com/molbl/mobilbeadando
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 8,
        marginTop: 8,
    },
    txt: {
        fontSize: 16,
        color: '#f5f3d5',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
    }
});

export default AboutScreen;