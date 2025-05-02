import { ScrollView, StyleSheet } from "react-native";

// Importe dos componentes 
import HeaderComponent from "../components/header.module";
import CarouselComponent from "../components/carousel.module";
import SectionCards from "../components/sectionCards.module";

// Variável para armazenar os dados do carrossel
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
// Variável com dados dos produtos
const oportunidades = [
    {
        id: 1,
        imageUri: 'https://static.mobly.com.br/p/XFlex-SofC3A1s-SofC3A1-Connect-Premium-22C00m-Assento-RetrC3A1til2FReclinC3A1vel-com-porta-copos-e-entrada-USB-Suede-Capuccino-5245-7690021-1.jpg',
        descricao: 'Sófa retrátil e reclinável com molas',
        preco: 'R$ 1.999,00/un.',
        desconto: '30% de desconto',
        linkPage: 'pageProduct'
    },
    {
        id: 2,
        imageUri: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/maneiras-praticas-para-organizar-e-decorar-a-escrivaninha-mini-gaveteiro-20220127202610.jpg',
        descricao: 'Escrivaninha com estante office com 3 gavetas',
        preco: 'R$ 319,99/un.',
        desconto: '25% de desconto'
    }
];
const destaques = [
    {
        id: 1,
        imageUri: 'https://panoverse-cdn.com.br/img.panorama/produto/81706/cristaleira-roma-2-portas-1-gaveta-imbuia-rodmoveis-550112-large.jpg',
        descricao: 'Cristaleira com 2 portas e 1 gaveta',
        preco: 'R$ 546,89/un.',
        desconto: '40% de desconto'
    },
    {
        id: 2,
        imageUri: 'https://cdn.leroymerlin.com.br/products/armario_para_cozinha_pequena_6_portas_1_gaveta_120_cm_freijo_1571902064_a967_600x600.jpg',
        descricao: 'Armário médio com gavetas',
        preco: 'R$ 859,00/un.',
        desconto: '15% de desconto'
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
                produtos={oportunidades}
            />
            
            <SectionCards
                subtitle="veja mais" 
                title="DESTAQUES"
                produtos={destaques}
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