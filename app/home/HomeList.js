import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    SectionList,
} from 'react-native';
import ScrollTap from './ScrollTap';

const { width, height } = Dimensions.get('window');
let products=require('../../data/section.json');
var dataSource=products.list;

export default class HomeList extends Component {

    constructor(props) {
        super(props);
        // let products=require('../../data/products.json');
        // // this.state = {
        // //   list:products.list
        // // };
    }

    renderItem = (item) => {
        return <Text style={styles.text}>{item.item.name}</Text>
    }

    renderHeader = (headerItem) => {
      // return <ScrollTap />
            return (
              // <View>
              <Text style={styles.header}>{headerItem.section.key}
              </Text>
              // <View><ScrollTap /></View>
              // </View>
            )
        }


    render() {
      return (
        <View style={styles.container}>
         <SectionList style={styles.container}
                      renderItem={this.renderItem}
                      renderSectionHeader={this.renderHeader}
                      sections={dataSource}
                      keyExtractor={(item)=>item.name}
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
    }
});
