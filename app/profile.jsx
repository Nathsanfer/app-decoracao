import { View, StyleSheet, ScrollView } from "react-native";
import HeaderComponent from "../components/header.module.jsx";

export default function SobreScreen({}) {
    return (
        <ScrollView style={styles.container}>

            <HeaderComponent />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    }
});