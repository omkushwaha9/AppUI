// iconFile
import { Image } from 'expo-image';
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
    notifications: (props) => <Ionicons name='notifications' size={26} {...props} />,
    explore: (props) => <Feather name='compass' size={26} {...props} />,
    create: (props) => <AntDesign name='pluscircleo' size={26} {...props} />,
   profile: (props) => <Image 
   // resi ='contain' 
   source={require('../assets/images/om.jpg')}  
   style={{height:26,
     width:26,
    borderRadius:20,
    }} {...props} />
   
}