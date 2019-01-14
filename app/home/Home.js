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
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import CommonHead from '../components/commonHead';
import Recommend from './recommend';
import Otherpage from './otherpage';

const { width, height } = Dimensions.get('window');

export default class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabShow: false,
            label: ['美食', '服饰', '美妆', '母婴', '儿童', '洗护', '配饰', '美食', '美妆', '电器', '居家'],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tabShow: true
            });
        }, 0)
    }

    renderLeftItem() {
        return (
            // <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={styles.navLeft}>
            <TouchableOpacity onPress={() => { }} style={styles.navLeft}>
                <Image source={require('../../image/img/img6.png')} style={styles.navIcon} />
                <Text style={styles.navText}>扫一扫</Text>
            </TouchableOpacity>
        )
    }

    renderTitleItem() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }}>
                <View style={styles.searchBox}>
                    <Image source={require('../../image/img/img9.png')} style={styles.searchIcon} />
                    <Text style={styles.searchContent}>搜索商品, 共10161款好物</Text>
                </View>
            </TouchableOpacity>
        )
    }
    // 头部右侧
    renderRightItem() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('MessageCenter') }} style={styles.navRight}>
                <Image source={require('../../image/img/img1.png')} style={styles.navIcon} />
                <Text style={styles.navText}>消息</Text>
            </TouchableOpacity>
        )
    }

    // 滑动tab
    renderScrollableTab() {
        let label = this.state.label
        if (this.state.tabShow){
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
                            if (item == '美食') {
                                return (
                                    <ScrollView tabLabel={item} key={index}>
                                        <Recommend/>
                                    </ScrollView>
                                )
                            } else {
                                return (
                                    <Otherpage tabLabel={item} key={index} />
                                )
                            }
                        })
                    }
                </ScrollableTabView>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonHead
                    leftItem={() => this.renderLeftItem()}
                    titleItem={() => this.renderTitleItem()}
                    rightItem={() => this.renderRightItem()}
                />
                <View style={{ flex: 1 }}>
                    {this.renderScrollableTab()}
                </View>
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
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 30,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    searchContent: {
        color: '#666',
        fontSize: 14,
    },
    tabBarUnderline: {
        backgroundColor: '#b4282d',
        height: 2,
        width:width/8,
        marginLeft:6
    }
});
