import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import {useScreens} from "react-native-screens";
import store from "./store";
import { Provider } from "react-redux";

useScreens();

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFont = () => {
    return Font.loadAsync({
        'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    });
};

export default function App() {


    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFont}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
