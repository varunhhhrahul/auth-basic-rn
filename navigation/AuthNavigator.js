import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SECONDARY } from '../constants/colors';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import { LOGIN_SCREEN } from '../constants/routes';
import { NavigationContainer } from '@react-navigation/native';

const AuthStackNaviator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'white',
        },
      }}
    >
      <AuthStackNaviator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: SECONDARY,
          },
          headerBackTitleStyle: {
            fontFamily: 'space-mono-bold',
          },
          headerTitleStyle: {
            fontFamily: 'space-mono-bold',
          },
          headerTintColor: '#ffffff',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <AuthStackNaviator.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{
            title: 'Login'.toUpperCase(),
          }}
        />
      </AuthStackNaviator.Navigator>
    </NavigationContainer>
  );
};
