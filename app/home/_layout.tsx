import { View, Text, Image } from 'react-native'
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
                    title: 'Explore',
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='compass' size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="create"

                options={{
                    title: 'Create',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='pluscircleo' size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: 'Notification',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name='notifications' size={size} color={color} />
                    )
                }}
            />
            {/* <Tabs.Screen
                name="profile"

                options={{
                    title: 'Profile',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='user' size={size} color={color} />
                    )
                }}
            /> */}
           <Tabs.Screen
          name="profile"
           // component={SettingsScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image style={{height: 35}} resizeMode='contain' source={require('../../assets/images/om.jpg')} />
              );
            },
          }}
        />
        </Tabs>
    )
}