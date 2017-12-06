import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';


export default class FavoriteCountry extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selected: this.props.value || 'auto' }; 
    this.onClose = this.props.onClose || function() { 
      // throw new Error('onClose() handler required.') 
    };

    this.onPressCheckButton = this.onPressCheckButton.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onPressCheckButton(which) {
    this.setState({ selected: which });
  }

  render() {
    return (
      <View style={styles.outterContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>선호하는 지역을 선택해주세요</Text>
          <View style={{padding: 4}}>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('auto')} key="auto">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'auto' ? 'black' : 'grey'}]}>자동</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('korea')} key="korea">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'korea' ? 'black' : 'grey'}]}>대한민국</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('thai')} key="thai">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'thai' ? 'black' : 'grey'}]}>태국</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('vietnam')} key="vietnam">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'vietnam' ? 'black' : 'grey'}]}>베트남</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('indonesia')} key="indonesia">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'indonesia' ? 'black' : 'grey'}]}>인도네시아</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('east-asia')} key="east-asia">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'east-asia' ? 'black' : 'grey'}]}>동남아시아</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('brazil')} key="brazil">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'brazil' ? 'black' : 'grey'}]}>브라질</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('csa')} key="csa">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'csa' ? 'black' : 'grey'}]}>중남미</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('usa')} key="usa">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'usa' ? 'black' : 'grey'}]}>미국</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:34}} onPress={() => this.onPressCheckButton('west-eu')} key="west-eu">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'west-eu' ? 'black' : 'grey'}]}>서유럽</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.submit}>
            <Icon name="md-checkmark-circle-outline" size={34} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close} onPress={this.onClose}>
            <Icon name="md-close" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FavoriteCountry.propTypes = {
  value: PropTypes.oneOf(['all', 'men', 'women']),
  onClose: PropTypes.func,
};

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  button: {
    flex: 1, 
    padding: 4,
    textAlign: 'left', 
    textAlignVertical: 'center',
    margin: 4,
    color: 'white',
    fontSize: 12,
  },
  submit: {
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 4,
  },
  close: {
    position: 'absolute',
    right: 4,
    top: 6,
    padding: 4,
  }
});
