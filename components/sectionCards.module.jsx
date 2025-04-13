import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SectionCards({ subtitle, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.seeMore}>{subtitle}</Text>
            <Text style={styles.titleText}>{title}</Text>
            
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image 
                        source={{ uri: 'https://panoverse-cdn.com.br/img.panorama/produto/81706/cristaleira-roma-2-portas-1-gaveta-imbuia-rodmoveis-550112-large.jpg' }} 
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardDescription}>Cristaleira com 2 portas e 1 gaveta</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.discountedPrice}>R$ 546,89/un.</Text>
                        </View>
                        <View style={styles.discountTag}>
                            <Text style={styles.discountText}>30% de desconto</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image 
                        source={{ uri: 'https://panoverse-cdn.com.br/img.panorama/produto/81706/cristaleira-roma-2-portas-1-gaveta-imbuia-rodmoveis-550112-large.jpg' }} 
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardDescription}>Escrivaninha com estante office com 3 gavetas</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.discountedPrice}>R$ 319,99/un.</Text>
                        </View>
                        <View style={styles.discountTag}>
                            <Text style={styles.discountText}>25% de desconto</Text>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.verMaisButton}>
                <Text style={styles.verMaisText}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    seeMore: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    titleText: {
        fontSize: 24,
        color: '#3a5a40',
        fontWeight: '350',
        marginBottom: 16,
        letterSpacing: 1,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
});