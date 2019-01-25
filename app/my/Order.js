/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Text, View, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import {Gray_Color} from '../common/Common'

import CarHeadCell from '../cell/CarHeadCell';
import OrderListCell from '../cell/OrderCell';
import OrderBottomCell from '../cell/OrderBottomCell';

type Props = {};
const {width, height} = Dimensions.get('window');

export default class OrderPage extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params.title;
    return {
      headerTitle:title,
    }
  }
  constructor(props){
    super(props);
    let dataAry=require('../../data/carList.json');
    // var totalPrice = 0;
    // var totalNumber = 0;
    this.state={
      dataSource:dataAry.list,
    }
  }
  goToDetail(item){
    this.props.navigation.navigate('Detail',{title:item.title});
  }

  goToComment(){
    Alert.alert('评价功能尚未开通');
  }

  renderItem = ({ item }) => {
    let proList = item.proList;
    let shopSelected = item.selected;

    return (
      <View style={styles.cellViewStyle}>
        <TouchableOpacity>
          <CarHeadCell style={styles.headStyle}
                       isSelectVisible={false}
                       shopName={item.shopName}
                       shopImage={item.shopImage}
                       shopId={item.id} />
        </TouchableOpacity>
          {
              proList.map((proItem, index) => {
                  return (
                    <OrderListCell
                        style={styles.cellStyle}
                        key={index.toString()}
                        id={proItem.id}
                        title={proItem.title}
                        image={proItem.uri}
                        price={proItem.price}
                        number={proItem.number.toString()}
                        cellHandler={()=>this.goToDetail(proItem)}
                    />
                    )
                }
              )
          }
          <OrderBottomCell
                price={item.price.toString()}
                number={item.number.toString()}
                buttonHandler={()=>this.goToComment()}
            />
      </View>
       )
    }
  render() {

    return (
      <View style={{flex:1,backgroundColor:Gray_Color}}>
       <FlatList showsVerticalScrollIndicator={false}
         data={this.state.dataSource}
         renderItem={this.renderItem}
         keyExtractor={(item,index)=>index.toString()}
       />
       </View>
    );
  }
}

const styles = StyleSheet.create({

  cellViewStyle:{
    backgroundColor: 'white',
    borderRadius:10,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:10,
  },
  headStyle:{
    width:width,
    height:40,
    marginTop:20,
  },
  cellStyle:{
    width:width,
    height:240,
    marginTop:10,
  }
});
