import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import Colors from "../values/Colors";
import {Platform, Text} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FavoritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

/** Detault Navigation Stack Options **/
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerBackTitleStyle: {
      fontFamily: 'roboto'
    },
    headerTitleStyle: {
      fontFamily: 'roboto-bold',
    },
    headerTitle: 'A Screen',
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

/** Meals Navigator **/
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

/** Favorites Navigator **/
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
}, {
   defaultNavigationOptions: defaultStackNavOptions
});

/** Bottom Tabs Screen Configurations **/
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'roboto-bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'roboto-bold'}}>Favorites</Text> : 'Favorites'
        }
    }
};


const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle:{
               fontFamily: 'roboto-bold'
            },
            activeTintColor: Colors.accentColor
        }
    });

/** Filters Navigator **/
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});


/** Create Drawer Navigator **/
const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'roboto'
        }
    }
});

export default createAppContainer(MainNavigator);