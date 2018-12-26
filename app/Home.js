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
// export default class HomePage extends Component {
//  render() {
//   return (
//    <NavigatorIOS
//     initialRoute={{
//      component: HomePageApp,
//      title: 'Home',
//     }}
//     style={{flex: 1}}
//    />
//   );
//  }
// }
export default class HomePageApp extends Component{
 _gotToNext(){
   this.props.navigator.push({
     name:'NextPage',
     component: NextPage
   });
 }


  render() {
    return (
      <View style={styles.viewStyle}>
       <Text>home page!!!!</Text>
       <TouchableOpacity style={{backgroundColor:'red'}} onPress={this._gotToNext.bind(this)}>
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
