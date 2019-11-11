import React, { useEffect } from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import TextView from "../components/TextView";
import Colors from "../values/Colors";


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <TextView>{props.children}</TextView>
        </View>
    );
};

function MealDetailsScreen(props) {

    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    useEffect(()=> {
        props.navigation.setParams({ mealTitle: selectedMeal.title });
    },[selectedMeal]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <TextView style={styles.label}>{ selectedMeal.duration } min</TextView>
                <TextView style={styles.label}>{ selectedMeal.complexity.toUpperCase() }</TextView>
                <TextView style={styles.label}>{ selectedMeal.affordability.toUpperCase() }</TextView>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            { selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ ingredient }</ListItem>) }
            <Text style={styles.title}>Steps</Text>
            { selectedMeal.steps.map(step => <ListItem key={step}>{ step }</ListItem>) }
        </ScrollView>
    );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star' onPress={() => {
                    console.log('Mark as favorite!');
                }}/>
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor: Colors.primaryLight,
        borderWidth: 0.4,
        borderColor: 'rgba(118,84,233,0.44)'
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 22,
        marginBottom: 10,
        marginTop: 20,
        color: Colors.primaryColor,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#aaa',
        borderWidth: 0.5,
        borderRadius: 3,
        padding: 10
    },
    label: {
        fontFamily: 'roboto-bold',
        color: Colors.primaryColor
    }
});

export default MealDetailsScreen;