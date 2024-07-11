import { Stack } from "expo-router";
const StackLayout = () => {
    return(
        <Stack> 
            <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
            <Stack.Screen name="[drawer]" options={{headerShown:false}}/>
        </Stack>
    )
}