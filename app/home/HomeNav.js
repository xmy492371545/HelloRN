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
    ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';

import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import CommonHead from '../components/commonHead';
import {ifIphoneX} from '../common/AdapterPhone';


const { width, height } = Dimensions.get('window');

export default class homeNav extends Component {
  static propTypes = {
    leftAction:PropTypes.func,
    searchAction:PropTypes.func,
    rightAction:PropTypes.func,
    cameraAction:PropTypes.func,
    cameraImage:PropTypes.object
  };
  constructor(props){
    super(props);
  }
    renderLeftItem() {
        return (
            <TouchableOpacity onPress={this.props.leftAction} style={styles.navLeft}>
                <Image source={require('../../image/home/ss.png')} style={styles.navIcon} />
                <Text style={styles.navText}>扫一扫</Text>
            </TouchableOpacity>
        )
    }

    renderTitleItem() {
        return (
            <TouchableOpacity onPress={this.props.searchAction}>
                <View style={styles.searchBox}>
                    <Image source={require('../../image/home/search.png')} style={styles.searchIcon} />
                    <Text style={styles.searchContent}>搜索</Text>
                    <TouchableOpacity onPress={this.props.cameraAction}>
                       <Image source={this.props.cameraImage} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    // 头部右侧
    renderRightItem() {
        return (
            <TouchableOpacity onPress={this.props.rightAction} style={styles.navRight}>
                <Image source={require('../../image/home/code.png')} style={styles.navIcon} />
                <Text style={styles.navText}>付款码</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
          <CommonHead
                    leftItem={() => this.renderLeftItem()}
                    titleItem={() => this.renderTitleItem()}
                    rightItem={() => this.renderRightItem()}
                />
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
    navLeft: {
        alignItems: 'center',
        marginLeft: 10,
    },
    navRight: {
        alignItems: 'center',
        marginRight: 10,
    },
    navIcon: {
        height: 20,
        width: 20,
    },
    navText: {
        fontSize: 10,
        color:'white'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 30,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginLeft: 6,
        marginRight: 6,
    },
    searchContent: {
        flex:1,
        color: '#666',
        fontSize: 14,
    },
    cameraIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    }
});
