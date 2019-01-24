import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');

export default class productButtonCell extends Component {

  static propTypes = {
      title: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      isTwoOneLine:PropTypes.bool,
      handler:PropTypes.func,
  };

  render() {
      return (
        <TouchableOpacity style={[styles.threeItem,this.props.isTwoOneLine&&styles.twoItem]}
                          onPress={this.props.handler}
        >
            <Image source={{uri:this.props.image}} style={[styles.threeImg,this.props.isTwoOneLine&&styles.twoImg]} />
            <View>
                <Text style={styles.titleTxt} numberOfLines={2}>{this.props.title}</Text>
                <Text style={styles.priceTxt}>￥{this.props.price}</Text>
            </View>
        </TouchableOpacity>
      );
  }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        height: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginLeft: 15,
    },
    threeItem:{
        width:width/3 -12,
        marginLeft:4,
        marginRight:5,
        marginBottom:15,
    },
    threeImg:{
        width:width/3 -12,
        height:width/3 -12,
        backgroundColor:'#f4f4f4'
    },
    titleTxt:{
        fontSize:14,
        color:'#666',
        marginTop:8,
        marginBottom:4,
    },
    priceTxt:{
        fontSize:14,
        color:'#b4282d',
    },
    twoItem:{
        width:width/2 -15,
        marginLeft:5,
        marginRight:5,
        marginBottom:15,
    },
    twoImg:{
        width:width/2 -15,
        height:width/2 -15,
        backgroundColor:'#f4f4f4'
    }
});
