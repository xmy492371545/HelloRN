/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, Alert, View, TabBarIOS, TouchableOpacity, Image, FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import ProductListCell from '../cell/ProductListCell';


const {width, height} = Dimensions.get('window');

type Props = {};
export default class NextPage extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params.title;
    return {
      headerTitle:title,
    }
  }

  constructor(props) {
          super(props);
          let data=require('../../data/commonList.json');
          this.state = {
              dataSource: data.list,
          };
      }

      goToDetail(item){
        this.props.navigation.navigate('Detail',{title:item.title});
      }

      renderItem = ({item})=> {
        console.log(item.title);
          return (
            <ProductListCell
                image={item.image}
                title={item.title}
                handle={()=>this.goToDetail(item)}
            />
          );

      };

      componentDidMount() {
      };

      // Flat分割线
      // ItemSeparatorComponent={this.renderSeparator}
      // renderSeparator(){
      //     return (
      //         <View
      //         style={{
      //         height: 1,
      //         width: "86%",
      //         backgroundColor: "#CED0CE",
      //         marginLeft: "14%"
      //         }}
      //         />
      //     );
      //   }

      render() {
          return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator= {false}
                    style={styles.listviewStyle}/>
            </View>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
      },
      listviewStyle: {
          width: width,
          borderColor:'red',
      }
  });
