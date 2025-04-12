import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRef, useState, useEffect } from 'react';

// Variável é usada para obter a largura da tela do dispositivo, para que possamos definir a largura dos slides do carrossel.
const { width } = Dimensions.get('window');

// Array para armazenar os slides do carrossel.
const slides = [
    {
        image: { uri: 'https://decoracaobrasil.com/wp-content/uploads/2021/11/te%CC%81cnicas-para-decorar-a-casa.png' }
    },
    {
        image: { uri: 'https://www.datocms-assets.com/29255/1708110325-decoracao-de-sala-simples.jpg' }
    },
    {
        image: { uri: 'https://img.freepik.com/fotos-premium/sala-de-estar-escandinava-moderna-com-moveis-de-design-sofa-cinza-plantas-estante-de-livros-de-bambu-e-mesa-de-madeira-parquet-de-madeira-castanho-apartamento-bonito_146105-107356.jpg?semt=ais_country_boost&w=740' }
    },
];

export default function SobreScreen() {

    // Variável para obter a navegação do aplicativo.
    const navigation = useNavigation();

    // Variável usada para rolar o carrossel.
    const scrollRef = useRef(null);
    //Variável que rastreia (o índice) qual slide está sendo exibido atualmente.
    const [currentIndex, setCurrentIndex] = useState(0);
    // Variável para controlar se o carrossel deve ser reproduzido automaticamente ou não.
    const [autoplay, setAutoplay] = useState(true);
    // Variável para o intervalo de tempo entre as transições automáticas do carrossel.
    const autoplayInterval = 3000; // 3 segundos

    // É uma função de callback que detecta e processa os eventos de rolagem do carrossel. Esta função é crucial para o funcionamento do carrossel, pois permite que o componente saiba qual slide está sendo exibido durante a navegação manual.
    const onScroll = (event) => {
        // Calcula qual "página" (slide) está visível na tela
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        // Atualiza o índice atual com base na rolagem
        setCurrentIndex(index);
    };

    // Variável que permite mudar o slide para qualquer slide específico com um comando.
    const goToSlide = (index) => {
        // 1° Recebe o índice do slide que quer mostrar; 
        // 2° Verifica se o índice é válido e se o carrossel está pronto para ser rolado;
        // 3° Calcula a posição do slide e realiza uma animação para fazer a transição do slide;
        if (scrollRef.current && index >= 0 && index < slides.length) {
            scrollRef.current.scrollTo({ x: width * index, animated: true });
            // Atualiza o índice atual para o novo índice
            setCurrentIndex(index);
        }
    };

    /*
    O código cria um autoplay no carrossel:
        - A cada 3 segundos, avança para o próximo slide.
        - Se estiver no último, volta pro primeiro.
        - Usa a função goToSlide para trocar o slide.
        - Reinicia o timer sempre que currentIndex ou autoplay mudar.
        - Limpa o timer quando o componente desmonta para evitar bugs.
    */
    useEffect(() => {
        let timer;
        if (autoplay) {
            timer = setInterval(() => {
                const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
                goToSlide(nextIndex);
            }, autoplayInterval);
        }
        return () => clearInterval(timer);
    }, [currentIndex, autoplay]);

    return (
        <View style={styles.container}>
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

            <View style={styles.carouselContainer}>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ width: width * slides.length }}
                    decelerationRate="fast"
                    onTouchStart={() => setAutoplay(false)}
                    onMomentumScrollEnd={() => setAutoplay(true)}
                >
                    {slides.map((slide, index) => (
                        <View
                            key={index}
                            style={styles.slide}
                        >
                            <Image
                                source={slide.image}
                                style={styles.slideImage}
                                resizeMode="cover"
                            />
                        </View>
                    ))}
                </ScrollView>

                <TouchableOpacity
                    style={[styles.navButtonOverlay, styles.navButtonLeft]}
                    disabled={currentIndex === 0}
                    onPress={() => {
                        setAutoplay(false);
                        goToSlide(currentIndex - 1);
                        setTimeout(() => {
                            setAutoplay(true);
                        }, 3000);
                    }}
                >
                    <Ionicons name="chevron-back" size={24} color={currentIndex === 0 ? "#ccc" : "#fff"} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navButtonOverlay, styles.navButtonRight]}
                    disabled={currentIndex === slides.length - 1}
                    onPress={() => {
                        setAutoplay(false);
                        goToSlide(currentIndex + 1);
                        setTimeout(() => {
                            setAutoplay(true);
                        }, 3000);
                    }}
                >
                    <Ionicons name="chevron-forward" size={24} color={currentIndex === slides.length - 1 ? "#ccc" : "#fff"} />
                </TouchableOpacity>

                <View style={styles.indicatorContainer}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentIndex === index && styles.activeIndicator,
                            ]}
                        />
                    ))}
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>Seja bem-vindo!</Text>
                <Text style={styles.subtitle}>Aqui temos a tela Sobre</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
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
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
    },
    carouselContainer: {
        position: 'relative',
    },
    slide: {
        width,
        height: 200,
        overflow: 'hidden',
    },
    slideImage: {
        width: '100%',
        height: '100%',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        margin: 5,
    },
    activeIndicator: {
        backgroundColor: '#333',
    },
    navButtonOverlay: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 25,
        padding: 8,
        zIndex: 10,
    },
    navButtonLeft: {
        left: 10,
    },
    navButtonRight: {
        right: 10,
    }
});