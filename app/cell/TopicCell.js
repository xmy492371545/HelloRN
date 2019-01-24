import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');

export default class topicCell extends Component {

  static propTypes = {
      title: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      describe:PropTypes.string,
      price:PropTypes.string,
      handler:PropTypes.func,
  };

  render() {
      return (
        <TouchableOpacity style={styles.topicItem} onPress={this.props.handler}>
            <Image source={{uri:this.props.image}} style={styles.topicImg} />
            <View style={styles.topicContainer}>
                <View style={styles.topicText}>
                    <Text style={styles.topicTitle}>{this.props.title}</Text>
                    <Text style={styles.topicDesc}>{this.props.describe}</Text>
                </View>
                <Text style={styles.topicPrice}>{this.props.price}</Text>
            </View>
        </TouchableOpacity>
      );
  }
}
const styles = StyleSheet.create({
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
});
