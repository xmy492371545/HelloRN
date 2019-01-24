import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
export default class NavBackButton extends Component {
  render() {
          return (
              <TouchableOpacity
                  onPress={()=>{
                      this.props.nav.goBack()
                  }}
              >
                  <Image style={styles.image} source={require('../../image/nav/back.png')} ></Image>
              </TouchableOpacity>
          );
      }
}

  const styles = StyleSheet.create({
      image: {
          left: 13,
          width:20,
          height:20,
          resizeMode:'contain',
      },
  });
