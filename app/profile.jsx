import { Text, View, StyleSheet, ScrollView } from "react-native";
import HeaderComponent from "../components/header.module.jsx";

export default function SobreScreen({}) {
    return (
        <ScrollView style={styles.container}>

            <HeaderComponent />

            <View>

            <Text style={styles.titleText}>MEU PERFIL</Text>

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
});