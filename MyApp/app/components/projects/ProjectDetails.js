import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import UserReview from "./UserReview";

export default class ProjectDetails extends Component {

  render() {
    const project = this.props.project;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: project.thumbnail }} />
          <View style={styles.metaContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{project.name}</Text>
              <Text style={styles.subTitle}>{project.location}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.5</Text>
              <Text style={styles.roofpikRating}>4.5 Roofpik Score</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={[styles.style, styles.infoCard]}>
            <Text style={styles.text}>Style</Text>
            <Text style={styles.text}>High End</Text>
          </View>
          <View style={[styles.rent, styles.infoCard]}>
            <Text style={styles.text}>Rent</Text>
            <Text style={styles.text}>120,000 - 500,000</Text>
          </View>
          <View style={[styles.reviews, styles.infoCard]}>
            <Text style={styles.text}>2 Reviews</Text>
          </View>
        </View>
        <Text style={styles.reviewsTitle}>User Reviews</Text>
        <UserReview />
        <UserReview />
        <UserReview />
        <Text style={styles.reviewsTitle}>Overview</Text>
        <Text style={{ padding: 10 }}>{project.name}</Text>
        <View style={styles.info}>
          <View style={[styles.style, styles.infoCard]}>
            <Text style={styles.text}>24x7</Text>
            <Text style={styles.text}>Security</Text>
          </View>
          <View style={[styles.rent, styles.infoCard]}>
            <Text style={styles.text}>₹ 300,000</Text>
            <Text style={styles.text}>Rent (3 BHK Approx)</Text>
          </View>
          <View style={[styles.reviews, styles.infoCard]}>
            <Text style={styles.text}>Full</Text>
            <Text style={styles.text}>Power Backup</Text>
          </View>
        </View>
        <Text style={{ padding: 16 }}>DLF Group re-defines lavish living with their premium multi-storey project DLF The Magnolias that are ready to move in flats, developed in 5 blocks. The project is entirely designed by the expert architects and offers spacious and luxurious 4BHK and 5BHK homes with study room and servant quarters to give you a posh status quo. It is located in Sector- 42, Gurgaon to give you a lifestyle that is envious and price list which is affordable on your pockets. The Magnolias, get used to the posh life</Text>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  metaContainer: {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  subTitle: {
    color: '#fff',
  },
  ratingContainer: {
    padding: 10,
    alignSelf: 'center',
  },
  rating: {
    color: '#fff',
    width: 30,
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 2,
    backgroundColor: '#26a69a',
    alignSelf: 'center',
  },
  roofpikRating: {
    color: '#fff',
    fontSize: 12,
  },
  info: {
    width: '100%',
    height: 80,
    flex: 1,
    flexDirection: 'row',
  },
  infoCard: {
    height: 80,
    justifyContent: 'center',
  },
  style: {
    flex: 1,
    borderStyle: 'solid',
    borderRightColor: '#e6e6e6',
    borderRightWidth: 1,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  rent: {
    flex: 1.5,
    borderStyle: 'solid',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  reviews: {
    flex: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderLeftColor: '#e6e6e6',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  text: {
    alignSelf: 'center',
  },
  reviewsTitle: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
});