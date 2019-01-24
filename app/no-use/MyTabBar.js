/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import  TabNavigator from 'react-native-tab-navigator';
// import {StackNavigator, TabNavigator} from 'react-navigation';
// import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomePage from './home/Home';
import CatePage from './cate/Cat';
import CarPage from './Car';
import MyPage from './my/My';
import { ifIphoneX } from './common/AdapterPhone';


const dataSource = [
                    {tabIconUri:'home',icon:require('../image/tab/home.png'),selectedIcon:require('../image/tab/home.png'),tabPage:'home',tabName:'首页',component:HomePage},
                    {tabIconUri:'cat',icon:require('../image/tab/cat.png'),selectedIcon:require('../image/tab/cat.png'),tabPage:'cate',tabName:'分类',component:CatePage},
                    {tabIconUri:'car',icon:require('../image/tab/car.png'),selectedIcon:require('../image/tab/car_s.png'),tabPage:'car',tabName:'购物车',component:CarPage},
                    {tabIconUri:'my',icon:require('../image/tab/my.png'),selectedIcon:require('../image/tab/my.png'),tabPage:'my',tabName:'我的',component:MyPage}
                 ];
type Props = {};
var navigation = null;

// const tabs = createBottomTabNavigator({
//   home:HomePage,
//   cate:CatePage,
//   car:CarPage,
//   my:MyPage
//   })

export default class MyTabBarApp extends Component<Props> {

 constructor(props){
   super(props);
   navigation = this.props.navigation;
   this.state={
     selectedBarItem:'home',
   }
 }

  render() {
    let tabViews = dataSource.map((item,i) => {
      return ( <TabNavigator.Item key={i}
                               title={item.tabName}
                               titleStyle={{color:'black'}}
                               selectedTitleStyle={{color:'#7A16BD'}}
                               renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
                               renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                               selected={this.state.selectedBarItem===item.tabPage}
                               tabStyle={styles.topBar}
                               onPress = {() => {this.setState({selectedBarItem:item.tabPage})}}>
                <item.component navigation={navigation}/>
               </TabNavigator.Item>
      )
    });
    return (
      // <View style={styles.container}>
      <TabNavigator tabBarStyle={styles.tabBar}
                    hidesTabTouch={false}
                    barTintColor="white"
                    tintColor='green'
                    unselectedItemTintColor='gray'
                    translucent={false}>
        {tabViews}
        </TabNavigator>
        // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabBar:{
    ...ifIphoneX({
        bottom:34,
    }, {
        bottom:0,
    })
  },
  topBar: {
       alignSelf:'center',
       backgroundColor: 'white',
   },
  tabIcon:{
    width:23,
    height:23,
  }
});
