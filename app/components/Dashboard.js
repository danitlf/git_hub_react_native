import React, { Component } from 'react';
var api = require('../utils/api');
var Profile = require('./Profile');

import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Image,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard extends Component {
    makeBackground(btn) {
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }
        if (btn === 0) {
            obj.backgroundColor = '#48BBEC';
        }
        else if (btn === 1) {
            obj.backgroundColor = '#E77AAE';
        }
        else {
            obj.backgroundColor = '#758BF4';
        }
        return obj;
    }
    goToNotes() {
        console.log("notes");
    }
    goToProfile() {
        this.props.navigator.push({
            title: "Profile",
            component: Profile,
            passProps: { userInfo: this.props.userInfo }
        });
    }
    goToRepos() {
        console.log("notes");
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: this.props.userInfo.avatar_url }} />
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>
                        View Profile
                     </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>
                        View Repos
                     </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>
                        View Notes
                     </Text>
                </TouchableHighlight>
            </View>
        )
    }
};

module.exports = Dashboard;
