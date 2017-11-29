import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { 
  Header, 
  Avatar, 
  Button, 
  CheckBox,
} from 'react-native-elements';


export default class AvatarWrapper extends Component {

  state = { checked: true };

  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange() {

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Header
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff'} }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC', alignSelf:'stretch' }}
          innerContainerStyles={{ justifyContent: 'space-around',}}
        />
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
        <View style={{ 
          flex: 1, 
          justifyContent: 'flex-start', 
          width: 200, 
          alignItems: 'center' 
        }}>
          {/* <Button title='BUTTON' /> */}
          <Button buttonStyle={{ borderRadius: 10, padding: 20, }}
            containerViewStyle={{ borderRadius: 10, alignSelf: 'center' }}
            raised
            icon={{ name: 'cached' }}
            title='BUTTON WITH ICON' />
          {/* <CheckBox
            center
            title='Click Here to Remove This Item'
            iconRight
            iconType='material'
            checkedIcon='clear'
            uncheckedIcon='add'
            checkedColor='red'
            checked={this.state.checked} />*/}
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
  avatar: {
  }
});