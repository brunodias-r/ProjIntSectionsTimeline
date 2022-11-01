import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Desafio from '../pages/Desafio';
import AtividadeEstudoPrevio from '../pages/AtividadeEstudoPrevio';
import TimelineUC from '../pages/TimelineUC';
import TimelineAcompanhamento from '../pages/TimelineAcompanhamento';

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
                name="Desafio"
                component={Desafio}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Timeline"
                component={TimelineUC}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Estudo prévio"
                component={AtividadeEstudoPrevio}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="notification-clear-all" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Acompanhamento"
                component={TimelineAcompanhamento}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
