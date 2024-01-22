import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn';
import React, { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Home from '../pages/Home';
import Info from '../pages/Info';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();


function name(params) {
    return (
        <InsideStack.Navigator>
            <InsideStack.Screen name='Exercicios' component={List} />
            <InsideStack.Screen name='details' component={Details} />
        </InsideStack.Navigator>
    )
}

export default function Routes() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log('user', user);
            setUser(user);
        });
    }, [])

    return (
        <Stack.Navigator inicialRouteName="Login">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            {user ? (
                <Stack.Screen
                    name="SignIn"
                    component={Home}
                    options={{ headerShown: false }} />
            ) : (
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }} />
            )}
            <Stack.Screen
                name="Info"
                component={Info}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}