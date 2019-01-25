/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Text, View, Image, ImageBackground, Dimensions, ScrollView,TouchableOpacity} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ImagePicker from 'react-native-image-picker'
import {showImagePicker} from '../common/Camera'
import HomeList from '../home/HomeList';


type Props = {};
const {width, height} = Dimensions.get('window');
const titlesArray=[
{name:'全部',id:1},{name:'待付款',id:2},
{name:'待发货',id:3},{name:'待收货',id:4},
{name:'待评价',id:5}]

export default class MyPageApp extends Component<Props> {
   constructor(props){
     super(props);
     this.state={
       avatarSource:require('../../image/ad/ad1.png'),
     };
   }

  selectCamera(){
    showImagePicker((source)=>{  this.setState({
        avatarSource: source,
      })});
  }

  goToOrder(){
    this.props.navigation.navigate('Order',{title:'我的订单'})
  }

  render() {
    return (
    <ImageBackground
            style={{ flex: 1 }}
            source={require('../../image/home/bg1.png')}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.photoView}>
            <TouchableOpacity onPress={() => this.selectCamera()}>
              <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.goToOrder()}>
            <View style={{flex:1,height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:10,marginLeft:10,marginRight:10,marginTop:10}}>
              <Text style={{flex:1,marginLeft:10}}>我的订单</Text>
              <Image source={require('../../image/common/a.png')} style={{resizeMode:'contain',marginRight:10,width:10,height:10}} />
            </View>
          </TouchableOpacity>
        </ScrollView>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  photoView:{
    flex:1,
    alignItems:'center',
  },
  uploadAvatar:{
    flex:1,
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50,
    marginTop: 40,
  },
  viewStyle: {
    flex:1,
    marginTop: 100,
    // width:width,
    // height:40,
  },
  textStyle:{
    textAlign: 'center',
  }
});
