import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//screens
import DietScreen from './screens/DietScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import RoutineScreen from './screens/RoutineScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Inicio"
    screenOptions={{
      tabBarActiveTintColor : 'blue',
    }}
    >
    <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
    <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Dietas"
        component={DietScreen}
        options={{
          tabBarLabel: 'Dietas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="nutrition" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Rutinas"
        component={RoutineScreen}
        options={{
          tabBarLabel: 'Rutinas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Sesion"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Iniciar Sesion',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-cog" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Registro"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Registrarse',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brightness-5" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
    </Tab.Navigator>
  );
}

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}