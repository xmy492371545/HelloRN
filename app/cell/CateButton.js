import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');

export default class cateButtonCell extends Component {

  static propTypes = {
      title: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      handle:PropTypes.func,
  };

  render() {
      return (
        <TouchableOpacity style={styles.threeItem} onPress={this.props.handle}>
            <Image source={{uri:this.props.image}} style={styles.threeImg} />
            <View style={styles.titleView} >
                <Text style={styles.titleTxt} numberOfLines={1}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>
      );
  }
}
const styles = StyleSheet.create({
    threeItem:{
        width:width/5 -15,
        marginLeft:4,
        marginRight:5,
        marginBottom:15,
        borderRadius:20,
    },
    threeImg:{
        // width:width/4 -15,
        height:width/5-15,
        backgroundColor:'#f4f4f4',
        borderRadius:((width/5-15)/2),
        marginTop:10,
    },
    titleView:{
        marginTop:8,
        marginBottom:4,
        // flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
    },
    titleTxt:{
        fontSize:14,
        color:'#666',
        // marginTop:8,
        // marginBottom:4,
        // backgroundColor:'yellow'
    },
});
