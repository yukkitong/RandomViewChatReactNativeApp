import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AvatarInfo from "./AvartarInfo";
import UserInfo from "./UserInfo";
import IconMenu from "./IconMenu";

export default class Header extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <AvatarInfo/>
                <UserInfo/>
                <IconMenu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderWidth: 1
    },
});