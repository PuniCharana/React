import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import Project from "./Project";

export default class Projects extends Component {

  render() {

    const project = {
      "name": "DLF The Magnolias",
      "style": "Downtown, Ultra Luxury, Luxury, Pet Friendly, Best Amenities, Senior Living",
      "property_type": "Apartment",
      "address": "Golf Course Road, Sector 42",
      "location": "Gurgaon",
      "roofpik_score": 4.2,
      "score": "4.5",
      "position": "1",
      "no_reviews": 5,
      "builder": "DLF",
      "thumbnail": "http://139.162.9.71/images/uniworld-gardens-1-cover-photo714-xl.jpg",
    }
    return (
      <ScrollView style={styles.container}>
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
        <Project project={project} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
  },
});