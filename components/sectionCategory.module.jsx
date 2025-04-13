import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SectionCategory({title, categories}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.gridContainer}>
                <View style={styles.topRow}>
                    <CategoryItem category={categories[0]} style={styles.Item1} />
                    <CategoryItem category={categories[1]} style={styles.Item2} />
                </View>
                
                <View style={styles.middleRow}>
                    <CategoryItem category={categories[2]} style={styles.Item3} />
                    <CategoryItem category={categories[3]} style={styles.Item4} />
                </View>
                
                <View style={styles.bottomRow}>
                    <View style={styles.smallItemsColumn}>
                        <CategoryItem category={categories[4]} style={styles.Item5} />
                        <CategoryItem category={categories[6]} style={styles.Item6} />
                    </View>
                    <CategoryItem category={categories[5]} style={styles.Item7} />
                </View>
            </View>
        </View>
    );
}

function CategoryItem({ category, style }) {
    return (
        <TouchableOpacity activeOpacity={0.9} style={[styles.categoryItem, style]}>
            <ImageBackground
                source={{ uri: category.image }}
                style={styles.categoryImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#f9f7f1',
        gap: 10,
    },
    title: {
        fontSize: 24,
        color: '#3a5a40',
        fontWeight: '350',
        marginBottom: 16,
        letterSpacing: 1,
    },
    gridContainer: {
        width: '100%',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
        width: '100%',
    },
    Item1: {
        width: '32%',
        height: width * 0.4,
    },
    Item2: {
        width: '66%',
        height: width * 0.4,
    },
    middleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
        
        width: '100%',
    },
    Item3: {
        width: '66%',
        height: width * 0.4,
    },
    Item4: {
        width: '32%',
        height: width * 0.4,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 170,
    },
    smallItemsColumn: {
        width: '40%',
        justifyContent: 'space-between',
    },
    Item5: {
        width: '100%',
        height: 80,
    },
    Item6: {
        width: '100%',
        height: 80,
    },
    Item7: {
        width: '57.7%',
        height: 170,
    },

    categoryItem: {
        overflow: 'hidden',
        marginBottom: 8,
    },
    smallItem: {
        width: '49%',
        height: width * 0.25,
    },
    categoryImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
});