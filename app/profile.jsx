import { View, StyleSheet, ScrollView } from "react-native";
import HeaderComponent from "../components/header.module.jsx";
import SectionCards from "../components/sectionCards.module.jsx";
import CarouselComponent from "../components/carousel.module.jsx";

// Array para armazenar os slides do carrossel
const slides = [
    {
        image: { uri: 'https://decoracaobrasil.com/wp-content/uploads/2021/11/te%CC%81cnicas-para-decorar-a-casa.png' }
    },
    {
        image: { uri: 'https://www.datocms-assets.com/29255/1708110325-decoracao-de-sala-simples.jpg' }
    }
];



export default function SobreScreen({}) {
    return (
        <ScrollView style={styles.container}>
            <HeaderComponent />
            
            <CarouselComponent slides={slides} />
            
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    }
});