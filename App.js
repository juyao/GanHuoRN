/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
 class GanHuoItem extends Component{
    constructor(props){
        super(props)

    }
    render(){
        const { navigate } = this.props.nav;
        return(
            <View>
                <TouchableHighlight   style={styles.item_container} activeOpacity={0.5} underlayColor={'red'} onPress={()=>{
                        // navigate('Profile', { url: this.props.ganhuoItem.url});
                        navigate('Detail',{url: this.props.ganhuoItem.url});
                }}>
                    <View>
                        <Text style={styles.text_title}>{this.props.ganhuoItem.desc}</Text>
                        <View style={styles.author}>
                            <Text style={styles.text_author}>{this.props.ganhuoItem.who==null?'佚名':this.props.ganhuoItem.who}</Text>
                        </View>
                        {/*<View style={styles.line}>*/}

                        {/*</View>*/}
                    </View>
                </TouchableHighlight>

            </View>

        )
    }

}

export default class App extends Component{
     currentPage=1;
    static navigationOptions ={
        title:'干货列表',
    };
    constructor(props){
        super(props)
        this.state={ganhuoData:[]};
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.ganhuoData}
                    renderItem={({item})=><GanHuoItem ganhuoItem={item} nav={this.props.navigation}/>}
                    onRefresh={
                        this.refreshing
                    }
                    refreshing={false}
                    onEndReached={
                        this._onload
                    }
                    ItemSeparatorComponent={this._separator}
                />
            </View>
        );
    }
    //刷新
    refreshing(){
        this.currentPage=1;
        this.setState(previousState=>{
            return {
                ganhuoData:[]
        }
        });
        this.getGanHuoData();
    }
    //加载更多
    _onload(){
        this.getGanHuoData();
    }
    //分割线组件
    _separator = () => {
        return <View style={{height:2,backgroundColor:'lightgrey'}}/>;
    }
    componentDidMount(){
        this.getGanHuoData();

    }
    getGanHuoData() {
        let that=this;
        return fetch('http://gank.io/api/data/Android/10/'+this.currentPage++)
            .then((response) =>response.json())
            .then((responseJson) => {
                console.log('请求成功');
                temp=that.state.ganhuoData.concat(responseJson.results);
                that.setState(previousState=>{
                    return {
                        ganhuoData:temp
                    }
                });
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });

    }
}

const styles = StyleSheet.create({
    item_container:{
        backgroundColor:'white',
        padding:20
    },
    text_title:{
        color:'black',
        fontSize:20
    },
    text_author:{
        color:'grey',
        fontSize:16,
        marginTop:10
    },
    author:{
        flex:1,
        alignItems:'flex-end'
    },
    line:{
        backgroundColor:'lightgrey',
        height:1,
        marginTop:10

    }


});
