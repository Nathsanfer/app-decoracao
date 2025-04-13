import { ScrollView, StyleSheet } from "react-native";
import HeaderComponent from "../components/header.module";
import CarouselComponent from "../components/carousel.module";
import SectionCards from "../components/sectionCards.module";

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

// Dados dos produtos
const produtos = [
    {
        id: 1,
        imageUri: 'https://panoverse-cdn.com.br/img.panorama/produto/81706/cristaleira-roma-2-portas-1-gaveta-imbuia-rodmoveis-550112-large.jpg',
        descricao: 'Cristaleira com 2 portas e 1 gaveta',
        preco: 'R$ 546,89/un.',
        desconto: '30% de desconto'
    },
    {
        id: 2,
        imageUri: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/maneiras-praticas-para-organizar-e-decorar-a-escrivaninha-mini-gaveteiro-20220127202610.jpg',
        descricao: 'Escrivaninha com estante office com 3 gavetas',
        preco: 'R$ 319,99/un.',
        desconto: '25% de desconto'
    },
    {
        id: 3,
        imageUri: 'https://madeiramadeira.com.br/images/product/2022/01/armario-multiuso-2-portas-demobile-branco-17656930-60053-1_zoom-m.jpg',
        descricao: 'Armário multiuso 2 portas',
        preco: 'R$ 289,90/un.',
        desconto: '20% de desconto'
    }
];

export default function HomeScreen() {

    return (
        <ScrollView style={styles.container}>

            <HeaderComponent />

            <CarouselComponent slides={slides} />

            <SectionCards
                subtitle="veja mais"
                title="OPORTUNIDADES"
                produtos={produtos}
            />
            
            <SectionCards
                subtitle="veja mais" 
                title="DESTAQUES"
                produtos={produtos}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
});