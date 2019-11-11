import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform, View, Text, StyleSheet} from "react-native";
import TextView from "./TextView";

const CardContainer = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

function CategoryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            <CardContainer
                style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <TextView style={styles.title} numberOfLines={2}>{props.title}</TextView>
                </View>
            </CardContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.4,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;