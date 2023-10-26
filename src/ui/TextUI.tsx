import React from 'react'
import { StyleSheet, Text } from 'react-native';

interface IProps {
    text: string,
    type: '' | '' | ''
}

function TextUI({
    text,
    type,
}) {
    return (
        <Text style={
            styles.text
        }
        >

        </Text>
    );
}

export default TextUI;

const styles = StyleSheet.create({
    text: {

    }
})