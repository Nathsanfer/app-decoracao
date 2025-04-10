import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ContactScreen() {
    const navigation = useNavigation();

    const handleSubmit = () => {
        Alert.alert("Formulário enviado!", "Obrigado por entrar em contato.");
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                    <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>SENAI</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>Entre em Contato</Text>
                <Text style={styles.subtitle}>Preencha o formulário abaixo:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Seu nome"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                />
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Sua mensagem"
                    placeholderTextColor="#aaa"
                    multiline
                    numberOfLines={4}
                />
                <Button title="Enviar" onPress={handleSubmit} color="#3a5a40" />
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
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
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