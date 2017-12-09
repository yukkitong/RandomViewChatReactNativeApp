import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons'

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class UserInfo extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textArea}>
                        vampireAhn
                    </Text>
                    <View style={styles.userInfo}>
                        <Icon name="heart" color="red" size={20} />
                        <Text>
                            100
                        </Text>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textArea: {
        marginTop: 3
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});