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

import ProductButtonCell from '../cell/ProductButton';
import TopicCell from '../cell/TopicCell';
import PropTypes from 'prop-types'

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
var nav;
export default class recommend extends Component {
  // static propTypes={
  //   nav:PropTypes.object
  // }

    constructor(props) {
        super(props);
        let products=require('../../data/products.json');
        let cate=require('../../data/nineArea.json');

        this.state = {
            cate:cate.list,
            special:products.list,
            topic: [
                {
                    id:'8',
                    title: 'ewtreqwgqgtt同',
                    describe: '35tr4yewye',
                    price: '100',
                    uri:'img9'
                },
                {
                    id:'9',
                    title: '42523ryqt',
                    describe: 'ghefhsrhrt',
                    price: '36',
                    uri:'img8'
                },
                {
                    id:'10',
                    title: '45ywe4uyw46u4u6346u年',
                    describe: 'u5u767yjtejy',
                    price: '9',
                    uri:'img7'
                },
                {
                  id:'11',
                  title:'吃货11 吃货吃货吃货吃货吃货吃货',
                  price:'100',
                  describe:'吃货集合',
                  uri:'img5'
                },
                {
                  id:'12',
                  title:'吃货22吃货吃货吃货吃货吃货',
                  price:'49',
                  describe:'吃货集合',
                  uri:'img2'
                },
                {
                  id:'13',
                  title:'吃货33333吃货吃货吃货吃货吃货',
                  price:'4524',
                  describe:'吃货集合',
                  uri:'img3'
                },
                {
                  id:'14',
                  title:'吃货4吃货吃货',
                  price:'547',
                  describe:'吃货集合',
                  uri:'img6'
                },
                {
                  id:'15',
                  title:'吃货555吃货吃吃货吃货',
                  price:'324',
                  describe:'吃货集合',
                  uri:'img7'
                }
                ,
                // {
                //   id:16,
                //   title:'吃货66666666666吃货吃货吃货吃货吃货',
                //   price:'573',
                //   describe:'吃货集合',
                //   uri:'img4'
                // }
            ]
        };
    }

    goToDetail(title){
      this.props.nav.navigate('Detail',{title:title});
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
                    refresh = {true}
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
            handler={()=>this.goToDetail(item.title)}
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
          <TopicCell
              image={item.uri}
              title={item.title}
              id={item.id}
              price={item.price}
              describe={item.describe}
              handler={()=>this.goToDetail(item.title)}
          />
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
            handler={()=>this.goToDetail(item.title)}
        />
      )
    }

    render() {
      return (
          <View style={styles.container}>
              {this.renderThree()}
              {this.renderTopic()}
              {this.renderTwo()}
          </View>
      );

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
