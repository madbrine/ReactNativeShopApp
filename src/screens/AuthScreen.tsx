import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import InputUI from '../ui/InputUI';
import TextUI from '../ui/TextUI';
import network from '../common/services/network'
import writeToken from '../common/services/writeToken';

interface IProps {
    setAuthenticated: (value: boolean) => void;
}

function AuthScreen({ setAuthenticated }: IProps) {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const sendLogin = async () => {
        const token = await network.post.login(userName, userPassword);
        setAuthenticated(true); 
    }

    return (  
        <View style={s['container']}>
            <TextUI type="header">Войдите в аккаунт</TextUI>
            <InputUI
                onChangeText={setUserName}
                value={userName}
                placeholder="Имя аккаунта"
            />
            <InputUI
                onChangeText={setUserPassword}
                value={userPassword}
                placeholder="Пароль"
            />
            <Button onPress={sendLogin} title="Войти"/>
        </View>
    );
}

export default AuthScreen;

const s = StyleSheet.create({
    'container': {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 8
    }
})