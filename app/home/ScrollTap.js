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
    SectionList
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import {ifIphoneX} from '../common/AdapterPhone';
import CateButtonCell from '../cell/CateButton';

import Recommend from './recommend';
import Otherpage from './otherpage';


const { width, height } = Dimensions.get('window');
export default class scrollTap extends Component {

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
                                    <Recommend/>
                                </ScrollView>
                            )
                        } else {
                            return (
                                <Otherpage tabLabel={item.title} key={index} />
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
