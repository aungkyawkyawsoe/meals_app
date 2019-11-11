import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Colors from "../values/Colors";
import TextView from "./TextView";

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
            <View style={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground
                    style={styles.bgImage}
                    source={{ uri: props.image }}>
                <View style={styles.titleContainer}>
                    <TextView style={styles.title}>
                        { props.title }
                    </TextView>
                </View>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <TextView style={styles.bodyText}>{ props.duration } min</TextView>
                <TextView style={styles.bodyText}>{ props.complexity.toUpperCase() }</TextView>
                <TextView style={styles.bodyText}>{ props.affordability.toUpperCase() }</TextView>
            </View>
          </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: Colors.primaryLight,
        borderRadius: 10,
        borderColor: 'rgba(118,84,233,0.44)',
        borderWidth: 0.5,
        marginVertical: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    bodyText: {
        color: Colors.primaryColor,
        fontFamily: 'roboto-bold'
    }
});

export default MealItem;
