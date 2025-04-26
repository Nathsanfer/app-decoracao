import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Accordion({ title, content}) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={styles.accordionContainer}> 

            <TouchableOpacity style={styles.accordionHeader} onPress={() => setIsExpanded(!isExpanded)}>

                <Text style={styles.accordionTitle}>{title}</Text>
                <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color="#3a5a40" />

            </TouchableOpacity>

            {isExpanded && (
                <View style={styles.accordionContent}>
                    {typeof content === "string" ? (
                        <Text style={styles.accordionText}>{content}</Text>
                    ) : (
                        content
                    )}
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
})