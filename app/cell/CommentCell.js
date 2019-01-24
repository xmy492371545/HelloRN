import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');

import {Gray_Color} from '../common/Common'

export default class PingJiaCell extends Component {

  static propTypes = {
      title: PropTypes.string,
      image: PropTypes.string,
      products:PropTypes.string,
      detail:PropTypes.string,
  };

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white',marginTop:10}}>
        <View style={{flex:1,flexDirection: 'row', alignItems: 'center',marginLeft:10,marginRight:10,marginTop:8}}>
          <Image style={{width:20,height:20,borderRadius:10}} source={{uri: this.props.image}}/>
          <Text style={{color:'gray',marginLeft:10,}}>{this.props.name}</Text>
        </View>
        <Text style={{color:'gray',fontSize:12,marginLeft:10,marginRight:10,marginTop:8}} numberOfLines={2} ellipsizeMode='tail'>{this.props.products}</Text>
        <Text style={{color:'black',fontSize:14,marginLeft:10,marginRight:10,marginTop:8}} numberOfLines={10} ellipsizeMode='tail'>{this.props.detail}</Text>
        <View style={{flex:1,backgroundColor: Gray_Color, height: 10}}>
        </View>
      </View>
      )
  }
}
