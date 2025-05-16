import { Text, View, StyleSheet, ScrollView } from "react-native";

// Importe dos componentes 
import HeaderComponent from "../components/header.module.jsx";
import ProfileOptions from "../components/profileOptions.jsx";

export default function SobreScreen({}) {

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
});