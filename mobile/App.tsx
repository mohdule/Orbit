// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CountrySelectionScreen from './src/screens/preLogin/CountrySelection';
import LoginScreen from './src/screens/preLogin/Login';
import Dashboard from './src/screens/postLogin/Dashboard';
import {ThemeProvider} from 'core';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CountrySelection"
          screenOptions={{
            cardStyle: {backgroundColor: '#f9f9f9'},
            gestureEnabled: false,
            headerShown: false,
          }}>
          <Stack.Screen
            name="CountrySelection"
            component={CountrySelectionScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
