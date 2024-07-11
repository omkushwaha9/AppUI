import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../components/customDrawerComponent';


export default function _layout() {
    return <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: -20
            },
            // drawerActiveBackgroundColor: 'gray',
            // drawerActiveTintColor: 'white',
            // drawerInactiveTintColor: 'white'
        }}
        drawerContent={CustomDrawerContent}
    >

        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({size, color})=>(
                    <AntDesign name ='home' size={size} color={color} />
                )

            }}
        />
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'Setting',
                title: 'Settings',
                drawerIcon: ({ size, color})=>(
                    <AntDesign name ='setting' size={size} color={color} />
                )

            }}
        />
        
    </Drawer>
}