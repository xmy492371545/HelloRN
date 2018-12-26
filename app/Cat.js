/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS} from 'react-native';

type Props = {};
export default class CatePage extends Component<Props> {

  render() {
    return (
      <View style={styles.viewStyle}>
       <Text>Category page!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  viewStyle: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 100,
    backgroundColor:'orange',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
