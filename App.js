/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, NavigatorIOS} from 'react-native';
import MyTabBar  from './app/MyTabBar';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
       <MyTabBar>

       </MyTabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
  },
  tabBar: {
    flex:1,
    backgroundColor: '#FF0000',
  },
  tabBarItem: {
    height:27,
    width:27,
    backgroundColor: '#00FFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
