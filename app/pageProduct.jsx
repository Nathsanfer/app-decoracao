import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import HeaderComponent from "../components/header.module.jsx";
import CarouselProductComponent from "../components/carouselProduct.module.jsx";
import Accordion from "../components/accordion.module.jsx";
import Ionicons from "react-native-vector-icons/Ionicons";

const slides = [
    {
        image: { uri: 'https://static.mobly.com.br/p/XFlex-SofC3A1s-SofC3A1-Connect-Premium-22C00m-Assento-RetrC3A1til2FReclinC3A1vel-com-porta-copos-e-entrada-USB-Suede-Capuccino-5245-7690021-1.jpg' }
    },
    {
        image: { uri: 'https://static.mobly.com.br/p/XFlex-SofC3A1s-SofC3A1-Connect-Premium-22C00m-Assento-RetrC3A1til2FReclinC3A1vel-com-porta-copos-e-entrada-USB-Suede-Capuccino-5246-7690021-2.jpg' }
    },
    {
        image: { uri: 'https://static.mobly.com.br/p/XFlex-SofC3A1s-SofC3A1-Connect-Premium-22C00m-Assento-RetrC3A1til2FReclinC3A1vel-com-porta-copos-e-entrada-USB-Suede-Capuccino-5249-7690021-4.jpg' }
    },
    {
        image: { uri: 'https://static.mobly.com.br/p/XFlex-SofC3A1s-SofC3A1-Connect-Premium-22C00m-Assento-RetrC3A1til2FReclinC3A1vel-com-porta-copos-e-entrada-USB-Suede-Capuccino-5251-7690021-6.jpg' }
    },
    {
        image: { uri: 'https://static.mobly.com.br/p/XFlex-SofC3A1s-SofC3A1-Connect-Premium-22C00m-Assento-RetrC3A1til2FReclinC3A1vel-com-porta-copos-e-entrada-USB-Suede-Capuccino-5252-7690021-7.jpg' }
    }
];

export default function SobreScreen() {
    // Função para renderizar estrelas baseadas na classificação
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<Ionicons key={i} name="star" size={14} color="#3a5a40" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<Ionicons key={i} name="star-half" size={14} color="#3a5a40" />);
            } else {
                stars.push(<Ionicons key={i} name="star-outline" size={14} color="#3a5a40" />);
            }
        }

        return stars;
    };

    return (
        <ScrollView style={styles.container}>
            <HeaderComponent />

            <Text style={styles.titleProduct}>Sófa retrátil e reclinável com molas com porta copos e entrada USB</Text>

            <CarouselProductComponent slides={slides} />

            <View style={styles.priceSection}>
                <View style={styles.priceHeader}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceTag}>R$ 1.319,99</Text>
                        <Text style={styles.priceTax}>à vista + R$ 29,90 de frete - ou até 10x de R$ 131,99</Text>
                    </View>

                    <TouchableOpacity style={styles.shareButton}>
                        <Ionicons name="share-social" size={18} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.starsContainer}>
                        {renderStars(4.5)}
                        <Text style={styles.ratingNumber}> (62)</Text>
                    </View>
                    <TouchableOpacity style={styles.shippingButton}>
                        <Text style={styles.shippingButtonText}>Calcular o frete</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerButton}>
            <View style={styles.containerQuantity}>
                <Text style={styles.text1}>Quantidade: 1</Text>
                <Text style={styles.text2}>50 disponíveis</Text>
                <Ionicons name="chevron-forward" size={18} color="#3a5a40" />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>ADICIONAR NO CARRINHO</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.divisor}></View>

            <Accordion title="Descrição do produto" 
            content={
                <View>
        
                    <Text style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>
                    O Sofá Connect Premium é a peça que faltava para transformar sua sala de estar em um oásis de conforto e elegância. Este produto excepcional, produzido pela renomada marca XFLEX SOFÁS, combina estilo contemporâneo com funcionalidade excepcional, proporcionando momentos inesquecíveis de relaxamento e entretenimento.
                    </Text>

                    <Text style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>
                    Especificações Técnicas:                    
                    </Text>
        
                    <View>
                        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>• Sofá retrátil e reclinável</Text>
                        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>• Inclui porta-copos</Text>
                        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>• Entrada USB integrada</Text>
                        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>• Material: Suede</Text>
                        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>• Cor: Capuccino</Text>
                    </View>
                </View>
            }
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 24,
        color: '#3a5a40',
        fontWeight: '350',
        marginBottom: 16,
        letterSpacing: 1,
    },
    titleProduct: {
        fontSize: 14,
        color: '#000',
        fontWeight: '350',
        marginVertical: 16,
        marginHorizontal: 12,
        letterSpacing: 0.5,
    },
    priceSection: {
        padding: 16,
        marginTop: 10,
    },
    priceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    priceContainer: {
        flex: 1,
    },
    priceTag: {
        fontSize: 24,
        color: '#333',
    },
    priceTax: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    shareButton: {
        backgroundColor: '#3a5a40',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
    },
    ratingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingNumber: {
        fontSize: 12,
        color: '#777',
        marginLeft: 4,
    },
    shippingButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    shippingButtonText: {
        fontSize: 12,
        color: '#666',
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        gap: 18,
    },
    containerQuantity: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '70%',
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#3a5a40',
    },
    text2: {
        fontSize: 14,
        color: '#555',
        fontWeight: '350',
    },
    button: {
        backgroundColor: '#3a5a40',
        width: '60%',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text3: {
        color: '#fff',
        fontSize: 14,
    },
    divisor: {
        width: '100%',
        height: 0.1,
        backgroundColor: '#3a5a40',
        marginTop: 30 ,
    }
});