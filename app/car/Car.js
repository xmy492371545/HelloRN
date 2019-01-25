/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, ImageBackground, View, Alert, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {ifIphoneX} from '../common/AdapterPhone';

import CarListCell from '../cell/CarListCell';
import CarHeadCell from '../cell/CarHeadCell';
import {Gray_Color} from '../common/Common'


type Props = {};
const { width, height } = Dimensions.get('window');
export default class CarPageApp extends Component<Props> {

  constructor(props){
    super(props);
    let dataAry=require('../../data/carList.json');

    this.state={
      dataSource:dataAry.list,
    }
  }
  goToDetail(item){
    this.props.navigation.navigate('Detail',{title:item.title});
  }
  renderItem = ({ item }) => {
    let proList = item.proList;
    let shopSelected = item.selected;

    return (
      <View style={styles.cellViewStyle}>
        <TouchableOpacity>
          <CarHeadCell style={styles.headStyle}
                       isSelectVisible={true}
                       selectHandle={()=>{item.selected=!item.selected}}
                       selected={item.selected}
                       shopName={item.shopName}
                       shopImage={item.shopImage}
                       shopId={item.id} />
        </TouchableOpacity>
          {
              proList.map((proItem, index) => (
                  <CarListCell
                      style={styles.cellStyle}
                      key={index.toString()}
                      id={proItem.id}
                      selectHandle={()=>{proItem.selected=!proItem.selected}}
                      shopSelected={item.selected}
                      selected={proItem.selected}
                      title={proItem.title}
                      image={proItem.uri}
                      price={proItem.price}
                      number={proItem.number.toString()}
                      cellHandler={()=>this.goToDetail(proItem)}
                  />
              ))
          }
      </View>
       )
    }

  render() {
    return (
      <ImageBackground
                style={{ flex: 1 }}
                source={require('../../image/home/bg.png')}>
          <View style={styles.container}>
            <View style={styles.listBgView}>
              <View style={{height:60}}>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>购物车</Text>
                <Text style={{color:'white',fontSize:12,fontWeight:'bold',marginTop:10}}>共22件宝贝</Text>
              </View>
              <FlatList showsVerticalScrollIndicator={false}
                style={styles.list}
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
              />
            </View>
          </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Gray_Color,
    ...ifIphoneX({
        marginTop: 152,
    }, {
        marginTop: 84,
    })
  },
  listBgView:{
    ...ifIphoneX({
        marginTop: -108,
        marginBottom:64,
    }, {
        marginTop: -64,
        marginBottom:64,
    }),
    marginLeft:10,
    marginRight:10,
    width:width-20,
  },
  list:{

  },
  cellViewStyle:{
    backgroundColor: 'white',
    borderRadius:10,
    marginTop:10,
  },
  headStyle: {
    width:width,
    height:40,
    marginTop:20,
  },
  cellStyle:{
    width:width,
    height:200,
    backgroundColor: 'yellow',
  },
  viewStyle: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 100,
    backgroundColor:'green',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
