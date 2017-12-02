import React, {Component} from 'react';
import {Avatar} from 'react-native-elements';
import {
    Platform,
    StyleSheet,
    Text,
    View ,
} from 'react-native';

export default class Header extends Component<{}> {
    render() {
        return (
            <View>
                {/*Avatar*/}
                <View style={styles.avatarArea}>
                    <Avatar
                        medium
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    />
                    <View>

                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatarArea: {
        left: 10,
        top: 5
    },
    country: {

    }
});