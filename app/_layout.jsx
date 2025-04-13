import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons"
/* icons.expo.fyi/index */

export default function Layout({ }) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <Drawer screenOptions={{
                drawerActiveTintColor: "#3a5a40", // Cor dos ícones ativos
                drawerInactiveTintColor: "#666", // Cor dos ícones inativos
                drawerStyle: {
                    backgroundColor: "#f5f5f5", // Cor de fundo do Drawer
                },
            }}>

                <Drawer.Screen name="index"
                    options={{
                        title: "Home",
                        headerShown: false,
                        headerLeft: true,
                        drawerLabel: "Home",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />

                <Drawer.Screen name="profile"
                    options={{
                        title: "Perfil",
                        drawerLabel: "Perfil",
                        headerShown: false,
                        headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                    }}
                />

                <Drawer.Screen name="contact"
                    options={{
                        title: "Contato",
                        drawerLabel: "Contato",
                        headerShown: false,
                        headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="call" size={size} color={color} />
                        ),
                    }} />

                <Drawer.Screen name="counter"
                    options={{
                        title: "Contador",
                        drawerLabel: "Contador",
                        
                        headerShown: false,
                        headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="call" size={size} color={color} />
                        ),
                    }} />

            </Drawer>

        </GestureHandlerRootView>
    );
}