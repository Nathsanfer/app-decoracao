import { View, StyleSheet } from "react-native";
import HeaderComponent from "../components/header.module.jsx";

export default function SobreScreen() {

    return (
        <View style={styles.container}>

            <HeaderComponent />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    }
});