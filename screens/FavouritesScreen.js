import React from 'react';
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, StyleSheet } from 'react-native';

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import TextView from "../components/TextView";


function FavoritesScreen(props) {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <TextView>
                    No Favorite meals found. Start adding some!
                </TextView>
            </View>
        )
    }

    return <MealList listData={favMeals} navigation={props.navigation}/>;
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }}/>
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default FavoritesScreen;