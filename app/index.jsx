import { ScrollView
    , StyleSheet } from "react-native";
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


export default function HomeScreen() {

    return (
        <ScrollView style={styles.container}>

            <HeaderComponent />

            <CarouselComponent slides={slides} />

            <SectionCards
                subtitle="veja mais"
                title="NOVIDADES"
            />

            <SectionCards
                subtitle="veja mais"
                title="DESTAQUES"
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