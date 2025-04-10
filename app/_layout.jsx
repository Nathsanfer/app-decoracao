import { Drawer } from "expo-router/drawer"
import Ionicons from "react-native-vector-icons/Ionicons"
/* icons.expo.fyi/index */

export default function Layout({ }) {
    return (
        <Drawer>

            <Drawer.Screen name="index"
                options={{
                    title: "Home",
                    drawerLabel: "Home",
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen name="sobre"
                options={{
                    title: "Sobre",
                    drawerLabel: "Sobre",
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />

        </Drawer>
    );
}