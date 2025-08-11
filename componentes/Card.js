import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card({
  title = "Título de producto",
  description = "Descripción breve del producto o servicio",
  price = "$0.00",
  category = "Categoría",
  rating = 0,
  imageUrl = "https://via.placeholder.com/300x200",
  features = []
}) {
  return (
    <View style={styles.cardContainer}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.cardImage}
      />
      
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardCategory}>{category}</Text>
        
        <Text style={styles.cardDescription}>
          {description}
        </Text>
        
        {features.length > 0 && (
          <View style={styles.featuresContainer}>
            {features.map((feature, index) => (
              <Text key={index} style={styles.featureItem}>
                • {feature}
              </Text>
            ))}
          </View>
        )}
        
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ {rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 22,
    marginBottom: 12,
  },
  featuresContainer: {
    marginBottom: 12,
  },
  featureItem: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  ratingContainer: {
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF8C00',
  },
});
