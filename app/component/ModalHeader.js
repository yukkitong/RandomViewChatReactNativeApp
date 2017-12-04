import React from 'react';
import {
  StyleSheet,
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';

export default class ModalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.props.onPress || (() => {});
    this.onClose = this.props.onClose || (() => {});

    this.onPress = this.onPress.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  renderTabs() {
    let tabs = this.props.tabs;
    if (!tabs) return;
    return tabs.map((tab, index) => {
      return (
        <TouchableOpacity onPress={() => this.onPress(tab, index)}>
          <Text key={index} style={{
            padding: 10, 
            textAlign: 'center',
          }}>{tab.title}</Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <View style={styles.tabButtonContainer}>
            { this.renderTabs() }
          </View>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={this.onClose}>
            <Text style={{padding: 10, textAlign: 'center'}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {

  },
  closeButton: {

  },
});