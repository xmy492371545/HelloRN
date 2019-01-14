/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePageApp from './Home';
import NextPage from './Next';
import LastPage from './Last';

// import HomeScreen from './HomeScreen'
// import ProfileScreen from './ProfileScreen'

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

type Props = {};

const navigator = createStackNavigator({
       Home: { screen: HomePage },
       // Cate: { screen: CatePage },
       // Car: { screen: CarPage },
       // My: { screen: MyPage},
       Next: { screen: NextPage},
       Last: { screen: LastPage},
    }
  )
const HomeApp = createAppContainer(navigator)

export default class HomeMainApp extends Component<Props> {
  render() {
    return (
       <HomeApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF'
   }
});
