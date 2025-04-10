import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"



export default function HomeScreen(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        
            <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
            
                <Ionicons name="menu" size={24} color="black" />
            
            </TouchableOpacity>

            <View>
            
                <Text> Seja bem vindo!</Text>
                <Text>Aqui temos a tela home</Text>

            </View>

        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        position: "absolute",
        top: 40,
        left: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 2,
    }
}