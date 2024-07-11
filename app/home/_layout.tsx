import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'

export default function _layout() {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
                headerShown: false
            }}>
            <Tabs.Screen
                name="explore"

                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='compass' size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="create"

                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='pluscircleo' size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name='notifications' size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"

                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='user' size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}