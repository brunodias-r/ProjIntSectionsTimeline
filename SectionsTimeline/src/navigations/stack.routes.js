import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import Desafio from '../components/Desafio.js';
import AtividadeEstudoPrevio from '../components/AtividadeEstudoPrevio.js';
import TimelineSessoesPage from '../scenes/TimelineSessoesPage.js';
import TimelineAcompanhamentoPage from '../scenes/TimelineAcompanhamentoPage.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoTimelineAcompanhamentoPage from '../scenes/InfoTimelineAcompanhamentoPage.js'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Sessoes"
                component={TimelineSessoesPage}
            />

            <Stack.Screen
                name="Acompanhamento"
                component={TimelineAcompanhamentoPage}
            />

            <Stack.Screen
                name="Estudo prévio"
                component={AtividadeEstudoPrevio}
            />

            <Stack.Screen
                name="InfoAcompanhamento"
                component={InfoTimelineAcompanhamentoPage}
            />

        </Stack.Navigator>
    );
}

// export default function StackRoutes() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName="Home"
//                 screenOptions={{
//                     style: {
//                         backgroundColor: '#121213',
//                         borderTopColor: 'transparent'
//                     },
//                     tabBarActiveTintColor: '#fa0aaf',
//                     tabBarInactiveTintColor: '#9eaaef',
//                     tabBarItemStyle: {
//                         paddingBottom: 5,
//                         paddingTop: 5,
//                     },
//                     tabBarStyle: {
//                         display: 'flex',
//                     }
//                 }}>

//                 {/* <Tab.Screen
//                     name="Desafio"
//                     component={Desafio}
//                     options={{
//                         tabBarIcon: ({ size, color }) => (
//                             <MaterialCommunityIcons name="home" size={size} color={color} />
//                         )
//                     }}
//                 /> */}

//                 {/* <Tab.Screen
//                     name="Timeline Sessoes"
//                     component={TimelineSessoesPage}
//                     options={{
//                         tabBarIcon: ({ size, color }) => (
//                             <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
//                         )
//                     }}
//                 /> */}

//                 <Tab.Screen
//                     name="Acompanhamento"
//                     component={TimelineAcompanhamentoPage}
//                     options={{
//                         tabBarIcon: ({ size, color }) => (
//                             <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
//                         )
//                     }}
//                 />

//                 <Tab.Screen
//                     name="Estudo prévio"
//                     component={AtividadeEstudoPrevio}
//                     options={{
//                         tabBarIcon: ({ size, color }) => (
//                             <MaterialCommunityIcons name="notification-clear-all" size={size} color={color} />
//                         )
//                     }}
//                 />

//                 {/* <Tab.Screen
//                 name="Acompanhamento"
//                 component={TimelineAcompanhamentoPage}
//                 options={{
//                     tabBarIcon: ({ size, color }) => (
//                         <MaterialCommunityIcons name="timeline-minus" size={size} color={color} />
//                     )
//                 }}
//             /> */}
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

