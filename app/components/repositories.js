import React, { Component } from 'react';
var Badge = require('./Badge');
var Separator = require('./helpers/separator');
var Web_View = require('./helpers/webView');
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ScrollView,
} from 'react-native';


var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    name: {
        paddingBottom: 5,
        fontSize: 18,
        color: '#48BBEC'
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    },
    rowContainer: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    }

});

class Repositories extends Component{
    openPage(url){
        this.props.navigator.push({
            component: Web_View,
            title: 'web view',
            passProps: {url}
        });
    }
    render(){
        var repos = this.props.repos;
        var list = repos.map((item, index)=>{
            var desc = repos[index].description ? <Text 
            style={styles.description}> {repos[index].description} </Text> : <View/>;
            return(
                <View key={index}>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={this.openPage.bind(this, repos[index].html_url)}
                            underlayColor='transparent'>
                            <Text style={styles.name}>{repos[index].name}</Text>
                        </TouchableHighlight>
                        <Text style={styles.stars}> Stars: {repos[index].stargazers_count}</Text>
                        {desc}
                    </View>
                    <Separator/>
                </View>
            )
        })
        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={this.props.userInfo}/>
                {list}
            </ScrollView>
        )
    }
};

Repositories.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.array.isRequired
};

module.exports = Repositories;