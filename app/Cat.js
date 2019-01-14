/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        Image,
        ImageBackground,
        NavigatorIOS,
        FlatList,
        TouchableOpacity,
        TouchableHighlight
        } from 'react-native';
import CatTitleCell from './CatTitleCell';
import Cell from './GDHotCell';
import CateData from '../data/cate.json';

type Props = {};
export default class CatePage extends Component<Props> {
  render(){
    return <NavigatorIOS
         initialRoute={{
           component:CatePageApp,
           title:'分类',
         }}
         style={{flex: 1}}
    />;
  }

}
class CatePageApp extends Component<Props> {
  constructor(props){
    super(props);
    let dataAry=require('../data/cate.json');
    // dataAry=CateData.list;
    this.state = {
      error: false,
      page: 1,
      refreshing: false,
      loading: false,
      data: dataAry.list,
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
   // let data={[{key: '服饰'}, {key: '美妆'}, {key: '母婴'}, {key: '儿童'}, {key: '内衣'}, {key: '居家'}, {key: '配饰'}, {key: '男装'},
   //  {key: '美食'}, {key: '鞋品'}, {key: '数码'}, {key: '家电'}, {key: '箱包'}, {key: '类别1'}, {key: '类别2'}, {key: '类别3'}, {key: '类别4'}, {key: '类别5'}, {key: '类别6'}]};
   // this.setState({
   //   data: catedata.list,
   // });
  }


  _onRefresh(){
  let that=this;
  // 页面渲染之后在加载结束周期重新加载
  that.componentDidMount();
 }
 _endReached(){
     let that=this
     // 判断首屏满屏的情况
     if(that.state.data && that.state.length < parseInt(that.state.totalCount)){
         that.state.currentPage++;
     }else{
          //若总数未满一屏，进去就提示
          // alert('已加载完成')
     }
 }
 _listFooterComponent(){
   return (
       <View>
           <Text>列表底部的布局</Text>
       </View>
    )
 }
 _listHeaderComponent(){
   return (
     <View>
         <Text>也可以是一组图片的渲染</Text>
     </View>
 )
 }
 _listEmptyComponent(){
   return (
       <View>
           <Text>暂无数据</Text>
       </View>
   )
 }
 pressLeftCell(){

 }

 render() {
   return (
     <TouchableHighlight style={styles.container}
            underlayColor='brown'
            onPress={this.pressLeftCell}
               >
      <View  style={styles.container}>
      <FlatList
       data={this.state.data}
       // renderItem={this.renderCell.bind(this,this.state.data)}
       renderItem={({item})=><View style={styles.LeftCellStyle}>
                   <ImageBackground style={styles.LeftBackCellStyle} source={require('../image/tab/btn_s.png')}>
                    <Text style={{fontSize:14}}>{item.key}</Text>
                  </ImageBackground></View>}
      />
      </View>
      </TouchableHighlight>
   );
 }

  renderCell(item){
    return <View style={styles.LeftCellStyle}>
                <ImageBackground style={styles.LeftBackCellStyle} source={require('../image/tab/btn_s.png')}>
                 <Text style={{fontSize:14}}>{item.key}</Text>
               </ImageBackground></View>
  }

  pressRow(data){
    alert("点击了:"+data.id);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  LeftCellStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    width:60,
    height:40,
    alignItems:'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  LeftBackCellStyle: {
    backgroundColor: 'transparent',
    width:60,
    height:39.5,
    alignItems:'center',
    justifyContent: 'center',
  },
  LeftTouchStyle: {
    flex: 1,
    backgroundColor: 'red',
    width:60,
    height:40,
    alignItems:'center',
    justifyContent: 'center',
  },
  LeftIcon:{
    width:30,
    height:30,
  },
  CellLineStyle:{
    backgroundColor: 'gray',
    width:60,
    height:0.5,
    alignItems:'stretch',
    justifyContent: 'center',
  }
});
