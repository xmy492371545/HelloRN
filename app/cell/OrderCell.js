import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image
} from 'react-native';
import PropTypes from 'prop-types'

const {width, height} = Dimensions.get('window');

export default class OrderCell extends Component {

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.image}} style={styles.icon}/>
                <View>
                    <Text numberOfLines={3} style={styles.txt}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        height: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginLeft: 15,
    },
    icon: {
        width: 70,
        height: 70,
    }
    ,
    arrow: {
        width: 10,
        height: 10,
        marginRight: 30,
    }
    ,
    txt: {
        width: width * 0.6,
    }
    ,
});
