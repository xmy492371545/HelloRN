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
export default class CarPage extends Component<Props> {

  render() {
    return (
      <View style={styles.viewStyle}>
       <Text>Car page!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  viewStyle: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 100,
    backgroundColor:'red',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
