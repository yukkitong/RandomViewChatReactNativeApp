import React, {Component} from 'react';
import {Avatar} from 'react-native-elements';

import {
    Platform,
    StyleSheet,
    View
} from 'react-native';

export default class Avatar extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*Avatar*/}
                <View style={styles.avatarArea}>
                    <Avatar
                        medium
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    />
                    <View style={styles.countryArea}>
                        <Image source={require('../imgs/korea.jpg')} style={{width: 30, height: 20}}/>
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
        marginLeft: 10,
        marginTop: 5
    },
    countryArea: {
        position: 'absolute',
        top: 3,
        left: 32,
    }
});