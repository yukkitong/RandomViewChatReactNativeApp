import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AvatarInfo from "./AvartarInfo";



export default class Header extends Component<{}> {
    render() {
        return (
            <View>
                {/*Avatar*/}
                <AvatarInfo/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});