import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

export default class UserReview extends Component {

    render() {
        
        const review = {
            userName: 'User Name',
            userThumbnail: 'http://placehold.it/300x300',
            userRating: 5,
            reviewTime: '11 Nov 16',
            reviewTitle: 'Best area & location.',
            review: 'Good park, enough place for childer to play. parking is excellent, personal & visitor parking also. security is good. but visitor can visit without any security check.',
        }
        return (
            <View style={styles.userReviews}>
                <Image style={styles.userThumbnail}
                    source={{ uri: review.userThumbnail }} />
                <View style={styles.userReview}>
                    <Text>{review.userName} | {review.reviewTime}</Text>
                    <Text style={styles.reviewTitle}>{review.reviewTitle}</Text>
                    <Text>{review.review}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    userReviews: {
        width: '100%',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    userThumbnail: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userReview: {
        padding: 10,
    },
    reviewTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});