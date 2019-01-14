/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NavigatorIOS, Dimensions, SectionList} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

type Props = {};
const {width, height} = Dimensions.get('window');

export default class OrderPageApp extends Component<Props> {


  render() {

    return (
      <Text>全部订单</Text>
    );
  }
}

const styles = StyleSheet.create({

  viewStyle: {
    flex:1,
    marginTop: 100,
    backgroundColor:'white',
    // width:width,
    // height:40,
  },
  textStyle:{
    textAlign: 'center',
  }
});
