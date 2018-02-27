import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { 
    Text,
    View,
} from 'react-native'

import { Router, Stack, Scene } from 'react-native-router-flux'
import Projects from './app/components/projects/Projects';
import Home from './app/components/home/Home'
import Review from './app/components/review/Review'
import ProjectDetails from "./app/components/projects/ProjectDetails";

export default class Roofpik extends Component {

  render() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" component={Home} title="Roofpik"/>
                <Scene key="projects" component={Projects} title="Projects"/>
                <Scene key="review" component={Review} title="Review"/>
                <Scene key="projectDetails" component={ProjectDetails} title="ProjectDetails"/>
            </Stack>
        </Router>
    );
  }
}


AppRegistry.registerComponent('MyApp', () => Roofpik);
