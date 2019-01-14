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
        NavigatorIOS,
        FlatList,
        TouchableOpacity,
        TouchableHighlight
        } from 'react-native';
import CatTitleCell from './CatTitleCell';
import Cell from './GDHotCell';

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
    this.state = {
      error: false,
      page: 1,
      refreshing: false,
      loading: false,
      data: {},
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    // let data=require('../data/list.json');
    // this.setState({
    //   data: [...this.state.data, ...data.list],
    // });
  }

  fetchData() {
    // fetch('http://guangdiu.com/api/gethots.php')
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //       Console(responseData.data);
    //       this.setState({
    //         data: [...this.state.data, ...responseData.data],
    //       });
    //     }).done();
    let data=require('../data/list.json');
    this.setState({
      data: [...this.state.data, ...data.list],
    });
      // fetch('http://guangdiu.com/api/gethots.php').then(response => {
      //   return response.json()
      //   }).then(responseData => {
      //     this.setState({
      //       data: [...this.state.data, ...responseData.data],
      //     });
      //   }).catch(error => {
      //     this.setState({ error: error, loading: false, refreshing: false});
      //   });
  };

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
 _renderItem(item){
     return (
         // <TouchableHighlight
         //     style = {{backgroundColor: '#333'}}
         //     activeOpacity = {0.5}  //触摸激活时的不透明度
         //     onHindUnderlay = {() => {}}  //底层颜色被隐藏时调用
         //     onShowUnderlay = {() => {}}  //底层颜色显示的时候调用
         //     underlayColor = {'red'}     //触摸操作底层的颜色
         //     onPress = {() => {}}    //可以绑定事件
         // >
             // <View style = {{backgroundColor: 'blue',flex:1}}><Text>{item.title}</Text></View>
             <Cell style = {{backgroundColor: 'blue',flex:1}}
                 image={item.image}
                 title={item.title}
             />
         // </TouchableHighlight>
     )
 }

 render() {
   return (
     <View style={styles.container}>
      <Text>Category page!!!!</Text>
      <View  style={styles.listV}>
      <FlatList
       data={[{key: '服饰'}, {key: '美妆'}, {key: '母婴'}, {key: '儿童'},
       {key: '内衣'}, {key: '居家'}, {key: '配饰'}, {key: '男装'},
       {key: '美食'}, {key: '鞋品'}, {key: '数码'}, {key: '家电'}, {key: '箱包'}]}
       renderItem={({item}) => <Text style={styles.LeftCellStyle}>{item.key}</Text>}
      // ref = 'flatList'  // this.refs.flatList 获取到该组件
      // data = {[{
      //   "id":"3411",
      //   "image":"./images/timg.png",
      //   "title":"大大"
      // },
      // {
      //   "id":"1502",
      //   "image":"./images/timg.png",
      //   "title":"汤圆的小店"
      // },
      // {
      //   "id":"1530",
      //   "image":"./images/timg.png",
      //   "title":"哈哈哈哈"
      // }]}// 列表的数据源, 数组
      // extraData = {this.state}//引用类型，数据可能不会更新，只是复制，没有操作引用的对象
      // ListHeaderComponent = {this._listHeaderComponent.bind(this)}//渲染头部组件
      // ListEmptyComponent = {this._listEmptyComponent.bind(this)} //列表为空时渲染
      // initialNumToRender = {6}
      // renderItem = {this._renderItem.bind(this)} //渲染列表数据
      // keyExtractor= {(item, index) => item.id}//每行不一样的key
      // ItemSeparaterComponent = {() => <View style={{height:6}} /> }//行分隔线，首行前和尾行后无分隔
      // columnWrapperStyle = {{borderWidth: 2}}  //行数>1时，可额外设置行样式
      // showsVerticalScrollIndicator = {false} //继承ScrollView的属性，显示水平指示器默认是true
      // horizontal = {false} //默认true是垂直布局
      // numColumns = {3}  // 水平布局的item数量
      // ListFooterComponent = {this._listFooterComponent.bind(this)} //渲染底部组件
      // refreshing = {true} // 等待加载出现加载的符号
      // onRefresh = {this._onRefresh.bind(this)} //上拉刷新
      // onEndReachedThreshold = {0.1} //当距离内容比例不足内容0.1比例时触发onEndReached
      // onEndReached = {this._endReached.bind(this)} //上拉加载数据
      />
      </View>
     </View>
   );
 }

  renderCell(cellData){
    return <TouchableOpacity onPress={()=>this.pressRow(cellData)}>
            <View>
             <View>
              <Image style={styles.thumbnail} source={{uri:cellData.pic}}/>
              <View style={styles.itemCellView}>
               <Text numberOfLines={1} style={styles.title}>{cellData.title}</Text>
               <Text numberOfLines={1}>产品编号:{cellData.id}</Text>
              </View>
             </View>
            </View>
           </TouchableOpacity>
  }

  pressRow(data){
    alert("点击了:"+data.id);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop:100,
  },
  listV: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  LeftCellStyle: {
    flex: 1,
    backgroundColor: 'white',
    width:60,
    height:40,
    textAlign:'center',
    alignItems:'center',
  },
});
