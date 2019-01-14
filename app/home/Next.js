/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, TouchableOpacity, Image, ListView, Dimensions} from 'react-native';
import Cell from '../GDHotCell';
const {width, height} = Dimensions.get('window');

type Props = {};
export default class NextPage extends Component<Props> {
  static navigationOptions = {
      title: 'Next-navigation'
    }
  constructor(props) {
          super(props);
          this.state = {
              dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
          };
          this.fetchData = this.fetchData.bind(this);
      }

      fetchData() {
          fetch('http://guangdiu.com/api/gethots.php')
              .then((response) => response.json())
              .then((responseData) => {
                  this.setState({
                          dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                      }
                  );
              }).done();
      };

      renderRow(rowData) {
          return (
              <Cell
                  image={rowData.image}
                  title={rowData.title}
              />
          );
      };

      componentDidMount() {
          this.fetchData();
      };

      render() {
          return (
              <View style={styles.container}>
                  <ListView
                      dataSource={this.state.dataSource}//加载数据
                      renderRow={this.renderRow}
                      showHorizontalScrollIndicator={false}
                      style={styles.listviewStyle}/>
              </View>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
      },
      listviewStyle: {
          width: width
      }
  });
