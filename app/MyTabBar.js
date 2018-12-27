/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TabBarIOS, NavigatorIOS} from 'react-native';

import HomePage from './Home';
import CatePage from './Cat';
import CarPage from './Car';
import MyPage from './My';


type Props = {};
var navigatorTitle='HH';

// export default class MyTabBar extends Component {
//  render() {
//   return (
//    <NavigatorIOS
//     initialRoute={{
//      component: MyTabBarApp,
//      title: navigatorTitle,
//     }}
//     style={{flex: 1}}
//    />
//   );
//  }
// }
export default class MyTabBarApp extends Component<Props> {
 constructor(props){
   super(props);
   this.state={
     selectedBarItem:'home',
   }
 }

  render() {
    return (
      <TabBarIOS style={{backgroundColor:'yellow'}}
                 barTintColor="white"
                 tintColor='green'
                 unselectedItemTintColor='gray'
                 translucent={false}>
       <TabBarIOS.Item
                       title='首页'
                       icon={{uri:'home'}}
                       selected={this.state.selectedBarItem==='home'}
                       onPress={()=>{this.setState({selectedBarItem:'home'});navigatorTitle='hhh';}}>
        <HomePage></HomePage>
       </TabBarIOS.Item>
       <TabBarIOS.Item
                       title='分类'
                       icon={{uri:'cat'}}
                       selected={this.state.selectedBarItem==='cate'}
                       onPress={()=>{this.setState({selectedBarItem:'cate'});navigatorTitle='cate';}}>
       <CatePage></CatePage>
       </TabBarIOS.Item>
       <TabBarIOS.Item
                       title='购物车'
                       icon={{uri:'car'}}
                       selected={this.state.selectedBarItem==='car'}
                       onPress={()=>{this.setState({selectedBarItem:'car'});navigatorTitle='Car';}}>
        <CarPage></CarPage>
       </TabBarIOS.Item>
       <TabBarIOS.Item
                       title='我的'
                       icon={{uri:'my'}}
                       selected={this.state.selectedBarItem==='my'}
                       onPress={()=>{this.setState({selectedBarItem:'my'});navigatorTitle='My';}}>
        <MyPage></MyPage>
       </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
});
