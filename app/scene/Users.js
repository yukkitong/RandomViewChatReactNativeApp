import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';


const windowsWidth = Dimensions.get('window').width;


class User extends React.Component {
  render() {
    let { name, age, distance, country } = this.props;
    return (
      <View style={{ flex: 1, margin: 4, width: '100%', height: 200 }}> 
        <Image 
          style={{ flex: 1, resizeMode: 'cover' }}
          source={{
            uri: 'data:image/png;base64,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1zURlWhTCAIQcEZAXtOOOeaYPuE46aST7CugiFPnc/bZZ5vtt9/errrktU3ERsSp85HXPHmFfOWVV8xtt91mxe3jjz82Eqowbdo08/bbb1vR6f+55557zJNPPmmeeOIJs8EGG6zzXX/B+umnn8yRRx5pnnvuOTNnzhxbThZL++23X1+fh11hcaeVM1+hIghEIyD7QLfffrttX17LTj31VPtnEaxLL73U7Lnnnn19u+uuu4zEWHYESy40kD93Ph999JHdV3r11VfNv//+a/enjjjiCCNaMXXq1D5x66zW5PVTPv1XTf1ByOufCJ/sa8ni6KyzzrJ7ZrJSk9Xg8uXL7d6bfC+rsyEFizutovkXDUPAKQHZeBcBee2118x5553XJx6DCdbNN99s/v777z7BWrJkibnwwgv7+vPuu+/a70SwZLUkKyTZz5J9KVlpdV4d5QFZncme1cMPP2xf7d5//327d9b5yCrt0EMPta+WsqKSV0IRLKlbxGv06NFmk002Mdttt93wKyzutHLqL1QGgWQI9H/lE8GSzfbjjz++r3/yvexviUjJK6GInKy6Op/+r4SyNyavbCI2IlgDBanzzF9//WVFR4Srs5oT4ZODgJdeesmKlnxkH+uoo46ywieb/iJgssd23HHHDS1Y3GmVjG/REQi0JiAnduPGjbP1yMrp8MMPN6eccoo555xzzJ133mlP5V5++WW7oS3R5yIsnU15CYU46KCD7ApIXvfk1PGwww6zJ4/yvAiR7C+JyL355pu2zI033mg31WX1JXXKRzRF9rdE0EQMpV4JZ3j99dftKWTn02n/oYcesiImBwayfyb7Ys8884ytc51XwrpBXK1pUgEEIOCNgIiVrHwkJEBe26666ir7//PmzbMnfbI/tM8++9j/ykmchBqceOKJRl4LRRxEoC644AIbYnDDDTfYuCqJneo8L2IiMV4SBiGiJCESIiyy9ySnfBLOICIpIRFSj9QrgiPl5CMxYbLRLvtiTz/9tA2FkPpEEK+//npbp2zwS1yWxGJNmTJlrWDJMeOiRYvs8k6WY3wgAIH8CchetAjMr7/+asVq//33txvanY/EPj377LNGFiuzZs0yhxxyiA1x6P9544037CvZZpttZjfYZZ9KhEhWSDvttJOZPHmyLS7CIyInwiOb7fJqJ/XL/8vKSj6//fabFbjO6kv+TlZkEk7RCViVZ9966y0b+iArukmTJtnXQ1mlSdkRvb29q0VlJdK0E42av6kYAQQgoIVA58IFEbUR8+bNWy0q1gnm0jJIxgEBCOghIKsrObX8P3gximnzi/FsAAAAAElFTkSuQmCC'
          }} />
        <View style={{ position: 'absolute', bottom: 0, padding: 2, width: '100%' }}>
          <View>
            <Text style={{ fontSize: 20, }}>{ name }</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="image" size={18} />
                <Text style={{ marginLeft: 2, }}>{ `${age}세` }</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="location-pin" size={18} />
                <Text style={{ marginLeft: 2, }}>{ `${distance}Km` }</Text> 
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: 'Jason',
        age: 40,
        distance: 120,
        country: 'Korea'
      },
      {
        name: 'Jason',
        age: 40,
        distance: 120,
        country: 'Korea'
      },
      {
        name: 'Jason',
        age: 40,
        distance: 120,
        country: 'Korea'
      },
      {
        name: 'Jason',
        age: 40,
        distance: 120,
        country: 'Korea'
      },
      {
        name: 'Jason',
        age: 40,
        distance: 120,
        country: 'Korea'
      }]
    }
  }

  keyExtractor = (item, index) => index;
  
  renderItem({ item }) {
    let { name, age, distance, country } = item;
    return <User name={name} age={age} distance={distance} country={country} />;
  }

  render() {
    return (
      <FlatList 
        numColumns={2}
        data={this.state.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#34495e',
    padding: 10,
    margin: 4,
    textShadowOffset: { width: 1, height: 1 },
    fontWeight: 'bold',
  },
});