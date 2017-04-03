import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    WebView,
    View,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6EF',
        flex: 1,
        flexDirection: 'column'
    }
});

class Web_View extends Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView source={{uri:this.props.url}}/>
            </View>    
        )
    }
};

Web_View.PropTypes = {
    url: React.PropTypes.string.isRequired
}
module.exports = Web_View;