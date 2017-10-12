import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import App from "./App";
import ImageList from "./ImageList";

export default class ScroillTab extends Component{
    static navigationOptions ={
        headerTitle:'干货集中营',
        headerTintColor:'white',
        headerStyle: {
            backgroundColor: '#ff5350',
            height:50
        },
    };
    render() {
        return (
            <ScrollableTabView
                tabBarPosition='overlayTop'
                renderTabBar={()=><ScrollableTabBar/>}
                onChangeTab={(obj)=>{

                }}
                onScroll={(position)=>{


                }}
                locked={false}
            initialPage={0}
            tabBarUnderlineStyle={{backgroundColor:'white'}}
            tabBarBackgroundColor='#EF5350'
                tabBarActiveTextColor='#FFFFFF'
                tabBarInactiveTextColor='lightgrey'
                tabBarTextStyle={{fontSize: 18}}>
                <View tabLabel='Android'>
                    <App navigation={this.props.navigation} type='Android'/>
                </View>
                <View tabLabel='iOS'>
                    <App navigation={this.props.navigation} type='iOS'/>
                </View>
                <View tabLabel='前端'>
                    <App navigation={this.props.navigation} type='前端'/>
                </View>
                <View tabLabel='拓展资源'>
                    <App navigation={this.props.navigation} type='拓展资源'/>
                </View>
                <View tabLabel='瞎推荐'>
                    <App navigation={this.props.navigation} type='瞎推荐'/>
                </View>
                <View tabLabel='App'>
                    <App navigation={this.props.navigation} type='App'/>
                </View>
                <View tabLabel='休息视频'>
                    <App navigation={this.props.navigation} type='休息视频'/>
                </View>
                <View tabLabel='福利'>
                    <ImageList navigation={this.props.navigation} type='福利'/>
                </View>
            </ScrollableTabView>
        );
    }

}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF5350',
    }



});