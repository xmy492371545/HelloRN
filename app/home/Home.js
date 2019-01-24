import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
    FlatList,
    Alert
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import {showImagePicker} from '../common/Camera'

import {ifIphoneX} from '../common/AdapterPhone';
import CateButtonCell from '../cell/CateButton';
import BannerCell from './Banner';
import HomeNav from './HomeNav';
import WebViewPage from './WebViewPage';
import HomeList from './HomeList';
import GridViewCell from '../cell/GridViewCell';


const { width, height } = Dimensions.get('window');

export default class HomePageApp extends Component {

  static navigationOptions = {
      header:null
    }

    constructor(props) {
        super(props);
        let dataAry=require('../../data/cate.json');
        let cate=require('../../data/nineArea.json');
        let products=require('../../data/gridData.json');

        this.state = {
            cate:cate.list,
            label: dataAry.list,
            gridDatas:products.list,
            avatarSource:require('../../image/home/camera.png'),
        };
    }

    componentDidMount() {
    }

    renderNineArea(){
      return (
        <View style={styles.nineArea}>
        <FlatList
            data={this.state.cate}
            keyExtractor={(item, index) => index}
            renderItem={this.renderNineItem}
            numColumns={5}
        />
        </View>

      )
    }
    pressCate(item){
      this.gotToNext(item.title)
    }

    pressAd(text){
      this.props.navigation.navigate('Web', {title:text});
    }

    renderNineItem = ({ item }) => {
      return(
        <CateButtonCell
            image={item.uri}
            title={item.title}
            id={item.id}
            handle={() => this.pressCate(item)}
        />
      )
    }
    renderActivity(){
      return (
        <View style={styles.activityView}>
        <TouchableOpacity onPress={()=>{this.gotToNext('活动')}}>
        <Image source={require('../../image/home/go.png')} style={styles.activityImg} />
        </TouchableOpacity>
        </View>
      )
    }
    goToDetail(item){
      this.props.navigation.navigate('Detail',{title:item.title});
    }
    renderGridView(){
      return (
        <View style={styles.gridView}>
        <FlatList
            data={this.state.gridDatas}
            keyExtractor={(item, index) => index}
            renderItem={this.renderGridViewCell}
            showsVerticalScrollIndicator={false}
            numColumns={2}
        />
        </View>
      )
    }

    renderGridViewCell = ({item}) => {
      return (
        <GridViewCell
            image={item.uri}
            title={item.title}
            dec={item.describe}
            handler={() => this.goToDetail(item)}
        />
      )
    }

    gotToNext(text){
      // const { navigate } = this.props.navigation;
      // navigate('Next');
      this.props.navigation.navigate('List', {title:text});
    }

    cameraAction(){
      // showImagePicker((source)=>{
      //   this.setState({
      //     avatarSource:source
      //   })
      // })
    }

    render() {
        return (
          <ImageBackground
                style={{ flex: 1 }}
                source={require('../../image/home/bg.png')}
          >
            <View style={styles.container}>
              <HomeNav
                   searchAction={()=>this.props.navigation.navigate('Search')}
                   cameraAction={()=>this.cameraAction()}
              />
              <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <BannerCell handler={()=>this.props.navigation.navigate('Web',{title:'Web'})}/>
                {this.renderActivity()}
                {this.renderNineArea()}
                {this.renderGridView()}
              </ScrollView>
            </View>
          </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        ...ifIphoneX({
            marginTop: 44,
        }, {
            marginTop: 20,
        })
    },
    activityView:{
      flex:1,
      width:width,
      height:60,
      alignItems:'center',
    },
    activityButton:{
      flex:1,
      marginLeft:20,
      width:width*0.4,
      height:60,
    },
    activityImg:{
      flex:1,
      width:width*0.4,
      resizeMode:'contain',
    },
    nineArea:{
      width: width-20,
      height: 240,
      marginTop:10,
      marginBottom:10,
      marginLeft:10,
      borderRadius:10,
      backgroundColor: 'white',
    },
    gridView:{
      width: width-20,
      height: 168,
      marginTop:10,
      marginBottom:10,
      marginLeft:10,
      borderRadius:10,
      backgroundColor: 'white',
    },
    bannerImg: {
        // flex:1,
        width: width,
        height: 200,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'red',
    },
});
