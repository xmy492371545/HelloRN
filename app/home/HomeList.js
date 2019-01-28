import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    SectionList,
    FlatList,
    Alert
} from 'react-native';
import ScrollTap from './ScrollTap';
// import TopicCell from '../cell/TopicCell';
import {Gray_Color} from '../common/Common'
import CateCell from '../cell/CateCell'

const { width, height } = Dimensions.get('window');
let products=require('../../data/section.json');
var dataSource=products.list;
var selectid='0';
export default class HomeList extends Component {

    constructor(props) {
        super(props);
        let products=require('../../data/cate.json');
        this.state = {
          list:products.list,
          selectID:'0',
        };
    }

    componentDidMount(){
      if(this.state.list.length>0){
        const first=this.state.list[0];
        this.selectid=first.id;
        this.setState({
          selectID:first.id,
        });
        // Alert.alert('first '+first.id);
        // Alert.alert('333selectID2222 '+this.selectid);
      }
      // Alert.alert('selectID111 '+this.state.selectID);
    }

    // shouldComponentUpdate(nextProps,nextState){
    //         return (this.props.item != nextProps.item || this.props.isSelected != nextProps.isSelected);
    //     }

    // pressCate = (item) => {
    //   const select = item.isSelected;
    //   let index = this.state.list.indexOf(item);
    //   const newlist = this.state.list;
    //   newlist.forEach(item => item.isSelected = false);
    //   newlist[ index ].isSelected = !select;
    //   this.setState(Object.assign({}, this.state, {
    //         list: newlist
    //     }));
    // }

    renderItem = (item) => {
        return <Text style={styles.text}>{item.item.name}</Text>
    }

    selectHandle= ({item}) => {
      // this.selectid=item.id;
      // Alert.alert('title '+item.title);

      // this.setState({
      //   selectID:item.id,
      // });

      // this.forceUpdate();
    }


    renderHeaderItem = ({ item }) => {
      let selected=false;
      if(item.id==this.selectid){
        return (
          <TouchableOpacity onPress={()=>this.selectHandle(item)}>
           <View style={styles.selectView}>
             <Text style={styles.unselectTxtStyle}>{item.id}</Text>
             <Text style={styles.selectTxtStyle}>{item.title}</Text>
           </View>
           </TouchableOpacity>
        )
      }else {
        return (
          <TouchableOpacity onPress={()=>this.selectHandle(item)}>
           <View style={styles.unselectView}>
             <Text style={styles.unselectTxtStyle}>{item.id}</Text>
             <Text style={styles.unselectTxtStyle}>{item.title}</Text>
           </View>
           </TouchableOpacity>
        )
      }
    }
    renderHeader = ({item,index}) => {
      // Alert.alert('index=='+index);
      return (
          <View style={styles.headerStyle}>
              <FlatList
                  data={this.state.list}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderHeaderItem}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
              />
          </View>
      )
    }


    render() {
      return (
        <View style={styles.container}>
         <SectionList style={styles.container}
                      initialNumToRender={1}
                      renderItem={this.renderItem}
                      renderSectionHeader={this.renderHeader}
                      sections={dataSource}
                      keyExtractor={(item,index)=>index.toString()}
                  />
        </View>
      )
    }



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        marginTop:10,
    },
    header:{
      flex:1,
      backgroundColor:'green',
    },
    text:{
      backgroundColor:'yellow'
    },
    headerStyle: {
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        height:35
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
