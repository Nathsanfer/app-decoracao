import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

// Importe dos componentes 
import HeaderComponent from "../components/header.module.jsx";


export default function ContactScreen() {

    return (
        <View style={styles.container}>

            <HeaderComponent />

            <View style={styles.content}>
                <Text style={styles.welcomeText}>Contato</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});