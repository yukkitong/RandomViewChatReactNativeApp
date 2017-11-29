import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default class AvatarWrapper extends Component {

  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange() {

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
})