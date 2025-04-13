import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CardComponent from './card.module.jsx';

export default function SectionCards({ subtitle, title, produtos }) {
    return (
        <View style={styles.container}>
            <Text style={styles.seeMore}>{subtitle}</Text>
            <Text style={styles.titleText}>{title}</Text>

            <View style={styles.cardContainer}>
                {produtos.slice(0, 2).map(produto => (
                    <CardComponent
                        key={produto.id}
                        imageUri={produto.imageUri}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        desconto={produto.desconto}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.verMaisButton}>
                <Text style={styles.verMaisText}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9f7f1',
    },
    seeMore: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    titleText: {
        fontSize: 24,
        color: '#ada584',
        fontWeight: '300',
        marginBottom: 16,
        letterSpacing: 1,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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