import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'

const {width, height} = Dimensions.get('window');

export default class ProductListCell extends Component {

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        handle:PropTypes.func,
    };

    render() {
        return (
          <TouchableOpacity style={styles.container} onPress={this.props.handle}>
            <View style={styles.container}>
                <Image source={{uri: this.props.image}} style={styles.icon}/>
                <View>
                    <Text numberOfLines={3} style={styles.txt}>{this.props.title}</Text>
                </View>
                <Image source={{uri: 'car_s'}} style={styles.arrow}/>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
        height: 100,
        borderTopWidth:0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CED0CE',
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'#CED0CE',
        backgroundColor:'#CED0CE',
        marginLeft:10,
    }
    ,
    arrow: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
    ,
    txt: {
        width: width * 0.6,
    }
    ,
});
