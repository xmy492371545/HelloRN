import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Alert,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types'

const {width, height} = Dimensions.get('window');

export default class CateCell extends Component {

    static propTypes = {
      list:PropTypes.array,
      selectID:PropTypes.string,
      selectHandle:PropTypes.func,
    };

    constructor(props){
      super(props);
      this.state={
        selectID:this.props.selectID
      }
    }

    hand = (item)=>{
      let selectID = this.state.selectID;
      Alert.alert('fwdcfrewq' + selectID);
      this.setState({
        selectID:item.id
      })
    }
    renderHeaderItem = ({ item }) => {
      const selected=false;
      if(item.id==this.state.selectID){
        selected=true;
      }
      return (
        <TouchableOpacity onPress={this.hand}>
        <View style={selected?styles.selectView:styles.unselectView}>
          <Text style={selected?styles.selectTxtStyle:styles.unselectTxtStyle}>{item.title}</Text>
        </View>
        </TouchableOpacity>
      )
    }

    render() {
      Alert.alert('render' +this.state.selectID);

      return (
        <View style={styles.headerStyle}>
            <FlatList
                data={this.props.list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={()=>this.renderHeaderItem()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
      )
    }

}

const styles = StyleSheet.create({
    // container: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     width: width,
    //     height: 31,
    //     marginTop:10,
    // },
    headerStyle: {
        width: width,
        alignItems:'center',
        backgroundColor: 'red',
        height:35,
    },
    unselectView:{
      marginLeft:5,
      marginRight:5,
      // borderBottomWidth:1,
      // borderBottomColor: 'gray',
      width:70,
      height:35,
      // flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    selectView:{
      marginLeft:5,
      marginRight:5,
      borderBottomWidth:2,
      borderBottomColor: 'tomato',
      width:70,
      height:35,
      // flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    unselectTxtStyle:{
      // fontSize:18,
      // height:34,
      // textAlign:'center',
      color:'black',
      // backgroundColor:'green',
      // justifyContent:'center',
      // alignItems:'center'

    },
    selectTxtStyle:{
      // marginTop:5,
      // marginBottom:5,
      // paddingLeft: 15,
      // paddingRight:15,
      // width:60,
      // height:34,
      // textAlign:'center',
      color:'tomato'
    }

});
