/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, Alert, View, Modal, TouchableOpacity, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');
const Dialog_Height=110;
type Props = {};
export default class ShareAlertDialog extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params.title;
    return {
      headerTitle:title,
    }
  }
  static propTypes = {
    show:PropTypes.bool,
  };

      constructor(props) {
          super(props);
          this.state = {
              isVisible: this.props.show,
          };
      }

      componentWillReceiveProps(nextProps){
        this.setState({
          isVisible:nextProps.show
          })
      }

      closeModal(){
        this.setState({
          isVisible:false
          });
          // this.props.closeModal(false);
      }

      renderDialog(){
        return (
          <View style={styles.modalStyle}>
            <Text style={styles.text}>选择分享方式</Text>
            <View style={{flex:1, flexDirection: 'row', marginTop:15}}>
              <TouchableOpacity style={styles.item} activeOpacity={1} onPress={()=>Alert.alert('分享到微信朋友圈')}>
                <Image style={styles.image} source={require('../../image/common/wxf.png')} />
                <Text>朋友圈</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} activeOpacity={1} onPress={()=>Alert.alert('分享到微信好友')}>
                <Image style={styles.image} source={require('../../image/common/wx.png')} />
                <Text>微信好友</Text>
              </TouchableOpacity>
            </View>
          </View>
          )
      }


      render() {
          return (
                <Modal transparent={true}
                       visible={this.state.isVisible}
                       animationType='slide'
                       onRequestClose = {() => this.closeModal()}
                       >
                       <View style={{flex:1, marginTop: 0, backgroundColor: 'rgba(1, 0, 0, 0.4)', justifyContent: 'center', alignItems: 'center'}}>
                       <TouchableOpacity style={styles.container} activeOpacity={1} onPress={()=>this.closeModal()}>
                         {this.renderDialog()}
                       </TouchableOpacity>
                       </View>
                </Modal>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
      },
      modalStyle: {
        marginTop:height-170,
        width: width,
        height:Dialog_Height,
        backgroundColor:'#ffffff',
      },
      text:{
        flex:1,
        fontSize:18,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
      },
      item:{
        width:width/2,
        height:100,
        alignItems:'center',
        backgroundColor:'#ffffff',
      },
      image:{
        width:60,
        height:60,
        marginBottom:8
      }
  });
