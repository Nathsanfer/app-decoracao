import React, { useState } from "react"; // Importe o useState para gerenciar o estado do texto
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native"; // Adicione o TextInput

// Importe dos componentes 
import HeaderComponent from "../components/header.module.jsx";
import ProfileOptions from "../components/profileOptions.jsx";

export default function SobreScreen({}) {
    // Estado para armazenar o texto da dúvida
    const [doubtText, setDoubtText] = useState("");

    const profileOptions = [
        { id: "1", icon: "assignment", label: "Suas informações" },
        { id: "2", icon: "lock", label: "Segurança" },
        { id: "3", icon: "credit-card", label: "Cartões" },
        { id: "4", icon: "shopping-cart", label: "Minhas compras" },
        { id: "5", icon: "local-offer", label: "Cupons" },
        { id: "6", icon: "help-outline", label: "Central de ajuda" },
        { id: "7", icon: "gavel", label: "Termos de uso" },
        { id: "8", icon: "privacy-tip", label: "Privacidade" },
    ];

    return (
        <ScrollView style={styles.container}>

            <HeaderComponent />

            <ProfileOptions options={profileOptions} />

            {/* Adicionando a área para escrever a dúvida */}
            <View style={styles.doubtSection}>
                <Text style={styles.doubtTitle}>Deixe sua dúvida</Text>
                <TextInput
                    style={styles.doubtInput}
                    placeholder="Escreva sua mensagem aqui..."
                    multiline // Permite múltiplas linhas de texto
                    numberOfLines={4} // Define o número inicial de linhas visíveis
                    value={doubtText}
                    onChangeText={setDoubtText} // Atualiza o estado com o texto digitado
                />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    titleText: {
        fontSize: 24,
        color: '#3a5a40',
        fontWeight: '350',
        marginBottom: 16,
        letterSpacing: 1,
    },
    // Estilos para a nova área de dúvida
    doubtSection: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32, // Para dar um respiro no final da tela
    },
    doubtTitle: {
        fontSize: 18,
        color: '#3a5a40',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    doubtInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        height: 100,
        textAlignVertical: 'top', // Alinha o texto no topo em Android
    },
});
