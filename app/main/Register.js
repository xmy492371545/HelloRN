/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class ResisterPage extends Component<Props> {
  static navigationOptions = {
      title: 'Last-navigation'
    }

      render() {
          return (
              <View style={styles.container}>
                  <Text>Resister Page!!!!!!</Text>
              </View>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
      },
  });
