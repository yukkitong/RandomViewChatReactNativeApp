/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = { email: '', password: '' };
  }

  componentDidMount() {
    this.setState({
      email: 'jason98.bae@gmail.com',
      password: 'sung1761'
    });
  }

  handleSignIn() {
    let email = this.state.email;
    let password = this.state.password;
    
    fetch('http://192.168.219.106:3333/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then(response => response.json())
    .then(response => {
      Alert.alert(response.token);
      console.log(response.token);
    })
    .catch(error => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signinWrapper}>
          <Text style={styles.signin}>
            SIGN-IN
          </Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput 
            style={styles.email} 
            placeholder="Input email"
            keyboardType="email-address"
            returnKeyType="next"
            selectTextOnFocus={true}
            ref={component => this.email = component}
            onChangeText={email => this.setState({ email })}
            value={this.state.email} />
          <TextInput 
            style={styles.password} 
            placeholder="Input password"
            secureTextEntry={true}
            selectTextOnFocus={true}
            returnKeyType="done"
            ref={component => this.password = component}
            onChangeText={password => this.setState({ password })}
            value={this.state.password} />
          <TouchableOpacity 
            onPress={this.handleSignIn}
            activeOpacity={0.8}>
            <Text style={styles.goButton}>GO</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>
          Copyright (c) 2018
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  signinWrapper: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  signin: {
    fontSize: 24,
    height: 30,
    textAlign: 'center',
    margin: 10,
    color: '#333',
  },
  inputArea: {
    flex: 2,
    marginTop: 20,
    padding: 20,
    justifyContent: 'center',
  },
  email: {
    fontSize: 18,
  },
  password: {
    marginTop: 20,
    fontSize: 18,
  },
  goButton: {
    backgroundColor: '#2c3e50',
    color:'white', 
    padding: 14, 
    fontSize: 20, 
    textAlign: 'center',
  },
  copyright: {
    marginBottom: 10,
    fontSize: 12, 
    color: '#555',
    textAlign: 'center',
  }
});
