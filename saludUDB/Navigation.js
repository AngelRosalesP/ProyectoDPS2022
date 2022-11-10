import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

//pantallas de autentificacion
import LoginScreen from './authscreens/LoginScreen';
import RegisterScreen from './authscreens/RegisterScreen';
import SplashScreen from './authscreens/SplashScreen';

//pantallas dentro de la navegacion de la app
import DietScreen from './screens/DietScreen';
import ProfileScreen from './screens/ProfileScreen';
import RoutineScreen from './screens/RoutineScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthTabs() {
  return (
    <Tab.Navigator initialRouteName="Resgistro"
    screenOptions={{
      tabBarActiveTintColor : 'blue',
      tabBarShowLabel : false,
      tabBarStyle : {
        height : 70,
        position : 'absolute',
        bottom : 16,
        right : 16,
        left : 16,
        borderRadius : 16,
        showLabel : false,
      },
    }}
    >
     <Tab.Screen
        name="Sesion"
        component={LoginScreen}
        options={{
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brightness-5" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Perfil"
    screenOptions={{
      tabBarActiveTintColor : 'blue',
      tabBarShowLabel : false,
      tabBarStyle : {
        height : 70,
        position : 'absolute',
        bottom : 16,
        right : 16,
        left : 16,
        borderRadius : 16,
        showLabel : false,
      },
    }}
    >
    <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
        <Tab.Screen
        name="regresar"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
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
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        options={{animationEnabled: false, header: () => null}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Registro"
        options={{animationEnabled: false, header: () => null}}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Sesion"
        options={{animationEnabled: false, header: () => null}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="AuthTabs"
        options={{animationEnabled: false, header: () => null}}
        component={AuthTabs}
      />
      <Stack.Screen
        name="Mytabs"
        options={{animationEnabled: false, header: () => null}}
        component={MyTabs}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}