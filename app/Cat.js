/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, ListView} from 'react-native';

type Props = {};
export default class CatePage extends Component<Props> {
  constructor(props){
    super(props);
    var ds=new ListView.DataSource({
      rowHasChanged:(r1,r2)=>{r1!=r2;}
    })
    this.state={
      dataSource:ds,
    }
  }
  componentWillMount(){
    let data=require('./data/list.json');
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(data.list),
    })
  }

  render() {
    return (
      <View style={styles.viewStyle}>
       <Text>Category page!!!!</Text>
       <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderCell.bind(this)}
         />
        </View>
      </View>
    );
  }

  renderCell(cellData){
    return <TouchableOpacity onPress={()=>this.pressRow(cellData)}>
            <View>
             <View>
              <Image style={{styles.thumbnail}}
                     source={{uri:cellData.pic}}
              />
              <View style={{styles.itemCellView}}>
               <Text numberOfLines={1} style={{styles.title}}>{cellData.title}</Text>
               <Text numberOfLines={1}>产品编号:{cellData.id}</Text>
              </View>
             </View>
            </View>
           </TouchableOpacity>;
  }

  pressRow(data){
    alert("点击了:"+data.id);
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
  thumbnail: {
    width: 80,
    height: 60,
    borderWidth: 1,
    borderColor:'orange',
  },
  itemCellView: {
    flex: 1,
    marginLeft: 10,
    backgroundColor:'#FFFFFF',
  },
  title: {
    fontSize: 18,
    color: '#999999',
    marginBottom: 8,
    textAlign: 'left',
  },
  textStyle:{
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  }
});
