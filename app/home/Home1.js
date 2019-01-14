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
         Dimensions,
         TabBarIOS,
         TouchableOpacity,
         NavigatorIOS,
         FlatList,
         ScrollView
       }from 'react-native';
import NextPage from './Next';
import Swiper from 'react-native-swiper';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

const { width, height } = Dimensions.get('window');
const topPicHeight = 300;


type Props = {};


export default class HomePage extends Component<Props> {
  _handleNavigationRequest() {
   this.refs.nav.push({
     component: HomePageApp,
     title: 'Genius',
     passProps: { myProp: 'genius' },
   });
 }
 render() {
  return (
   <NavigatorIOS
    ref='nav'
    initialRoute={{
     component: HomePageApp,
     title: '首页',
     passProps:{
       myProp:'I am home page!!'
     },
     shadowHidden:false,
     leftButtonTitle:'left',
     onLeftButtonPress:()=>{alert('left btn!!!')},
     rightButtonTitle:'right',
     onRightButtonPress: () => this._handleNavigationRequest(),
    }}
    style={{flex: 1}}
   />
  );
 }
}

class HomePageApp extends Component{
  constructor(props){
    super(props);
    this.state = {
            swiperShow: false,
            tabShow: false,
            label: ['推荐', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'],
            tips: ['网易自营品牌', '30天无忧退货', '48小时快速退款'],
            topic: [
                {
                    title: '岁末清扫有它们，体验大不同',
                    describe: '更轻松、更美好的大扫除攻略',
                    price: '9.9元起',
                },
                {
                    title: '新年一点红，幸运一整年',
                    describe: '那些让你“红”运当头的好物',
                    price: '9.9元起',
                },
            ]
        };
  }
  componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true,
                tabShow: true
            });
        }, 0)
    }

 _gotToNext(){
   // this.props.navigation.navigate('Next');
   this.props.navigator.push({
    title:'NextPage',
    component: NextPage,
    callBack:(msg)=>{
      console.log(d);
      this.refeshView(msg);
      console.log('end');
    }
   });
 }
 // 滑动tab
    renderScrollableTab() {
        let label = this.state.label
        if (this.state.tabShow){
            return (
                <ScrollableTabView
                    style={{paddingTop: 8}}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            style={{height:35}}
                            tabStyle={{height:34,paddingLeft: 15,paddingRight: 15,}}
                        />
                    }
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#b4282d'
                    tabBarInactiveTextColor='#333'
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                >
                    {
                        label.map((item, index) => {
                            if (item == '推荐') {
                                return (
                                    <ScrollView tabLabel={item} key={index}>
                                        <Recommend/>
                                    </ScrollView>
                                )
                            } else {
                                return (
                                    <Otherpage tabLabel={item} key={index} />
                                )
                            }
                        })
                    }
                </ScrollableTabView>
            )
        }
    }

 // 轮播图
     renderBanner() {
         if (this.state.swiperShow) {
             return (
                 <Swiper
                     style={styles.wrapper}
                     height={topPicHeight}
                     showsButtons={false}
                     autoplay={true}
                     paginationStyle={styles.paginationStyle}
                     dotStyle={styles.dotStyle}
                     activeDotStyle={styles.activeDotStyle}
                 >
                     <Image source={require('../../image/img/img2.png')} style={styles.bannerImg} />
                     <Image source={require('../../image/img/img1.png')} style={styles.bannerImg} />
                     <Image source={require('../../image/img/img3.png')} style={styles.bannerImg} />
                     <Image source={require('../../image/img/img4.png')} style={styles.bannerImg} />
                     <Image source={require('../../image/img/img1.png')} style={styles.bannerImg} />
                 </Swiper>
             )
         } else {
             return (
                 <View style={{ height: topPicHeight }}>
                     <Image source={require('../../image/img/img1.png')} style={styles.bannerImg} />
                 </View>
             );
         }
     }
     // 小标签
         renderTips() {
             let tip = this.state.tips
             return (
                 <View style={styles.tips}>
                     {
                         tip.map((item, index) => (
                             <View style={styles.tipItemBox} key={index}>
                                 <Image source={require('../../image/ad/ad1.png')} style={styles.redyes} />
                                 <Text style={styles.tipItem}>{item}</Text>
                             </View>
                         ))
                     }
                 </View>
             )
         }

         renderTopic() {
             return (
                 <View style={styles.topic}>
                     <Text style={styles.topicHead}>专题精选</Text>
                     <FlatList
                         data={this.state.topic}
                         keyExtractor={(item, index) => index.toString()}
                         renderItem={this.renderTopPicItem}
                         horizontal={true}
                         showsHorizontalScrollIndicator={false}
                     />
                 </View>
             )
         }
         renderTopPicItem(item){
           return (
             <TouchableOpacity style={styles.topicItem}>
               <Image source={require('../../image/img/topic.png')} style={styles.topicImg} />
               <View style={styles.topicContainer}>
                   <View style={styles.topicText}>
                       <Text style={styles.topicTitle}>{item.title}</Text>
                       <Text style={styles.topicDesc}>{item.describe}</Text>
                   </View>
                   <Text style={styles.topicPrice}>{item.price}</Text>
               </View>
           </TouchableOpacity>
             )
           }



  render() {
    return (
      <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    {this.renderScrollableTab()}
                </View>
                     {this.renderBanner()}
                     {this.renderTips()}
                     {this.renderTopic()}
                     {this.renderTopic()}
                 </View>
      );
    // return (
    //   <View style={styles.viewStyle}>
    //    <Text>home page!!!!</Text>
    //    <Text>{this.props.myProp}</Text>
    //    <TouchableOpacity onPress={this._gotToNext.bind(this)}>
    //    <Text style={{backgroundColor:'blue'}}>进入下一页</Text>
    //     </TouchableOpacity>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems: 'center',
    color: '#333333',
    // marginTop: 100,
    backgroundColor:'red',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  },
  // container: {
  //       flex: 1,
  //       alignItems: 'center',
  //       backgroundColor: '#efefef',
  //   },
    bannerImg: {
        height: topPicHeight,
        width: width,
    },
    wrapper: {
        width: width,
        height: topPicHeight,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },
    tips: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tipItemBox: {
        flexDirection: 'row',
    },
    redyes: {
        width: 16,
        height: 16,
        marginRight: 5,
    },
    tipItem: {
        fontSize: 14,
        color: '#333',
    },
    topic: {
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        paddingBottom:10,
        marginBottom:10,
    },
    topicHead:{
        fontSize:16,
        color:'#666',
        padding:15,
    },
    topicItem: {
        width: width*0.7,
        marginLeft:15,
    },
    topicImg: {
        width: width*0.7,
        height: width*0.4,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    topicTitle:{
        fontSize:16,
        color:'#666',
        backgroundColor:'yellow'
    },
    topicDesc:{
        fontSize:13,
        color:'#999',
        marginTop:3,
    },
    topicPrice:{
        fontSize:14,
        color:'#b4282d',
    },
  });
