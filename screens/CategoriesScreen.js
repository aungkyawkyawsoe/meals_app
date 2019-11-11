import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen(props) {

    const renderGridItem = itemData => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}
        />;
    };

    return (
        <FlatList
            keyExtractor={item => item.id}
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}/>
    );
}


CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }}/>
            </HeaderButtons>
        )
    }
};


export default CategoriesScreen;