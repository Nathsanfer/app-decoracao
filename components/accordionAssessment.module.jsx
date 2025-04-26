import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AccordionAssessment({ content }) {

    const [isExpanded, setIsExpanded] = useState(false);

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
        <View style={styles.accordionContainer}>

            <TouchableOpacity style={styles.accordionHeader} onPress={() => setIsExpanded(!isExpanded)}>

                <Text style={styles.accordionTitle}>Avaliações</Text>
                <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color="#3a5a40" />

            </TouchableOpacity>

            {isExpanded && (
                <View style={styles.accordionContent}>
                    <Text style={styles.ratingTitle}>4,6</Text>
                    <Text style={styles.ratingSubtitle}>138 avaliações</Text>

                    <View style={styles.ratingRow}>
                        <Text style={styles.ratingLabel}>Confortável</Text>
                        <View style={styles.starsContainer}>
                            {renderStars(4.5)}
                            <Text style={styles.ratingNumber}> (62)</Text>
                        </View>
                    </View>

                    <View style={styles.ratingRow}>
                    <Text style={styles.ratingLabel}>Custo Benefício</Text>
                    <View style={styles.starsContainer}>
                            {renderStars(4.5)}
                            <Text style={styles.ratingNumber}> (62)</Text>
                        </View>
                    </View>

                    <View style={styles.ratingRow}>
                        <Text style={styles.ratingLabel}>Fácil de limpar</Text>
                        <View style={styles.starsContainer}>
                            {renderStars(4)}
                            <Text style={styles.ratingNumber}> (62)</Text>
                        </View>
                    </View>

                    {/* Opiniões em destaque */}
                    <Text style={styles.opinionTitle}>Opiniões em destaques</Text>
                    <Text style={styles.opinionText}>
                        "O sofá é excelente. Já havia comprado um e o 2º veio só completar melhor. Garantiu o meu espaço e meu apartamento de 2m. Recomendo o produto."
                    </Text>
                    <Text style={styles.opinionDate}>31 de outubro de 2023</Text>

                    <Text style={styles.opinionText}>
                        "É super confortável. Só um detalhe, quanto menor for o sofá, mais altas são as almofadas dos assentos."
                    </Text>
                    <Text style={styles.opinionDate}>12 de novembro de 2023</Text>

                    {/* Botão Ver Mais */}
                    <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonText}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    )

}

const styles = StyleSheet.create({
    accordionContainer: {
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 8,
        overflow: "hidden",
    },
    accordionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
    },
    accordionTitle: {
        fontSize: 15,
        color: '#000',
        fontWeight: '380',
        letterSpacing: 0.5
    },
    accordionContent: {
        padding: 12,
    },
    accordionText: {
        fontSize: 12,
        color: '#000',
        fontWeight: '380',
        letterSpacing: 0.5
    },
    accordionContent: {
        padding: 12,
    },
    ratingTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#3a5a40",
    },
    ratingSubtitle: {
        fontSize: 14,
        color: "#777",
        marginBottom: 12,
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
    ratingLabel: {
        fontSize: 14,
        color: "#555",
        marginRight: 8,
    },
    opinionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3a5a40",
        marginTop: 16,
        marginBottom: 8,
    },
    opinionText: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
        lineHeight: 20,
    },
    opinionDate: {
        fontSize: 12,
        color: "#999",
        marginBottom: 12,
    },
    moreButton: {
        alignSelf: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        marginTop: 10,
    },
    moreButtonText: {
        color: "#666",
        fontSize: 14,
    },
})