import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

// Importe da biblioteca de ícones
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileOptions({ options }) {
    // Função para renderizar cada item da lista
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.option}>
            <MaterialIcons name={item.icon} size={24} color="#3a5a40" />
            <Text style={styles.optionText}>{item.label}</Text>
            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
    );

    return (

        <View style={styles.container}>

            <View style={styles.profileHeader}>
                <View style={styles.profileImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: "https://avatars.githubusercontent.com/u/158168917?v=4https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg" }} // Use 'source' com um objeto { uri: '...' }
                    />
                </View>
                <Text style={styles.profileName}>Nathalia Santos Ferreira</Text>
                <Text style={styles.profileEmail}>nathalia.santos@gmail.com</Text>
            </View>

            <FlatList
                data={options}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={styles.optionsList}
            />

        </View>
    )
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
    profileHeader: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    profileImage: {
        marginBottom: 8,
        width: 150,
    },
    image: {
        borderRadius: 75,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#3a5a40",
    },
    profileEmail: {
        fontSize: 14,
        color: "#888",
    },
    optionsList: {
        marginTop: 16,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    optionText: {
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
        color: "#3a5a40",
    }
});