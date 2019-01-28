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
  TouchableOpacity,
  Alert, Text, View,
  Dimensions, Image,Modal,
  Animated, ScrollView,ImageBackground} from 'react-native';
import BannerCell from './Banner';
import ShareAlertDialog from './ShareAlertDialog'
import {ifIphoneX} from '../common/AdapterPhone';

type Props = {};
const { width, height } = Dimensions.get('window');
const List_View_Width=width;
const Gray_Color='#F7F7F7';
var item;
export default class DetailPage extends Component<Props> {

  static navigationOptions = ({navigation}) => {
    item=navigation.state.params;
    const title = item.title;

    return {
      // headerTitle:title,
      header:null
    }
  }

    constructor(props){
      super(props);
      let dataAry=require('../../data/cate.json');
      this.state = {
        canGoBack:false,
        data: dataAry.list,
        show:false,
      };
    }

    backAction(){
      this.props.navigation.goBack(null);
    }

    shareAction(){
      // Alert.alert('分享');
      // return (<ShareAlertDialog show={true}/>)
      this.setState({
        show:true,
        })

    }
    renderImageView(){
      return (
        <BannerCell />
        )

     }
    renderPriceView(){
      return (
        <View style={{flex:1,backgroundColor:'white'}}>
          <View style={{flex:1,backgroundColor:'white',flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color:'red',fontSize:14,marginLeft:10}}>¥</Text>
            <Text style={{color:'red',fontSize:20}}>132</Text>
            <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginLeft:10,marginTop:8,marginBottom:0}}>
              <Text style={{color:'tomato',fontSize:10,textAlign:'center',marginLeft:10,marginRight:10}}>假期大特惠</Text>
            </View>
          </View>
          <View style={{flex:1,marginLeft:10,marginRight:10, marginTop:10}}>
            <Text style={{color:'gray',fontSize:14,textDecorationLine:'line-through'}} >专柜价:199</Text>
          </View>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center', marginTop:10}}>
            <Text style={{color:'black',fontSize:16,width:List_View_Width-60,marginLeft:10}} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
            <TouchableOpacity onPress={()=>this.shareAction()}>
              <Image style={{width:20,height:20,resizeMode:'contain',marginLeft:10,marginRight:10}} source={require('../../image/common/share.png')}/>
            </TouchableOpacity>
            <ShareAlertDialog show={this.state.show}/>
          </View>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center', marginTop:10}}>
            <Text style={{flex:1,color:'gray',marginLeft:10,textAlign:'left'}}>快递:0.00</Text>
            <Text style={{flex:1,color:'gray',textAlign:'center'}}>月销:1078</Text>
            <Text style={{flex:1,color:'gray',marginRight:10,textAlign:'right'}}>南京</Text>
          </View>
            <View style={{flex:1,backgroundColor: Gray_Color, height: 10}}>
            </View>
        </View>
        )
    }

    renderMiddleView(){
      return (
        <View style={{flex:1,backgroundColor:'white'}}>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color:'gray', marginLeft:10}}>优惠</Text>
            <View style={{flex:1,marginTop:10}}>
              <Text style={{color:'tomato', marginLeft:10}}>店铺优惠券 满299减20 满599减40</Text>
              <View style={{flex:1,marginTop:8,flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'tomato', marginLeft:10}}>积分</Text>
                <Text style={{color:'black', marginLeft:10}}>购买可得32积分</Text>
              </View>
            </View>
            <Text style={{color:'gray'}}>领券</Text>
            <Image style={{width:10,height:10,resizeMode:'contain',marginRight:10}} source={require('../../image/common/a.png')}/>
          </View>
          <View style={{flex:1,backgroundColor: Gray_Color, height: 10, marginTop:10}}>
          </View>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center', marginTop:10}}>
            <Text style={{color:'gray', marginLeft:10}}>选择</Text>
            <View style={{flex:1}}>
              <Text style={{color:'black', marginLeft:10}}>选择 选择颜色</Text>
                <View style={{flex:1, marginLeft:10, flexDirection: 'row', alignItems: 'center',marginTop:10}}>
                  <Image style={{width:20,height:20, marginLeft:5}} source={require('../../image/ad/ad1.png')}/>
                  <Image style={{width:20,height:20, marginLeft:5}} source={require('../../image/ad/ad2.png')}/>
                  <Image style={{width:20,height:20, marginLeft:5}} source={require('../../image/ad/ad3.png')}/>
                  <View style={{backgroundColor:Gray_Color,borderRadius:10, marginLeft:10}}>
                    <Text style={{color:'gray'}}>共7种颜色可选</Text>
                  </View>
                </View>
            </View>
          </View>
        </View>
        )
    }
    goToComments(){
      this.props.navigation.navigate('Comment',{title:'评价'});
    }

    renderPingJia(){
      return (
        <TouchableOpacity onPress={() => this.goToComments()}>
        <View style={{flex:1,backgroundColor:'white',marginTop:10}}>
          <View style={{flex:1,backgroundColor: Gray_Color, height: 10, marginTop:10}}>
          </View>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center', marginTop:10}}>
            <Text style={{flex:1,color:'black',marginLeft:10}}>宝贝评价(3425124)</Text>
            <Text style={{color:'red',width:100,marginRight:10,textAlign:'right'}}>查看全部</Text>
            <Image style={{width:10,height:10,resizeMode:'contain',marginRight:10}} source={require('../../image/common/a.png')}/>
          </View>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center',marginTop:8}}>
            <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginLeft:10,marginRight:10,height:20}}>
              <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>质量不错</Text>
            </View>
            <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginLeft:10,marginRight:10,height:20}}>
              <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>态度不错</Text>
            </View>
            <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginLeft:10,marginRight:10,height:20}}>
              <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>包装很好</Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection: 'row', alignItems: 'center',marginLeft:10,marginRight:10,marginTop:8}}>
            <Image style={{width:20,height:20,borderRadius:10}} source={require('../../image/ad/ad1.png')}/>
            <Text style={{color:'gray',marginLeft:10,}}>ldewf***fwfrw</Text>
          </View>
          <Text style={{color:'black',fontSize:12,marginLeft:10,marginRight:10,marginTop:8}} numberOfLines={2} ellipsizeMode='tail'>给大家参考一下，放入我会发给我若 v 精神崩溃软件旧日我换个人推两天后回归 v 十点半 个日两国和肉体个老人隔阂</Text>
        </View>
        </TouchableOpacity>
        )

    }


    render() {
      return (
        <ImageBackground
              style={{ flex: 1 }}
              source={require('../../image/home/bg1.png')}
        >
        <View style={{flex:1}}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         {this.renderImageView()}
         {this.renderPriceView()}
         {this.renderMiddleView()}
         {this.renderPingJia()}
        </ScrollView>
        <TouchableOpacity  style={styles.backButton} activeOpacity={1} onPress={()=>this.backAction()}>
        <View style={styles.backButton}>
          <Image source={require('../../image/nav/back.png')} style={{width:20,height:20,resizeMode:'contain'}} />
        </View>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white',
          ...ifIphoneX({
              marginTop: 44,
          }, {
              marginTop: 20,
          }),
      },
      commonStyle: {
          marginLeft: 10,
          marginRight:10,
      },
      backButton:{
        position:'absolute',
        marginLeft:13,
        ...ifIphoneX({
            marginTop: 24,
        }, {
            marginTop: 20,
        }),
        // left: 13,
        width:20,
        height:20,
        resizeMode:'contain',
      }
  });
