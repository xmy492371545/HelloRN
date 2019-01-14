/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import  TabNavigator from 'react-native-tab-navigator';

import HomePage from './Home';
import CatePage from './Cat';
import CarPage from './Car';
import MyPage from './My';

const dataSource = [
                    {tabIconUri:'home',icon:require('../image/home.png'),selectedIcon:require('../image/home.png'),tabPage:'home',tabName:'首页',component:HomePage},
                    {tabIconUri:'cat',icon:require('../image/cat.png'),selectedIcon:require('../image/cat.png'),tabPage:'cate',tabName:'分类',component:CatePage},
                    {tabIconUri:'car',icon:require('../image/car.png'),selectedIcon:require('../image/car_s.png'),tabPage:'car',tabName:'购物车',component:CarPage},
                    {tabIconUri:'my',icon:require('../image/my.png'),selectedIcon:require('../image/my.png'),tabPage:'my',tabName:'我的',component:MyPage}
                 ];
type Props = {};
var navigation = null;
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
                               tabStyle={{alignSelf:'center'}}
                               onPress = {() => {this.setState({selectedBarItem:item.tabPage})}}>
                <item.component navigation={navigation}/>
               </TabNavigator.Item>
      )
    });
    return (
      // <View style={styles.container}>
      <TabNavigator hidesTabTouch={false}
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
  tabIcon:{
    width:23,
    height:23
  }
});
