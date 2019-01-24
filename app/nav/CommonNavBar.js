/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component,PropTypes} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';

import { ifIphoneX } from '../common/AdapterPhone';

const NAV_BARHEIGHT_IOS = 44;
const STATUSBARHEIGHT = 20;

const ButtonShape = {
  title:PropTypes.string.isRequired,
  style:PropTypes.any,
  handler:PropTypes.func,
}
const StatusBarShape = {
  barStyle:PropTypes.oneOf(['light-content','default']),
  networkActivityIndicatorVisible:PropTypes.bool,
  showHideTransition:PropTypes.oneOf(['fade','slide']),
  hidden:PropTypes.bool,
  translucent:PropTypes.bool,
  backgroundColor:PropTypes.bool,
  backgroundColor:PropTypes.string,
  animated:PropTypes.bool
}
type Props = {};
export default class CommonNavBar extends Component<Props> {
  static propTypes = {
      style: View.propTypes.style,
      titleLayoutStyle: View.propTypes.style,
      navigator: PropTypes.object,
      leftButtonTitle:PropTypes.string,
      popEnabled:PropTypes.bool,
      onLeftButtonClick:PropTypes.func,
      titleColor:PropTypes.string || 'white',
      title:PropTypes.string,
      titleView:PropTypes.element,
      hide:PropTypes.bool,
      statusBar:PropTypes.shape(StatusBarShape),
      rightButton:PropTypes.oneOfType([
        PropTypes.shape(ButtonShape),
        PropTypes.element,
        ]),
      leftbutton:PropTypes.oneOfType([
        PropTypes.shape(ButtonShape),
        PropTypes.element,
        ]),
  }

  static defaultprops = {
    statusBar:{
      barStyle:'default',
      hidden:false,
      translucent:false,
      animated:false,
    }
  }

  constructor(props){
    super(props);
    this.state={
      title:'',
      popEnabled:true,
      hide:false,
    }
  }

  getButtonElement(data={}, style){
    return (
      <View style={styles.navBarButton}>
      {
        (!!data.props) ? data : (
          <NavBarButton
               title={data.title}
               style={[data.style,style,]}
               tintColor={data.tintColor}
               handler={data.handle}
          />
          )
      }
      </View>
      )
  }

  render() {
    // let statusBar=!this.props.statusBar.hidden?
    //     <View style={styles.statusBar}>
    //      <StatusBar {...this.props.statusBar}
    //         barStyle="light-content"
    //         styles={styles.statusBar}>
    //      </View> : null ;

    // let titleView = this.props.titleView ? this.props.titleView :
    //    <Text style={[styles.title, {color:this.props.titleColor}]}
    //          ellipsizeMode="head"
    //          numberOfLines={1}
    //    >{this.props.title}</Text>;
    //
    //  let content = this.prop.hide ? null :
    //     <View style={styles.navBar}>
    //        {this.getButtonElement(this.props.leftbutton)}
    //        <View style={[styles.navBarTitleContainer,this.props.titleLayoutStyle]}>{titleView}</View>
    //        {this.getButtonElement(this.props.rightButton,{marginRight:8,})}
    //     </View>


    return (
      // <View style={[styles.container,this.props.style]}>
      // <View style={styles.statusBar}>
      //  <StatusBar {...this.props.statusBar}
      //     barStyle="light-content"
      //     styles={styles.statusBar}>
      //  </View>
      <View style={styles.container}>
     </View>
    );
  }
}

// class NavBarButton extends Component{
//   render(){
//     const {style, tintColor, margin, title, handler}=this.props;
//
//     return (
//       <TouchableOpacity style={styles.navBarButton} onPress={handler}>
//         <View styles={style}>
//           <Text style={[styles.title,{color: tintColor},]}>{title}</Text>
//         </View>
//       </TouchableOpacity>
//       )
//   }
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06c1ae',
  },
  navBar: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    ...ifIphoneX({
        height: 88,
    }, {
        height: 64,
    })
  },
  navBarTitleContainer:{
    alignItems:'center',
    justifyContent:'center',
    postion:'absolute',
    left:40,
    top:0,
    rigth:40,
    bottom:0,
  },
  title:{
    fontSize:18,
  },
  navBarButton: {
    alignItems:'center',
  },
  statusBar:{
    ...ifIphoneX({
        height: 44,
    }, {
        height: 20,
    })
  }
});
