import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HeaderComponent() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>SENAI</Text>
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartButton}>
                    <Ionicons name="cart-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                    <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3a5a40",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        elevation: 4,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    cartButton: {
        marginRight: 15,
    },
    menuButton: {
        marginLeft: 5,
    }
});