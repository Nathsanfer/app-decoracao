import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardComponent({ imageUri, descricao, preco, desconto, linkPage }) {
    
    const navigation = useNavigation();
    
    return (
        
        <TouchableOpacity
        onPress={() => navigation.navigate(linkPage)} // Navega para a página especificada
        style={styles.card}
    >
                <Image
                    source={{ uri: imageUri }}
                    style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                    <Text style={styles.cardDescription}>{descricao}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.discountedPrice}>{preco}</Text>
                    </View>
                    <View style={styles.discountTag}>
                        <Text style={styles.discountText}>{desconto}</Text>
                    </View>
                </View>
                </TouchableOpacity>
        
    );
}

const styles = {
    card: {
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16,
        backgroundColor: '#E1D9D3',
    },
    cardImage: {
        height: 130,
        width: '100%',
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 10,
    },
    cardDescription: {
        fontSize: 12,
        color: '#333',
        marginBottom: 6,
    },
    priceContainer: {
        marginTop: 4,
    },
    discountedPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    discountTag: {
        marginTop: 4,
    },
    discountText: {
        fontSize: 12,
        color: '#666',
    },
    verMaisButton: {
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        marginTop: 10,
    },
    verMaisText: {
        color: '#666',
        fontSize: 14,
    }
}