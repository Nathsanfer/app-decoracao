import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react"; // Importando useState

export default function HomeScreen() {
    const navigation = useNavigation();

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }
    function diminuir() {
        setContador(contador - 1);
    }
    function resetar() {
        setContador(0);
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                    <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>SENAI</Text>
            </View>

            {/* Conteúdo principal */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Contador</Text>
                <Text style={styles.subtitle}>Clique nos botões abaixo para interagir</Text>
            </View>

            {/* Contador */}
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>{contador}</Text>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity onPress={aumentar} style={[styles.button, styles.buttonIncrease]}>
                        <Ionicons name="add" size={24} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={diminuir} style={[styles.button, styles.buttonDecrease]}>
                        <Ionicons name="remove" size={24} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={resetar} style={[styles.button, styles.buttonReset]}>
                        <Ionicons name="refresh" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
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
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    counterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    counter: {
        fontSize: 80,
        fontWeight: "bold",
        color: "#3a5a40",
        marginBottom: 30,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    buttonIncrease: {
        backgroundColor: "#4CAF50", // Verde
    },
    buttonDecrease: {
        backgroundColor: "#F44336", // Vermelho
    },
    buttonReset: {
        backgroundColor: "#FFC107", // Amarelo
    },
});