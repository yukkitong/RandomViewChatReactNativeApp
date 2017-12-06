import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


const numberWithCommas = (x) => {
  if (!x) return '';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default class FreeChargeItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let fn = this.props.onPress || function() {};
    fn();
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleClick}>
        <View style={styles.logSize}>
          <Image
            style={styles.logo}
            source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}> 
          </Image>
          <Text style={styles.badge}>N</Text>
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.eventTitle}>{this.props.eventTitle}</Text>
          <Text style={styles.eventType}>{this.props.eventType}</Text>
        </View>
        <View style={styles.heartWrapper}>
          <Text style={styles.heartValue}>{numberWithCommas(this.props.chargeValue)}</Text>
          <Text style={styles.heartUnit}>하트</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

FreeChargeItem.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  chargeValue: PropTypes.number.isRequired,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 4
  },
  logSize: {
    width: 50, 
    height: 50
  },
  logo: {
    flex: 1, 
    margin: 4, 
    backgroundColor: 'grey'
  },
  badge: {
    position: 'absolute', 
    left: 0, top: 0, 
    width: 20, height: 20, 
    borderRadius: 10, 
    backgroundColor: 'yellow', 
    fontSize: 12, 
    textAlign: 'center', 
    textAlignVertical: 'center',
    color: 'black'
  },
  descWrapper: {
    flex: 1, 
    padding: 14, 
    alignItems: 'flex-start'
  },
  eventTitle: {
    color: 'black', 
    fontSize: 20
  },
  eventType: {
    color: 'white', 
    fontSize: 12, 
    backgroundColor: 'black', 
    borderRadius: 2, 
    padding: 2,
  },
  heartWrapper: {
    padding: 14, 
    borderLeftColor: '#aaa', 
    borderLeftWidth: 1, 
    alignItems: 'center'
  },
  heartValue: {
    color: 'black', 
    fontSize: 20
  },
  heartUnit: {
    color: 'black', 
    fontSize: 16
  }
});