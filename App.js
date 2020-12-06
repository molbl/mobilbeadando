import React from 'react';
import { StatusBar, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import ImgList from './src/components/ImgList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/components/SearchScreen';
import AboutScreen from './src/components/AboutScreen';

const Drawer = createDrawerNavigator();

function NavHome({ route, navigation }) {
  if (route.params) {
    apiState = route.params.apiState;
  } else {
    apiState = undefined;
  }
  return (
    <ImgList
      navigation={navigation}
      apiState={apiState}
    />
  );
}

function NavSearch({ navigation }) {
  return (
    <SearchScreen
      navigation={navigation}
    />
  );
}

function NavAbout({ navigation }) {
  return (
    <AboutScreen
      navigation={navigation}
    />
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.sav}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          sceneContainerStyle={styles.scenes}
          drawerStyle={styles.drawer}
          drawerContentOptions={{
            activeTintColor: '#f5f3d5',
            inactiveTintColor: '#f5f3d5',
            activeBackgroundColor: '#000000aa',
          }}
         >
          <Drawer.Screen options={{unmountOnBlur: true }} style={styles.sav} name="Wallpaper Listing" component={NavHome} />
          <Drawer.Screen name="Search" component={NavSearch} />
          <Drawer.Screen name="About" component={NavAbout} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sav: {
    height: Dimensions.get('window').height - (StatusBar.statusBarHeight || 24),
  },
  scenes: {
    backgroundColor: '#2b2f3b',
  },
  drawer: {
    backgroundColor: '#414759',
  }
});