import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Home from './pages/Home';
import Notification from './pages/Notification';
import TimeLine from './pages/TimeLine';
import Atendance from './pages/Atendance';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                style: {
                    backgroundColor: '#121213',
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#fa0aaf',
                tabBarInactiveTintColor: '#9eaaef',
                tabBarItemStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarStyle: {
                    display: 'flex',
                }
            }}>

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        // <Entypo name="home" size={size} color={color} />
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="TimeLine"
                component={TimeLine}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        // <Entype name='notification' size={size} color={color} />
                        <MaterialCommunityIcons name="notification-clear-all" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Atendance"
                component={Atendance}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        // <Entypo name="home" size={size} color={color} />
                        <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
