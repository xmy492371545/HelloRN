/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, NavigatorIOS} from 'react-native';
// import {createStackNavigator, createAppContainer} from 'react-navigation';
import MyTabBar  from './app/MyTabBar';

// import HomePage from './app/Home';
// import CatePage from './app/Cat';
// import CarPage from './app/Car';
// import MyPage from './app/My';
// import NextPage from './app/Next';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

type Props = {};

// const navigator = createStackNavigator({
//        // MyTabBar: { screen: MyTabBar},
//        Home: { screen: HomePage },
//        Cate: { screen: CatePage },
//        Car: { screen: CarPage },
//        My: { screen: MyPage},
//       //  Next: { screen: NextPage}
//     },
//     {
//       initialRouteName: 'MyTabBar', // 默认显示界面
//       headerMode:'none'
//       }
//   )
// const MyApp = createAppContainer(navigator)

export default class App extends Component<Props> {
  render() {
    return (
       <MyTabBar />
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF'
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
