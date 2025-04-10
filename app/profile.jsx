import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SobreScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                    <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>SENAI</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>Seja bem-vindo!</Text>
                <Text style={styles.subtitle}>Aqui temos a tela Sobre</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        backgroundColor: "#3a5a40",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        elevation: 4,
    },
    menuButton: {
        marginRight: 15,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
    },
    footer: {
        backgroundColor: "#3a5a40",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        color: "#fff",
        fontSize: 14,
    },
});