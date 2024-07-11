import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="setting" 
          options={{
            drawerLabel: 'Home',
            title: 'overview',
            
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}