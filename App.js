import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home} from './components/Home'
import {Chat} from './components/Chat'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
  <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Chat" component={Chat} />
       </Stack.Navigator>
     </NavigationContainer>

</>
   
  );
}
