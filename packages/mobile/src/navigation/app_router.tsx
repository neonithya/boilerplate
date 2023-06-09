import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AuthScreen from '../feature/Authscreen'
import DashboardScreen from '../feature/dashboard/dashboard_screen'
import DetailsSreen from '../feature/details'
import LoginScreen from '../feature/login/login_screen'
import Screen from '../screen'
import RoutePaths from './router_path'

const AppRouter = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={RoutePaths.details} component={DetailsSreen} />
        <Stack.Screen name={RoutePaths.login} component={LoginScreen} />
        <Stack.Screen name={RoutePaths.dashboard} component={DashboardScreen} />
        <Stack.Screen name={RoutePaths.auth} component={AuthScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
