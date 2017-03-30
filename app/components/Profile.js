import React, { Component } from 'react';
var Badge = require('./Badge');
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
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'white'
    },
    rowTitle: {
        color: '#48BBEC',
        padding: 16
    },
    rowContent: {
        fontSize: 19,
    },
    rowContainer: {
        padding: 10
    }

});


class Profile extends Component {
    getRowTitle(user, item) {
        item = (item === 'public_repos') ? item.replace('_', ' ') : item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }

    render() {
        var userInfo = this.props.userInfo;
        var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
        var list = topicArr.map((item, index) => {
            if (!userInfo[item]) {
                return <View key={index} />
            }
            else {
                return (
                    <View key={index}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}>
                                {this.getRowTitle(userInfo, item)}
                            </Text>
                            <Text style={styles.rowContent}>
                                {userInfo[item]}
                            </Text>
                        </View>
                    </View>
                )
            }
        });
        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={this.props.userInfo} />
                {list}
            </ScrollView>
        )
    }
};

module.exports = Profile;