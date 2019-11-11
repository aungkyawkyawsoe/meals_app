import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TextView(props) {
    return <Text style={{...styles.text,...props.style}}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'roboto'
    }
});

export default TextView;