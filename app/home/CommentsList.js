import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    ScrollView,
} from 'react-native';
import CommentCell from '../cell/CommentCell';

const { width, height } = Dimensions.get('window');
export default class CommentList extends Component {

  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params.title;
    return {
      headerTitle:title,
    }
  }

    constructor(props) {
        super(props);
        let products=require('../../data/comments.json');
        this.state = {
          list:products.list
        };
    }

    renderItem = ({item}) => {
        return <CommentCell
                    title={item.title}
                    image={item.uri}
                    products={item.pro}
                    detail={item.describe} />
    }

    render() {
      return (
        <ScrollView style={styles.container}>
        <View style={{flexWrap:'wrap',flex:1,flexDirection: 'row', alignItems: 'center',marginTop:8}}>
          <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginTop:8,marginLeft:10,marginRight:10,height:20}}>
            <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>质量不错</Text>
          </View>
          <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginTop:8,marginLeft:10,marginRight:10,height:20}}>
            <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>态度不错</Text>
          </View>
          <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginTop:8,marginLeft:10,marginRight:10,height:20}}>
            <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>包装很好</Text>
          </View>
          <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginTop:8,marginLeft:10,marginRight:10,height:20}}>
            <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>效果赞</Text>
          </View>
          <View style={{backgroundColor:'pink',borderRadius:40,justifyContent: 'center',marginTop:8,marginLeft:10,marginRight:10,height:20}}>
            <Text style={{color:'gray',fontSize:12,textAlign:'center',marginLeft:10,marginRight:10}}>体验很好</Text>
          </View>
        </View>
         <FlatList style={styles.container}
                      data={this.state.list}
                      renderItem={this.renderItem}
                      keyExtractor={(item,index)=>index.toString()}
                      showsVerticalScrollIndicator={false}
                  />
        </ScrollView>
      )
    }



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        marginTop:10,
    }
});
