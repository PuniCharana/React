import React, { Component } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    Button,
    ToastAndroid,
    Keyboard
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            projectName: '',
            localityName: ''
        };
    }

    onPressSearch = () => {
   
        this.setState({
            projectName: '',
            localityName: ''
        })
        
        Keyboard.dismiss();
        Actions.projects()
    }

    onPressWriteReview = () => {
        
        this.setState({
            projectName: '',
            localityName: ''
        })
        Actions.review()
        Keyboard.dismiss();
        
    }

    render() {
        return (
        <KeyboardAvoidingView  style={styles.container}>
            <Text style={{textAlign:'center'}}>
                Power Your Property Search with Genuine User Reviews
            </Text>
            <TextInput
                placeholder="Project Name"
                style={{height: 40, }}
                onChangeText={(text) => this.setState({projectName: text})}
                value={this.state.projectName}
            />
            <TextInput
                placeholder="Locality"
                style={{height: 40}}
                onChangeText={(text) => this.setState({localityName: text})}
                value={this.state.localityName}
            />
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                <Button
                    onPress={this.onPressSearch}
                    title="Search"
                    color="#26a69a"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button style={{flex: 1}}
                    onPress={this.onPressWriteReview}
                    title="Write Review"
                    color="#ff5a5f"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: 20,
        padding: 20
    },
});
