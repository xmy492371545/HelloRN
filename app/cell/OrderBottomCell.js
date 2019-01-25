import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image,
    ImageBackground,
    TouchableOpacity,
    Button
} from 'react-native';
import PropTypes from 'prop-types'
import {Gray_Color} from '../common/Common'

const {width, height} = Dimensions.get('window');

export default class OrderBottomCell extends Component {

    static propTypes = {
        price: PropTypes.string,
        number: PropTypes.string,
        buttonHandler:PropTypes.func,
    };
    renderOther(){
      return (
      <View style={{flex:1}}>
        <View style={{marginLeft:10,flexDirection:'row',marginTop:8,}}>
          <Text numberOfLines={1} style={{width:60,textAlign:'right',marginLeft:10}}>运费险</Text>
          <Text numberOfLines={1} style={{flex:1,color:'gray',marginLeft:10,marginRight:10}}>确认收获前退货可理赔</Text>
          <Text numberOfLines={1} style={{color:'tomato',textAlign:'right',marginLeft:10,marginRight:10}}>已失效</Text>
        </View>
        <View style={{flex:1,marginLeft:10,marginRight:10,marginTop:8,backgroundColor:Gray_Color,height:1}}>
        </View>
        <View style={{marginLeft:10,flexDirection:'row',marginTop:8}}>
          <Text numberOfLines={1} style={{textAlign:'right',width:60,marginLeft:10}}>保险服务</Text>
          <Text numberOfLines={1} style={{flex:1,color:'gray',marginLeft:10,marginRight:10}}>专享定制化购物保障</Text>
          <Text numberOfLines={1} style={{width:40,textAlign:'right',marginLeft:10}}>¥0.00 </Text>
          <Text numberOfLines={1} style={{textAlign:'right',marginLeft:4,marginRight:10}}>x1</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:8}}>
            <Text numberOfLines={1} style={{flex:1,textAlign:'right',marginLeft:10,marginRight:10}}>共计件商品</Text>
            <Text numberOfLines={1} style={{width:60,textAlign:'right',marginLeft:10}}>合计:¥</Text>
            <Text numberOfLines={1} style={{textAlign:'right',marginLeft:4,marginRight:10}}>{this.props.number*this.props.price}</Text>
          </View>
          <TouchableOpacity onPress={this.props.buttonHandler}>
          <View style={{flex:1,marginTop:8,flexDirection:'row',justifyContent:'flex-end'}}>
            <View style={{backgroundColor:'white',marginRight:10,borderWidth:0.5,borderColor:'gray',borderRadius:40,justifyContent: 'center', marginTop:8}}>
              <Text numberOfLines={1} style={{color:'gray',marginTop:6,marginBottom:6,marginLeft:10,marginRight:10}}>评价</Text>
            </View>
          </View>
          </TouchableOpacity>
      </View>
      )
    }

    render() {
        return (
        <View style={{flex:1, marginTop:10}}>
            {this.renderOther()}
        </View>
        );
    }
}
