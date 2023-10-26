import React from 'react'
import { StyleSheet, Text } from 'react-native';

interface IProps {
    children: string,
    type: 'header' | 'title' | 'label'
}

function TextUI({
    children,
    type,
}) {
    return (
        <Text style={s[type]}>
            {children}
        </Text>
    );
}

export default TextUI;

const s = StyleSheet.create({
    header: {
        fontSize: 28,
        fontWeight: '600',
        color: '#122429'
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000000'
    },
    labe: {
        fontSize: 12,
        fontWeight: '500',
        color: '#242424'
    }
})