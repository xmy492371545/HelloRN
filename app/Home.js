/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, TouchableOpacity, NavigatorIOS} from 'react-native';
import NextPage from './Next';
type Props = {};
var d;
var _navigator;
export default class HomePage extends Component<Props> {
  _handleNavigationRequest() {
   this.refs.nav.push({
     component: HomePageApp,
     title: 'Genius',
     passProps: { myProp: 'genius' },
   });
 }
 render() {
  return (
   <NavigatorIOS
    ref='nav'
    initialRoute={{
     component: HomePageApp,
     title: 'Home-n',
     passProps:{
       myProp:'I am home page!!'
     },
     shadowHidden:true,
     leftButtonTitle:'left',
     onLeftButtonPress:()=>{alert('left btn!!!')},
     rightButtonTitle:'right',
     onRightButtonPress: () => this._handleNavigationRequest(),
    }}
    style={{flex: 1}}
   />
  );
 }
}
class HomePageApp extends Component{
  constructor(props){
    super(props);
    // this.state={
    //   message:'I am home page!!'
    // }
  }
 _gotToNext(){
   this.props.navigator.push({
    title:'NextPage',
    component: NextPage,
    callBack:(msg)=>{
      console.log(d);
      this.refeshView(msg);
      console.log('end');
    }
   });
 }

 refeshView(msg){
  console.log('home刷新');
  // this.setState({message:msg});
  console.log('home刷新 end');
  }

  render() {
    return (
      <View style={styles.viewStyle}>
       <Text>home page!!!!</Text>
       <Text>{this.props.myProp}</Text>
       <TouchableOpacity onPress={this._gotToNext.bind(this)}>
       <Text style={{backgroundColor:'blue'}}>进入下一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  viewStyle: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 100,
    backgroundColor:'green',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
