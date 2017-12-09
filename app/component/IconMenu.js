import React, {Component} from 'react';
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Feather'

import {
    Platform,
    StyleSheet,
    View
} from 'react-native';

export default class IconMenu extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon1 name="video-camera" size={33}/>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon1 name="news" size={33}/>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon2 name="mail" size={33}/>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon2 name="shopping-cart" size={33}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginRight: 8
    }
});