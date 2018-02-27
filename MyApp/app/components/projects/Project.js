import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Project extends Component {

  viewDetails = () => {
    Actions.projectDetails({
      project: this.props.project
    })
  }

  render() {
    const project = this.props.project;

      return (
        <TouchableOpacity 
        onPress={this.viewDetails}
        style={styles.project}>
          <View style={styles.projectHeader}>
            <Image
              style={styles.thumbnail}
              source={{uri: project.thumbnail}} />
            <View style={styles.projectInfo}>
              <Text style={{color: '#26a69a'}}>#{project.position} in {project.location}</Text>
              <Text style={{fontWeight: 'bold'}}>{project.name}</Text>
              <Text>{project.address}</Text>
              
              <View style={styles.scores}>
                <Text style={styles.score}>{project.score}</Text>
                <Text>{project.no_reviews} reviews </Text>
              </View>
            </View>
          </View>
          <View style={styles.projectBody}>
              <View style={styles.infoTitle}>
                <Text style={styles.title}>Builder:</Text>
                <Text style={styles.title}>Property type:</Text>
                <Text style={styles.title}>Style:</Text>
              </View>
              <View style={styles.info}>
                <Text>{project.builder}</Text>
                <Text>{project.property_type}</Text>
                <Text>{project.style}</Text>
              </View>
          </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({

  project: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 5
    
  },
  projectHeader : {
    flexDirection: 'row',
  },
  thumbnail : {
    width: 100,
    height: 80,
    resizeMode: 'cover' 
  },
  projectInfo:{
    paddingLeft: 10,
    justifyContent: 'space-around'
  },
  scores : {
    flexDirection: 'row',
  },
  score: {
    backgroundColor: '#26a69a',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
  },
  projectBody: {
    marginTop: 8,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
  infoTitle: {
    width: 100,
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#e6e6e6',
  },
  title: {
    fontWeight: 'bold'
  },
  info: {
    paddingLeft: 8,
  }
});