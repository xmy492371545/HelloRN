import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    FlatList,
} from 'react-native';

//引用插件
import Swiper from 'react-native-swiper';
import ProductButtonCell from '../cell/ProductButton';

import CateButtonCell from '../cell/CateButton';
import BannerCell from './Banner';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class recommend extends Component {

    constructor(props) {
        super(props);
        let products=require('../../data/products.json');
        let cate=require('../../data/nineArea.json');

        this.state = {
            swiperShow: true,
            cate:cate.list,
            tips: ['XXXX食品店', '7天无理由退货', '正品保证'],
            topic: [
                {
                    title: 'ewtreqwgqgtt同',
                    describe: '35tr4yewye',
                    price: '100',
                    uri:require('../../image/img/img9.png')
                },
                {
                    title: '42523ryqt',
                    describe: 'ghefhsrhrt',
                    price: '36',
                    uri:require('../../image/img/img8.png')
                },
                {
                    title: '45ywe4uyw46u4u6346u年',
                    describe: 'u5u767yjtejy',
                    price: '9',
                    uri:require('../../image/img/img4.png')
                },
            ],
            special:[
                {title: '吃货11 吃货吃货吃货吃货吃货吃货', price: '100', describe:'吃货集合',uri:require('../../image/img/img5.png')},
                {title: '吃货22吃货吃货吃货吃货吃货', price: '49', describe:'吃货集合',uri:require('../../image/img/img2.png')},
                {title: '吃货33333吃货吃货吃货吃货吃货', price: '4524', describe:'吃货集合',uri:require('../../image/img/img3.png')},
                {title: '吃货4吃货吃货', price: '547', describe:'吃货集合',uri:require('../../image/img/img6.png')},
                {title: '吃货555吃货吃吃货吃货', price: '324', describe:'吃货集合',uri:require('../../image/img/img7.png')},
                {title: '吃货66666666666吃货吃货吃货吃货吃货', price: '573', describe:'吃货集合',uri:require('../../image/img/img4.png')},
            ]
        };
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         swiperShow: true,
        //     });
        // }, 0)
    }



     renderTips() {
        let tip = this.state.tips
        return (
            <View style={styles.tips}>
                {
                    tip.map((item, index) => (
                        <View style={styles.tipItemBox} key={index.toString()}>
                            <Image source={require('../../image/img/img6.png')} style={styles.redyes} />
                            <Text style={styles.tipItem}>{item}</Text>
                        </View>
                    ))
                }
            </View>
        )
    }

     // 一行3个
    renderThree(){
        return (
            <View style={styles.moduleBox}>
                <Text style={styles.subtitle}>促销</Text>
                <FlatList
                    data={this.state.special}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderThreeItem}
                    numColumns={3}
                />
            </View>
        )
    }
    renderThreeItem = ({ item }) => {
      return(
        <ProductButtonCell
            image={item.uri}
            title={item.title}
            id={item.id}
            price={item.price}
            isTwoOneLine={false}
        />
      )
    }

    // 横向flatList
    renderTopic() {
        return (
            <View style={styles.moduleBox}>
                <Text style={styles.subtitle}>买过</Text>
                <FlatList
                    data={this.state.topic}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderTopicItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
    renderTopicItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.topicItem}>
                <Image source={item.uri} style={styles.topicImg} />
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

    // 一行两个
    renderTwo(){
        return (
            <View style={styles.moduleBox}>
                <Text style={styles.subtitle}>热门</Text>
                <FlatList
                    data={this.state.special}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderTwoItem}
                    numColumns={2}
                />
            </View>
        )
    }
    renderTwoItem = ({ item }) => {
      return(
        <ProductButtonCell
            image={item.uri}
            title={item.title}
            id={item.id}
            price={item.price}
            isTwoOneLine={true}
        />
      )
    }

    render() {
      return (
          <View style={styles.container}>
              {this.renderTips()}
              {this.renderThree()}
              {this.renderTopic()}
              {this.renderTwo()}
          </View>
      );
        // return (
        //     <View style={styles.container}>
        //         {this.renderBanner()}
        //         {this.renderNineArea()}
        //         {this.renderTips()}
        //         {this.renderThree()}
        //         {this.renderTopic()}
        //         {this.renderTwo()}
        //     </View>
        // );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
  
    wrapper: {
        width: width,
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
    moduleBox: {
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        paddingBottom:10,
        marginBottom:10,
    },
    subtitle:{
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
    specialItem:{
        width:width/3 -12,
        marginLeft:4,
        marginRight:5,
        marginBottom:15,
    },
    specialImg:{
        width:width/3 -12,
        height:width/3 -12,
        backgroundColor:'#f4f4f4'
    },
    specialTitle:{
        fontSize:14,
        color:'#666',
        marginTop:8,
        marginBottom:4,
    },
    specialPrice:{
        fontSize:14,
        color:'#b4282d',
    },
    likeItem:{
        width:width/2 -15,
        marginLeft:5,
        marginRight:5,
        marginBottom:15,
    },
    likeImg:{
        width:width/2 -15,
        height:width/2 -15,
        backgroundColor:'#f4f4f4'
    },
    likeDesc:{
        backgroundColor:'#F1ECE2',
        color:'#9F8A60',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:4,
        paddingRight:4,
    },
    likeTitle:{
        fontSize:14,
        color:'#666',
        marginTop:8,
        marginBottom:4,
    },
    likePrice:{
        fontSize:14,
        color:'#b4282d',
    }
});
