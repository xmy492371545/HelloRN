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

import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types'


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class banner extends Component {

  static propTypes = {
    handler:PropTypes.func,
  };

    constructor(props) {
        super(props);
        let products=require('../../data/products.json');
        let cate=require('../../data/nineArea.json');
        this.state = {
            swiperShow: true,
        };
    }

    componentDidMount() {

    }

    // props.handler(){
      // this.props.nav.navigate('Web',{title:'web'});
    // }


    // banner
    renderBanner() {
        // if (this.state.swiperShow) {
            return (
                <Swiper
                    style={styles.wrapper}
                    height={width * 40 / 75}
                    showsButtons={false}
                    autoplay={true}
                    loop={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                <TouchableOpacity style={styles.bannerImg} activeOpacity={1} onPress={this.props.handler}>
                  <Image source={require('../../image/img/img1.png')} style={styles.bannerImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerImg} activeOpacity={1} onPress={this.props.handler}>
                  <Image source={require('../../image/img/img2.png')} style={styles.bannerImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerImg} activeOpacity={1} onPress={this.props.handler}>
                  <Image source={require('../../image/img/img3.png')} style={styles.bannerImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerImg} activeOpacity={1} onPress={this.props.handler}>
                  <Image source={require('../../image/img/img4.png')} style={styles.bannerImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerImg} activeOpacity={1} onPress={this.props.handler}>
                  <Image source={require('../../image/img/img5.png')} style={styles.bannerImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerImg} activeOpacity={1} onPress={this.props.handler}>
                  <Image source={require('../../image/img/img6.png')} style={styles.bannerImg} />
                </TouchableOpacity>
              </Swiper>
            )
        // } else {
        //     return (
        //         <View style={{ height: width * 40 / 75 }}>
        //             <Image source={require('../../image/img/img1.png')} style={styles.bannerImg} />
        //         </View>
        //     );
        // }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderBanner()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#efefef',
    },
    bannerImg: {
        flex:1,
        width: width,
        height: 200,
        alignItems: 'center',
        justifyContent:'center',
        // backgroundColor: 'red',
    },
    paginationStyle: {
        bottom: 6,
        // left:null,
        // right:10
    },
    dotStyle: {
      width: 5,
      height: 5,
        backgroundColor: '#fff',
        borderRadius: 2.5,
    },
    activeDotStyle: {
        width: 10,
        height: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
    },
});
