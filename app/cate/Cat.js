/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        Image,
        ImageBackground,
        FlatList,
        TouchableOpacity,
        TouchableHighlight,
        ScrollView
} from 'react-native';
import PropTypes from 'prop-types'

import ScrollTap from './CateScrollTap';
// import CommonNavBar from '../nav/CommonNavBar';
import {ifIphoneX} from '../common/AdapterPhone';


type Props = {};
export default class CatePageApp extends Component<Props> {
  // static navigationOptions = ({navigation}) => ({
  //    title: 'Cate'
  //  })
  constructor(props){
    super(props);
    let dataAry=require('../../data/cate.json');
    this.state = {
      error: false,
      page: 1,
      refreshing: false,
      loading: false,
      data: dataAry.list,
    };
  }

  componentDidMount(){

  }


  _onRefresh(){
  let that=this;
  // 页面渲染之后在加载结束周期重新加载
  that.componentDidMount();
 }
 _endReached(){
     let that=this
     // 判断首屏满屏的情况
     if(that.state.data && that.state.length < parseInt(that.state.totalCount)){
         that.state.currentPage++;
     }else{
          //若总数未满一屏，进去就提示
          // alert('已加载完成')
     }
 }
 _listFooterComponent(){
   return (
       <View>
           <Text>列表底部的布局</Text>
       </View>
    )
 }
 _listHeaderComponent(){
   return (
     <View>
         <Text>也可以是一组图片的渲染</Text>
     </View>
 )
 }
 _listEmptyComponent(){
   return (
       <View>
           <Text>暂无数据</Text>
       </View>
   )
 }
 pressLeftCell(){

 }

 render() {
   return(
     <ImageBackground
           style={{ flex: 1 }}
           source={require('../../image/home/bg1.png')}
     >
     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       <ScrollTap nav={this.props.navigation}/>
     </ScrollView>
     </ImageBackground>
     )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...ifIphoneX({
        marginTop: 44,
    }, {
        marginTop: 20,
    })
  },
  LeftCellStyle: {
    flex: 1,
    width:60,
    height:40,
    alignItems:'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  LeftBackCellStyle: {
    backgroundColor: 'transparent',
    width:60,
    height:39.5,
    alignItems:'center',
    justifyContent: 'center',
  },
  LeftTouchStyle: {
    flex: 1,
    backgroundColor: 'red',
    width:60,
    height:40,
    alignItems:'center',
    justifyContent: 'center',
  },
  LeftIcon:{
    width:30,
    height:30,
  },
  CellLineStyle:{
    backgroundColor: 'gray',
    width:60,
    height:0.5,
    alignItems:'stretch',
    justifyContent: 'center',
  }
});
