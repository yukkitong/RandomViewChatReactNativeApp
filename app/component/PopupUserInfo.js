import React, {Component} from 'react';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class PopupUserInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.popBox}>
                    <View style={styles.buttonArea}>
                        <View style={{flex: 1}}>
                            <View style={styles.buttonLeft}>
                                <Icon name='mail' size={20} color='yellow' />
                            </View>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <View style={styles.buttonRight}>
                                <Icon2 name='user-plus' size={20} color='yellow' />
                            </View>
                        </View>
                    </View>
                    <View style={styles.avatarArea}>
                        <View style={{backgroundColor: 'gray', width:160, height: 160, borderRadius: 80, alignItems: 'center', justifyContent: 'center'}}>
                            <Avatar
                                xlarge
                                rounded
                                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                            />
                        </View>
                    </View>
                    <View style={styles.nickNameArea}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#F35E00'}}>vampireAhn</Text>
                    </View>
                    <View style={styles.countryArea}>
                        <Image source={require('../imgs/korea.jpg')} style={{width: 30, height: 20}}/>
                        <Text style={styles.countryAreaText}>Korea</Text>
                        <Icon2 name='user' size={20} color='#EF6856'/>
                        <Text style={styles.countryAreaText}>20세</Text>
                    </View>
                    <View style={styles.statusButtonArea}>
                        <View style={styles.statusButtonLeft}>
                            <Icon3 name='cancel' size={30} color='#949494'/>
                        </View>
                        <View style={styles.statusButtonRight}>
                            <Icon2 name='check-circle' size={30} color='#4D2E1D'/>
                        </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    popBox: {
        width: 350,
        height: 300,
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonLeft: {
        backgroundColor: '#3C1E1E',
        borderRadius:50,
        width: 60,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    buttonRight: {
        backgroundColor: '#3C1E1E',
        borderRadius:50,
        width: 60,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    avatarArea: {
        flex: 5,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nickNameArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countryArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    countryAreaText: {
        marginLeft: 5,
        marginRight: 5
    },
    statusButtonArea: {
        flex: 1.3,
        flexDirection: 'row',
    },
    statusButtonLeft: {
        flex: 1,
        width: '50%',
        backgroundColor: '#D4D4D4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusButtonRight: {
        flex: 1,
        width: '50%',
        backgroundColor: '#FCE503',
        justifyContent: 'center',
        alignItems: 'center'
    }
});