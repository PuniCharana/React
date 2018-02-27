import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, ImageBackground, ToolbarAndroid, ToastAndroid , ScrollView} from 'react-native';

import About from '../about/About'
import Search from '../search/Search'

export default class Home extends Component {

  render() {
  
    const atRoofpik = [
      {
        title: "Reviews",
        description: "Real residents and owners are sharing positive and negative experiences about their property on Roofpik.com. Let them tell you what it is like to live in a project."
      },
      {
        title: "Resident Stories",
        description: "Read real experiences of people about their property and their detailed insights about the project."
      },
      {
        title: "Project Information",
        description: "Valldated project information with comparisons, price trends, photos etc."
      },
      {
        title: "NearBy",
        description: "Know your nearby schools, markets, hospitals etc."
      },
      {
        title: "Listed Partners",
        description: "Connect with verified dealers such as Brokers, Movers&Packers, Rental Furnitures etc."
      },
    ];
    const item = atRoofpik.map((item, index) =>
      <About key={index} item={item}/>
    );
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={{width: '100%', height: '100%'}}>
    
    
        <Search/>

        <Text style={styles.title}>
          What we have at Roofpik
        </Text>

        <ScrollView horizontal>
          {item}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height:54,
    backgroundColor: '#26a69a',
  },
  title: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    fontSize: 22
  }
});