import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 22, textAlign: 'center'}}>
            {this.props.item.title}
        </Text>
        <Text>
            {this.props.item.description}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      width: 250, 
      backgroundColor: '#fff',
      margin: 8,
      padding: 20
  },
  
});
