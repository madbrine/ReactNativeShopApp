import React from 'react'
import { StyleSheet, TextInput} from 'react-native';

interface IProps {
    onChangeText: () => void;
    value: string;
    placeholder: string;
    width?: number;
}

function InputUI({
    onChangeText,
    value,
    placeholder,
    width
}: IProps) {

    return (  
        <TextInput
            style={s['input']}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
        />
    );
}

export default InputUI;

const s = StyleSheet.create({
    input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        width: '100%',
    }
})