import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const {width, height} = Dimensions.get('window');

export default class CatTitleCell extends Component {

  static propTypes = {
      title: PropTypes.string,
  };

  render() {
      return (
          <View style={styles.container}>
             <Text numberOfLines={1} style={styles.txt}>{this.props.title}</Text>
          </View>
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
    txt: {
        width: width * 0.6,
    }
    ,
});
