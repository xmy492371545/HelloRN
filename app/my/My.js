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
import Cell from '../GDHotCell';

type Props = {};
const {width, height} = Dimensions.get('window');

export default class MyPage extends Component<Props> {
    render(){
      return <NavigatorIOS
           initialRoute={{
             component:MyPageApp,
             title:'我',
           }}
           style={{flex: 1}}
      />;
    }

}
const titlesArray=[{name:'全部',id:1},{name:'待付款',id:2},{name:'待发货',id:3},{name:'待收货',id:4},{name:'待评价',id:5}]
class MyPageApp extends Component<Props> {
  static navigationOptions = {
     title: 'MyPage'
   }
   _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <Text
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }

   _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text
      style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
  }

  render() {
    let dataAry=require('../../data/section.json').list;
    // <View>
    // <SectionList
    //              renderSectionHeader={this._sectionComp}
    //              renderItem={this._renderItem}
    //              sections={dataAry}
    //              ItemSeparatorComponent={() => <View><Text></Text></View>}
    //              ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
    //              ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
    //              />
    // </View>

    let tabs = titlesArray.map((item,i) => {
      return (
        <Text key={i}
                       style={styles.viewStyle}
                       tabLabel={item.name} >
                       {item.name+'4564887845645'}
        </Text>
      )
    });
    return (
      // <View style={styles.viewStyle}>
       <ScrollableTabView
                style={styles.viewStyle}
                renderTabBar={() =>
                    <ScrollableTabBar
                        style={{height:35}}
                        tabStyle={{height:34,paddingLeft: 15,paddingRight: 15,}}
                    />
                }
                // renderTabBar={() => <DefaultTabBar/>}
                tabBarUnderlineStyle={{backgroundColor:'orange'}}
                tabBarBackgroundColor='yellow'
                tabBarActiveTextColor='orange'
                tabBarInactiveTextColor='black'
                tabBarTextStyle={{fontSize: 14}}
                key={1}
                >
        {tabs}
       </ScrollableTabView>
      // </View>
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
