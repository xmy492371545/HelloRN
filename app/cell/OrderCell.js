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

export default class OrderListCell extends Component {

    static propTypes = {
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.string,
        number: PropTypes.string,
        cellHandler:PropTypes.func,
    };

    renderProDetail(){
      return (
        <View style={{flex:1, flexDirection: 'row', marginTop:8}}>
          <Image source={{uri: this.props.image}}style={styles.proImage}/>
          <View style={{flex:1,marginLeft:10}}>
            <Text numberOfLines={2} style={{flex:1,marginLeft:10,marginRight:10}}>{this.props.title}</Text>
            <Text numberOfLines={1} style={{color:'gray',marginLeft:10,marginRight:10}}>红色</Text>
            <View style={{flex:1, flexDirection: 'row', alignItems:'center', marginTop:8}}>
             <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginLeft:10,marginRight:10,height:20}}>
              <Text style={{color:'tomato',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>七天退换</Text>
             </View>
            </View>
          </View>
          <View style={{flex:1,marginRight:10}}>
            <Text numberOfLines={1} style={{color:'black',fontSize:12,textAlign:'right'}}>¥{this.props.price}</Text>
            <Text numberOfLines={1} style={{color:'gray',fontSize:10,textAlign:'right',marginTop:8}}>x{this.props.number}</Text>
          </View>
        </View>
      )
    }
    render() {
        return (
        <View style={{flex:1}}>
          <TouchableOpacity onPress={this.props.cellHandler}>
            {this.renderProDetail()}
          </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    proImage:{
      width: 60,
      height: 60,
      marginLeft:10,
      marginTop:2,
      borderWidth:1,
      borderColor:Gray_Color,
    }
});
