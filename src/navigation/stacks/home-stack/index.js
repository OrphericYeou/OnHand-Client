import * as React from 'react';
import GameMenuScreen from '../../../view/Game/GameMenuScreen';
import PlayGameScreen from '../../../view/Game/PlayGameScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();



export default function InitialContainer() {
    return (

        <Stack.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: true,
                
            }}>
            <Stack.Screen name="home" component={GameMenuScreen}  />
            <Stack.Screen 
                name="play-game" 
                component={PlayGameScreen}
                options={{
                    headerShown:false,
                }} />
        </Stack.Navigator>


    );
}




