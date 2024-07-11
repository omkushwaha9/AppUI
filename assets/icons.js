// iconFile
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
    notifications: (props) => <Ionicons name='notifications' size={26} {...props} />,
    explore: (props) => <Feather name='compass' size={26} {...props} />,
    create: (props) => <AntDesign name='pluscircleo' size={26} {...props} />,
    profile: (props) => <AntDesign name='user' size={26} {...props} />
}