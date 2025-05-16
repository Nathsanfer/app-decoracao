import { StyleSheet, ScrollView } from "react-native";

// Importe dos componentes 
import HeaderComponent from "../components/header.module.jsx";
import SectionCategory from "../components/sectionCategory.module.jsx";

// Variáveis com as informações de cada categoria
const salaEstar = [
        { 
            id: 1, 
            title: 'ESTANTES', 
            image: 'https://a-static.mlcdn.com.br/800x560/kit-3-estantes-para-livros-industrial-7-prateleiras-200cmx216cm-office-kappesberg/madeiramadeira-openapi/866134/f1542f5d326e80cb5c1d052f9f105cea.jpeg', 
            size: 'medium' 
        },
        { 
            id: 2, 
            title: 'SOFÁS', 
            image: 'https://elxa3nsprod0015.blob.core.windows.net/servicehub-cms-files-prod/Homepedia_b_sofa-sala-pequena-formato-l.jpg?sv=2020-08-04&se=2035-02-12T14%3A10%3A17Z&sr=c&sp=r&sig=BGCSg1BwLxWP3Og%2BNpqmMZogURioz%2Frh3Lj1OPnWFRg%3D', 
            size: 'medium' 
        },
        { 
            id: 3, 
            title: 'RACKS', 
            image: 'https://s2.glbimg.com/2v3hAunAV52SOvMeAPl-x5Lrzp4=/620x455/e.glbimg.com/og/ed/f/original/2021/09/25/forma001-apartamento-134-madeira-tijolinho4.jpg', 
            size: 'wide' 
        },
        { 
            id: 4, 
            title: 'PAINEL PARA TV', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamcSWY3E1D6buHTMk9YKti5WSPNQGmnzpcHcnQrhvZAnZqltC7I_qOAg1SL1oJc4jtcc&usqp=CAU', 
            size: 'medium' 
        },
        { 
            id: 5, 
            title: 'MESAS DE CENTRO', 
            image: 'https://images.tcdn.com.br/img/img_prod/634712/mesa_de_centro_riad_decorativa_sala_de_estar_cinamomo_off_white_g26_gran_belo_82569_1_02133b3d9c4a22e45f2f91aac1f2c653.jpg', 
            size: 'small' 
        },
        { 
            id: 6, 
            title: 'POLTRONA', 
            image: 'https://images.tcdn.com.br/img/img_prod/847957/poltrona_decorativa_sala_de_estar_recepcao_luiza_base_giratoria_de_madeira_suede_adj_decor_56977_1_b0d11e65ff35df29642d12cf434b46b9.jpg', 
            size: 'small' 
        },
        { 
            id: 7, 
            title: 'MESAS LATERAIS', 
            image: 'https://s2.glbimg.com/UyjKI-CavDgltQ3mQsAgpejH3fc=/smart/e.glbimg.com/og/ed/f/original/2021/10/05/89c6e7670a034480aaffd2a1283029b8.jpeg', 
            size: 'small' 
        },
];
const salaJantar = [
    { 
        id: 1, 
        title: 'CRISTALEIRAS', 
        image: 'https://images.tcdn.com.br/img/img_prod/464234/cristaleira_para_sala_de_jantar_bar_adega_led_02_portas_siria_b01_cinamomo_off_white_lyam_53687_2_8ab812c87fec1893e7f9e2fd196f60cf.jpg', 
        size: 'medium' 
    },
    { 
        id: 2, 
        title: 'MESA DE JANTAR', 
        image: 'https://jlar.com.br/wp-content/uploads/2025/02/MESA-JANTAR-PARIS-NATURE-OFF-227-DIA-TAKE-01-1.jpg', 
        size: 'medium' 
    },
    { 
        id: 3, 
        title: 'LUSTRES', 
        image: 'https://cdn.awsli.com.br/2500x2500/1615/1615520/produto/277739312/d5-q46pptvmr1.jpg', 
        size: 'wide' 
    },
    { 
        id: 4, 
        title: 'CADEIRAS', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZksYBHV-L21HHssTzT5UkhqA3wGC8Cp0kmg&s', 
        size: 'medium' 
    },
    { 
        id: 5, 
        title: 'BUFFET E APARADOR', 
        image: 'https://lojadocelar.fbitsstatic.net/img/p/aparador-buffet-danubio-4-portas-2-gavetas-pe-madeira-macica-74801/268352-1.jpg?w=1000&h=1000&v=no-value', 
        size: 'small' 
    },
    { 
        id: 6, 
        title: 'MESA POSTA', 
        image: 'https://pratikasa.com.br/cdn/shop/articles/Post_8_-_Capa.webp?v=1732074769', 
        size: 'small' 
    },
    { 
        id: 7, 
        title: 'DECORAÇÃO', 
        image: 'https://fynedecor.com.br/decor/wp-content/uploads/2022/08/Como-escolher-objetos-de-decoracao-para-a-sala-1.png.webp', 
        size: 'small' 
    },
];

export default function CategoriasScreen({}) {
    return (
        <ScrollView style={styles.container}>      

            <HeaderComponent/>                                                                            
            
            <SectionCategory categories={salaEstar} title={"SALA DE ESTAR"}/>

            <SectionCategory categories={salaJantar} title={"SALA DE JANTAR"}/>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    }
});