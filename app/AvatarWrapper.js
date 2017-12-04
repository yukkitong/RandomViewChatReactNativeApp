import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { 
  Header, 
  Avatar, 
  Button, 
  CheckBox,
} from 'react-native-elements';

import ModalHeader from './component/ModalHeader'

const MyAvater = () => {
  return (
    <View style={{
      flex: 2,
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <Avatar
        xlarge
        rounded
        icon={{ name: 'user' }}
        source={{ 
          uri: 'http://image.ytn.co.kr/osen/2017/09/20170922_1506039163_43978600_1.jpg' 
        }}
        onPress={() => console.log('Works!')}
        activeOpacity={ 0.7 }
        imageProps={{ borderWidth: 1 }}
      />
    </View>
  )
}


export default class AvatarWrapper extends Component {

  state = { checked: true };

  constructor(props) {
    super(props);
    this.onShowPhotoBigger = this.onShowPhotoBigger.bind(this);
    this.onCaptureCamera = this.onCaptureCamera.bind(this);
  }

  onShowPhotoBigger() {

  }

  onCaptureCamera() {

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ModalHeader tabs={['TEST1', 'TEST2']}/>
        <MyAvater />
        <View style={{ 
          flex: 1, 
          justifyContent: 'flex-start', 
          width: 200, 
          alignItems: 'center' 
        }}>
          <Button buttonStyle={{ borderRadius: 10, padding: 20, }}
            containerViewStyle={{ borderRadius: 10, alignSelf: 'center' }}
            raised
            icon={{ name: 'home' }}
            title="BUTTON" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});