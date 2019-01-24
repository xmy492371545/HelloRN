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
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'

const {width, height} = Dimensions.get('window');

const CarListShape = {
  shopName: PropTypes.string,
  shopImage: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  number: PropTypes.string,
  selected: PropTypes.bool,
  handler:PropTypes.func,
}

export default class CarListCell extends Component {

    static propTypes = {
        id: PropTypes.string,
        shopSelected:PropTypes.bool,
        selected:PropTypes.bool,
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.string,
        number: PropTypes.string,
        selected: PropTypes.bool,
        selectHandle:PropTypes.func,
        cellHandler:PropTypes.func,
    };
    constructor(props){
      super(props);
      let se=this.props.selected;
      if(this.props.shopSelected){
        se=true;
      }
      this.state={
        select:se
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
          <TouchableOpacity onPress={this.props.cellHandler}>
          <ImageBackground
                style={styles.proBg}
                source={require('../../image/common/cellBg.png')}>
                <Image source={{uri: this.props.image}}style={styles.proImage}/>
                <View style={{marginLeft:10}}>
                    <Text numberOfLines={2} style={styles.txt}>dewfwewqe   {this.props.title}</Text>
                    <Text numberOfLines={1} style={{color:'red'}}>¥{this.props.price}</Text>
                    <Text numberOfLines={1} style={{color:'black'}}>x{this.props.number}</Text>
                </View>
                <Image source={{uri: 'car_s'}} style={styles.arrow}/>
          </ImageBackground>
          </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width-20,
        height: 100,
        resizeMode:'contain',
        // borderTopWidth:0,
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#CED0CE',
    },
    proBg: {
        width: width-70,
        height: 80,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        resizeMode:'center',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        overflow:'hidden',
    },
    select: {
        marginLeft:10,
        width: 20,
        height: 20,
        // backgroundColor:'green'
        resizeMode:'contain'

    },
    proImage:{
      width: 40,
      height: 40,
      marginLeft:10,
      backgroundColor:'black'
    },
    arrow: {
        width: 30,
        height: 30,
        marginRight: 30,
    }
    ,
    txt: {
        width: width * 0.6,
    }
    ,
});
