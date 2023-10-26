import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import useAuth from './src/common/hooks/useAuth';
import AuthScreen from './src/screens/AuthScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ShopScreen from './src/screens/ShopScreen';

export default function App() {


  const Tab = createBottomTabNavigator();
  const { isLoading, isAuthenticated } = useAuth(); 
  const [authenticated, setAuthenticated] = useState(false); 

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {authenticated ? ( // Если пользователь авторизован, показываем другой экран
          <Tab.Navigator>
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        ) : (
          <AuthScreen setAuthenticated={setAuthenticated} /> // Передаем функцию для установки флага авторизации
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flex: 1,
    backgroundColor: '#fff',
  },
});
