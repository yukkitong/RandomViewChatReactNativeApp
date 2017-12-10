import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text,
  TextInput,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Input = ({email, password, onChangeEmail, onChangePassword, onSubmit}) => (
  <View style={{ flex: 2, justifyContent: 'center' }}>
    <TextInput 
      placeholder="Email" 
      value={email} 
      keyboardType="email-address"
      returnKeyType="next"
      onChangeText={onChangeEmail} />
    <TextInput 
      placeholder="Password" 
      secureTextEntry={true} 
      selectTextOnFocus={true}
      returnKeyType="done"
      onChangeText={onChangePassword} />
    <Button title="login" onPress={onSubmit} />
  </View>
);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLogin = this.onLogin.bind(this);

    this.state = { email: '', password: '' };
  }

  onChangeEmail(email) {
    this.setState({ email });
  }

  onChangePassword(password) {
    this.setState({ password });
  }

  onLogin() {
    let { email, password } = this.state;
    if ( !(email && password)) return;

    // TODO login
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ 
            fontSize: 48, 
            color: 'black', 
            fontWeight: '900',
            textShadowOffset: {width: 2, height: 2}
          }}>
            View Chat
          </Text>
        </View>
        <Input 
          email={this.state.email}
          password={this.state.password}
          onChangeEmail={this.onChangeEmail}
          onChangePassword={this.onChangePassword}
          onSubmit={this.onLogin} />
        <Text style={{ textAlign: 'center' }}>Copyright (c) 2018</Text>
      </View>
    );
  }
}
