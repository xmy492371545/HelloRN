/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, NavigatorIOS, SectionList} from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

type Props = {};
const dataSource = [
    {data:[{name:'nader'},{name:'chris'}],key:'A'},
    {data:[{name:'nick'},{name:'amanda'}],key:'B'}
];
export default class CarPage extends Component<Props> {
  render(){
    return <NavigatorIOS
         initialRoute={{
           component:CarPageApp,
           title:'购物车🛒',
         }}
         style={{flex: 1}}
    />;
  }

}
class CarPageApp extends Component<Props> {
  // static navigationOptions = {
  //     title: '购物车-navigation'
  //   }
  renderItem = (item) => {
          return <Text style={styles.text}>{item.item.name}</Text>
      }

  renderHeader = (headerItem) => {
          return <Text style={styles.header}>{headerItem.section.key}</Text>
      }


  render() {
    return (
      <View style={styles.container}>
      <Text> one </Text>
      <Button title="go to two" onPress={() => this.props.navigation.navigate('My')} />
       <SectionList style={styles.container}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderHeader}
                    sections={dataSource}
                    keyExtractor={(item)=>item.name}
                />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
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
