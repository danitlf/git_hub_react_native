import React, { Component } from 'react';
var api = require('../utils/api');
var Dashboard = require('../components/Dashboard');
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';


var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        backgroundColor: '#48BBEC',
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'

    },
});

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }
    handleChange(event) {
        this.setState({
            username: event.nativeEvent.text
        });
    }

    handleSubmit(event) {
        //update our indicatorIOS spinner
        this.setState({
            isLoading: true
        });
        api.getBio(this.state.username)
            .then((res) => {
                if (res.message === 'Not Found') {
                    this.setState({
                        isLoading: false,
                        error: 'User Not Found',
                    });
                }
                else {
                    this.props.navigator.push({
                        title: res.name || "select an option",
                        component: Dashboard,
                        passProps: { userInfo: res }
                    });
                    this.setState({
                        isLoading: false,
                        error: false,
                        username: ''
                    });
                }
            });
        //fetch data from github
        //rerout to next passing that github information
    }

    render() {
        var showErr = (
            this.state.error ? <Text>
                {this.state.error} </Text> : <View></View>
        );
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    Search for a Github User
                </Text>
                <TextInput style={styles.searchInput}
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)} />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.handleSubmit.bind(this)}
                    underlayColor="white">
                    <Text style={styles.buttonText}>
                        SEARCH
                    </Text>
                </TouchableHighlight>
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color='#111'
                    size='large'>
                </ActivityIndicator>
                {showErr}
            </View>
        )
    }

};

module.exports = Main;