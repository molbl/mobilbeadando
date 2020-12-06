import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BooleanButton from './BooleanButton';
import PrettyButton from './PrettyButton';


const SearchInput = (props) => {
    return (
        <View style={styles.inpView}>
            <TextInput
                placeholder='Search...'
                style={styles.input}
                placeholderTextColor='#d6c9d388'
                onSubmitEditing={props.onSubmitEditing}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}

function changeCharAt(str, pos, ch) {
    return str.substr(0, pos) + ch + str.substr(pos + 1);
}

let categs = '111';

function categ_set(categ_pos, isOn) {
    categs = changeCharAt(categs, categ_pos, isOn ? '1' : '0');
}

const SearchScreen = (props) => {
    const [qText, setQText] = useState("");

    return (
        <ScrollView>
            <View style={styles.view}>
                <SearchInput
                    onChangeText={(s) => setQText(s)}
                />
                <Text style={styles.optText}>Categories</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <BooleanButton
                        styles={{width: '33%'}}
                        initial={true}
                        text="General"
                        onPress={(isOn) => categ_set(0, isOn)}
                    />
                    <BooleanButton
                        styles={{width: '33%'}}
                        initial={true}
                        text="Anime"
                        onPress={(isOn) => categ_set(1, isOn)}
                    />
                    <BooleanButton
                        styles={{width: '33%'}}
                        initial={true}
                        text="People"
                        onPress={(isOn) => categ_set(2, isOn)}
                    />
                </View>
                
                <View style={styles.bottom}>
                    <PrettyButton
                        style={styles.searchButton}
                        text="Search"
                        onPress={() => {
                            props.navigation.navigate('Wallpaper Listing', { apiState: {
                                page: 1,
                                query: qText,
                                categories: categs,
                            }});
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bottom: {
        paddingTop: 30,
    },
    optText: {
        color: '#f5f3d5',
        fontSize: 22,
        marginVertical: 20,
        marginHorizontal: 4,
    },
    view: {
        flex: 1,
        marginVertical: 16,
        marginHorizontal: 8,
    },
    inpView: {
        borderColor: '#e3a9a6',
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#00000035',
    },
    input: {
        textAlign: 'center',
        color: '#e3a9a6',
    }
});


export default SearchScreen;