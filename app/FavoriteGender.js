import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';


export default class FavoriteGender extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selected: this.props.value || 'all' }; 
    this.onClose = this.props.onClose || function() { throw new Error('onClose() handler required.') };

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
          <Text style={styles.title}>선호하는 성별을 선택해주세요</Text>
          <View style={{flexDirection: 'row', padding: 4}}>
            <TouchableOpacity style={{flex: 1, height: 80}} onPress={() => this.onPressCheckButton('all')} key="all">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'all' ? 'black' : 'grey'}]}>전체</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 80}} onPress={() => this.onPressCheckButton('men')} key="men">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'men' ? 'black' : 'grey'}]}>남자</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 80}} onPress={() => this.onPressCheckButton('women')} key="women">
              <Text style={[styles.button, {backgroundColor: this.state.selected == 'women' ? 'black' : 'grey'}]}>여자</Text>
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

FavoriteGender.propTypes = {
  value: PropTypes.oneOf(['all', 'men', 'women']),
  onClose: PropTypes.func.isRequired,
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
    padding:4,
    textAlign: 'center', 
    textAlignVertical: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 4,
    color: 'white',
    fontSize: 24,
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
