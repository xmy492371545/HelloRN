/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import NavBackButton from './app/common/NavBackButton'

import LoginPage  from './app/main/Login';
import Registerpage  from './app/main/Register';

import HomePage from './app/home/Home';
import CatePage from './app/cate/Cat';
import CarPage from './app/car/Car';
import MyPage from './app/my/My';
import ListPage from './app/home/List';
import SearchPage from './app/home/Search';
import DetailPage from './app/home/Detail';
import WebViewPage from './app/home/WebViewPage';

import HomeList from './app/home/HomeList';
import CommentsList from './app/home/CommentsList';


var icons=[{uri:require('./image/tab/home.png'),name:'首页'},
{uri:require('./image/tab/cat.png'),name:'分类'},
{uri:require('./image/tab/car.png'),name:'购物车'},
{uri:require('./image/tab/my.png'),name:'我的'},
{uri:require('./image/tab/my.png'),name:'test'}];
type Props = {};
const TabRoutes = {
  Home: HomePage,
  Cate: CatePage,
  Car: CarPage,
  My: MyPage,
  HomeList:HomeList,
}
const TabRoutesConfig={
  defaultNavigationOptions: ({navigation}) => {
    const routeName  = navigation.state.routeName;
    let tabName;
    let iconName;
    if (routeName === 'Home') {
      tabName = icons[0].name;
      iconName = icons[0].uri;
    } else if (routeName === 'Cate') {
      tabName = icons[1].name;
      iconName = icons[1].uri;
    } else if (routeName === 'Car') {
      tabName = icons[2].name;
      iconName = icons[2].uri;
    } else if (routeName === 'My') {
      tabName = icons[3].name;
      iconName = icons[3].uri;
    }else   {
      tabName = icons[4].name;
      iconName = icons[4].uri;
    }
    return {
      // header:null,
      tabBarLabel:(({tintColor}) => {
        return <Text style={[{color: tintColor}]}>{tabName}</Text>;
      }),
      tabBarIcon: ({ focused, tintColor }) => {
          return <Image
              source={iconName}
              style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>;
        },
      tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 16,
          },
          style: {
            backgroundColor: 'white',
          }
      },
  }
  }
}
const TabNavigator = createBottomTabNavigator(TabRoutes,TabRoutesConfig);

const NavStack = createStackNavigator({
  Tab: {
    screen: TabNavigator,
    navigationOptions:{
      header:null,
    }
  },
  List: ListPage,
  Search:SearchPage,
  Detail:DetailPage,
  Web:WebViewPage,
  Comment:CommentsList,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <NavBackButton nav = {navigation} />,
      headerTitleStyle: {
        fontSize:18,
        fontWeight: 'bold',
        color:'black'
      },
    })
  }
);


export default createAppContainer(NavStack);

//二级页面不会隐藏tab
/*const HomeStack = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  Next: NextPage,
  Search:SearchPage,
  Last:LastPage,
});
const CateStack = createStackNavigator({
  Cate: {
      screen: CatePage,
  },
});
const CarStack = createStackNavigator({
  Car:  {
      screen: CarPage,
      navigationOptions: {
          header:null
      }
  },
});
const MyStack = createStackNavigator({
  My: {
            screen: MyPage,
            navigationOptions: {
                header:null
            }
        },
});


const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Cate:CatePage,
  Car:CarStack,
  My: MyStack,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'green'
      },
    tabBarLabel:(({tintColor}) => {
      const { routeName } = navigation.state;
      let tabName;
      if (routeName === 'Home') {
        tabName = '首页';
      } else if (routeName === 'Cate') {
        tabName = '分类';
      } else if (routeName === 'Car') {
        tabName = '购物车';
      } else if (routeName === 'My') {
        tabName = '我的';
      }
      return <Text style={[{color: tintColor}]}>{tabName}</Text>;
    }),
    tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = require('./image/tab/home.png');
        } else if (routeName === 'Cate') {
          iconName = require('./image/tab/cat.png');
        } else if (routeName === 'Car') {
          iconName = require('./image/tab/car.png');
        } else if (routeName === 'My') {
          iconName = require('./image/tab/my.png');
        }
        return <Image
            source={iconName}
            style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>;
      },
    }),
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: 'tomato',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 49,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
            width:23,
            height:23,
        }
    },
  }
  );
export default createAppContainer(TabNavigator);
*/
// const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
// const StackRouteConfigs = {
//     Tab: {
//         screen: Tab,
//     }
// };
// const StackNavigatorConfigs = {
//     initialRouteName: 'Tab',
//     navigationOptions: {
//         title: '标题',
        // headerStyle: {backgroundColor: '#5da8ff'},
        // headerTitleStyle: {color: '#333333'},
//     }
// };
// const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
// export default class App extends Component<Props> {
//   render() {
//     return (
//        <MyTabBar />
//     );
//   }
// }
