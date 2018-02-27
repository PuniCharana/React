import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  ScrollView,
  Button,
  DatePickerAndroid,
  ToastAndroid
} from 'react-native';

const initialState = {
    houseno: '',
    locality: '',
    type:'live',
    livedwith: 'friend',
    dob: new Date().toString(),
    review: '',
    reviewTitle: '', 
}

export default class Review extends Component {

    constructor () {
        super();

        this.state = initialState

        this.pickDob = this.pickDob.bind(this)
    }

    async pickDob() {
        try {
            const {action, year, month, day} = await  DatePickerAndroid.open({
              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              // Selected year, month (0-11), day
                this.setState( {
                    dob: new Date(year, month, day).toString()
                })
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    submitReview = () => {
        console.log(this.state)

        this.setState(initialState)

        ToastAndroid.showWithGravity(
            'Thank you for your review',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Tell us about yourself?</Text>

                <TextInput
                    onChangeText={(text) => this.setState({locality: text})}
                    value={this.state.locality}
                    placeholder="Locality"/>

                <TextInput
                    onChangeText={(text) => this.setState({houseno: text})}
                    value={this.state.houseno}
                    placeholder="House/Flat No."/>

                <Picker
                    selectedValue={this.state.type}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                    <Picker.Item label="I live on rent" value="live" />
                    <Picker.Item label="I own the place" value="own" />
                    <Picker.Item label="I visited for rent" value="visited" />
                </Picker> 

                <Picker
                    selectedValue={this.state.livedwith}
                    onValueChange={(itemValue, itemIndex) => this.setState({livedwith: itemValue})}>
                    <Picker.Item label="I live wtih family" value="family" />
                    <Picker.Item label="I live wtih friend" value="friend" />
                    <Picker.Item label="I live alone" value="alone" />
                    <Picker.Item label="Other" value="other" />
                </Picker> 

                <View style={styles.dob}>

                    <Text 
                        onPress={this.pickDob} 
                        style={{flex: 1}}
                    >{this.state.dob}</Text>
            
                    <Button
                        style={styles.butt}
                        onPress={this.pickDob}
                        title="DOB"
                        color="#26a69a"
                        accessibilityLabel="Pick Date of birth"
                    />
                </View>
            
                <TextInput
                    onChangeText={(text) => this.setState({reviewTitle: text})}
                    value={this.state.reviewTitle}
                    placeholder="Review title"/>

                <TextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({review: text})}
                    value={this.state.review}
                    placeholder="Write your review"/>


                <Button 
                    onPress={this.submitReview}
                    title="Submit review"
                    color="#26a69a"/>

        
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },
    dob: {
        marginTop: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    }
});
