import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import PropTypes from 'prop-types'

const {width, height} = Dimensions.get('window');

export default class GridViewCell extends Component {

    static propTypes = {
      title: PropTypes.string,
      image: PropTypes.string,
      dec: PropTypes.string,
      handler:PropTypes.func,
    };
    render() {
        return (
          <TouchableOpacity onPress={this.props.handler}>
            <View style={styles.container}>
             <View>
              <Text numberOfLines={1} style={styles.title} ellipsizeMode='tail'>{this.props.title}</Text>
              <Text numberOfLines={1} style={styles.dec} ellipsizeMode='tail'>{this.props.dec}</Text>
             </View>
              <Image source={{uri: this.props.image}} style={styles.imageV}/>
            </View>
          </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: (width-20)/2-2,
        height: 84,
        // marginRight:1,
        // marginBottom:1,
        // backgroundColor:'white',
        borderRadius:10,
        // borderBottomWidth:1,
        // borderBottomColor:'gray',
        // borderWidth:0.5,
        // borderColor:'gray',
    },
    title: {
      fontSize:16,
      fontWeight:'bold',
      height:30,
      marginLeft:10,
      marginTop:10,
      color:'black',
    },
    dec: {
      marginLeft:10,
      marginBottom:8,
      height:20,
      color:'gray',
    },
    imageV: {
        marginLeft:10,
        // marginRight:10,
        width: 60,
        height: 60,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#CED0CE',
        resizeMode:'contain'
    },

});
