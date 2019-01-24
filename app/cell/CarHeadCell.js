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

export default class CarHeadCell extends Component {

    static propTypes = {
      selected:PropTypes.bool,
      shopName: PropTypes.string,
      shopImage: PropTypes.string,
      shopId: PropTypes.string,
      handler:PropTypes.func,
      selectHandle:PropTypes.func,
    };

    constructor(props){
      super(props);
      this.state={
        select:this.props.selected
      }
    }

    hand = ()=>{
      let sel = this.state.select;
      this.setState({
        select:!sel
      })
    }

    render() {
        return (
          <View style={styles.container}>
          <TouchableOpacity onPress={this.hand}>
              <Image source={this.state.select?require('../../image/common/select.png'):require('../../image/common/unselect.png')}
                     style={styles.select}/>
          </TouchableOpacity>
              <Image source={require('../../image/common/shop.png')} style={styles.shopImage}/>
              <Text numberOfLines={1} style={styles.title} ellipsizeMode='tail'>{this.props.shopName}</Text>
              <Image source={require('../../image/common/a.png')} style={styles.arrow}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        height: 31,
        marginTop:10,
    },
    shopImage: {
        marginLeft:8,
        width: 20,
        height: 20,
        resizeMode:'contain'
    },
    select: {
        marginLeft:10,
        width: 20,
        height: 20,
        resizeMode:'contain'

    },
    title: {
      fontSize:16,
      fontWeight:'bold',
      marginLeft:8,
    },
    arrow: {
        marginLeft:10,
        width: 15,
        height: 15,
        resizeMode:'contain'
    },

});
