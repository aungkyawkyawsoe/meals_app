import React, { useState, useEffect, useCallback } from 'react';
import { Platform, View, Text, Switch, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import Colors from "../values/Colors";

const FilterSwith = props => {
    return (
        <View style={ styles.filterContainer }>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Platform.OS === 'android' ? Colors.primaryDim :  Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? props.state ? Colors.primaryColor : '#aaa ' : 'white'
                }
                value={ props.state }
                onValueChange={props.onChange}/>
        </View>
    );
};

function FiltersScreen(props) {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };

        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegetarian]);

    useEffect(()=> {
        navigation.setParams({ save: saveFilters });
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filter / Restrictions</Text>
            <FilterSwith label='Gluten-free' state={isGlutenFree} onChange={newValue=> setIsGlutenFree(newValue)}/>
            <FilterSwith label='Lactose-free' state={isLactoseFree} onChange={newValue=> setIsLactoseFree(newValue)}/>
            <FilterSwith label='Vegan' state={isVegan} onChange={newValue=> setIsVegan(newValue)}/>
            <FilterSwith label='Vegetarian' state={isVegetarian} onChange={newValue=> setIsVegetarian(newValue)}/>
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }}/>
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Save' iconName='ios-save' onPress={
                    navData.navigation.getParam('save')
                }/>
            </HeaderButtons>
        )
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        marginVertical: 15
    }
});

export default FiltersScreen;