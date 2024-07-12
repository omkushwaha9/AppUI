import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function CustomDrawerContent(props: any) {

    const { bottom } = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer())
    }
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                <View style={{
                    padding: 20,
                }}>
                    <Image style={{ height: 35 }} resizeMode='contain' source={require('../assets/images/favicon.png')} />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <Text style={styles.text1}>
                Login </Text>

            <Pressable onPress={closeDrawer} style={{
                padding: 20,
                paddingBottom: bottom + 10,
            }}>

                <Text style={styles.Addaccount} >
                    Add account</Text>
                <Text style={styles.container} >
                    Log out</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({

    text1: {
        textAlign: 'auto',
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 19,
        color: 'grey',
    },
    Addaccount: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        color: '#0958d9',
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
        color: 'red',
    },
})