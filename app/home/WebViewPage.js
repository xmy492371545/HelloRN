import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    WebView,
    Dimensions,
    ScrollView,
} from 'react-native';

const WEBVIEW_REF='webview';
const { width, height } = Dimensions.get('window');

export default class WebViewPage extends Component {
  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params.title;
    return {
      headerTitle:title,
    }
  }
  constructor(props){
    super(props);
    this.state = {
      url:this.props.url,
      canGoBack:false,
      title:this.props.title,
      theme:this.props.theme
    }
  }

  onBackPress(e){
    if(this.state.canGoBack){
      this.refs[WEBVIEW_REF].goBack();
    }else {
      this.props.navigation.navigate.pop();
    }
  }

  onNavigationStateChange(navState){
    this.setState({
      canGoBack:navState.canGoBack,
      url:navState.url,
    })
  }


    render() {
let url='https://www.baidu.com';
        return (
            <View style={styles.container}>
            <WebView
      style={{width:width,height:height-20,backgroundColor:'gray'}}
      source={{uri:url,method: 'GET'}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      scalesPageToFit={false} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
