/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, TouchableOpacity} from 'react-native';

type Props = {};
export default class NextPage extends Component<Props> {

  render() {
    return (
      <View style={styles.viewStyle}>
       <Text>Home =========> Next page!!!!</Text>
       <TouchableOpacity onPress={()=>{
         this.props.router.callBack('I am back from next!!!!!');
         this.props.navigator.pop();
         
         }}>
       <Text style={{backgroundColor:'red'}}>back</Text>
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
    backgroundColor:'purple',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
