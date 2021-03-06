import React, {Component} from 'react';
import {StyleSheet, View, WebView} from 'react-native';

export  default class GanHuoDetail extends Component{
    static navigationOptions ={
        headerTitle:'干货详情',
        headerTintColor:'white',
        headerStyle: {
            backgroundColor: '#ff5350',
            height:50
        },
    };
    constructor(props){
        super(props)
       //this.state={url:'https://juyao.github.io'};

    }
    render() {
        //alert(this.props.navigation.state.params.url);
        return (
            <View style={styles.container}>
                <WebView
                    // ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.props.navigation.state.params.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    //scalesPageToFit={this.state.scalesPageToFit}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    webview:{
        backgroundColor:'blue',
        height: 350
    }


});