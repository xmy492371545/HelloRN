import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types'

import {ifIphoneX} from '../common/AdapterPhone';
import CateList from './CateList';


const { width, height } = Dimensions.get('window');
export default class scrollTap extends Component {
  static propTypes={
    nav:PropTypes.object
  }
    constructor(props) {
        super(props);
        let dataAry=require('../../data/cate.json');
        this.state = {
            label: dataAry.list,
        };
    }

    // 滑动tab
    renderScrollableTab() {
        let label = this.state.label
        return (
            <ScrollableTabView
                style={{paddingTop: 8}}
                renderTabBar={() =>
                    <ScrollableTabBar
                        style={{height:35}}
                        tabStyle={{height:34,paddingLeft: 15,paddingRight: 15,}}
                    />
                }
                tabBarBackgroundColor='#fff'
                tabBarActiveTextColor='#b4282d'
                tabBarInactiveTextColor='#333'
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
                {
                    label.map((item, index) => {
                        if (item.title == '美食') {
                            return (
                                <ScrollView tabLabel={item.title} key={index}>
                                    <CateList nav={this.props.nav}/>
                                </ScrollView>
                            )
                        } else {
                            return (
                                <Text tabLabel={item.title} key={index}>Other</Text>
                            )
                        }
                    })
                }
            </ScrollableTabView>
        )
    }

    render() {

        return (
          <View style={styles.container}>
            {this.renderScrollableTab()}
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    tabBarUnderline: {
        backgroundColor: '#b4282d',
        height: 2,
        width:width/8,
        marginLeft:6
    }
});
