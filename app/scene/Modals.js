import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  Text,
  Picker,
  Switch,
  ActivityIndicator,
  AsyncStorage,
  TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Couchbase from 'react-native-couchbase-lite';

const Header = ({ title, onClose, style = {} }) => {
  style = Object.assign({ top: 0, right: 0 }, style)
  return (
    <View style={ style }>
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between',
    }}>
      <Text style={{ 
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20, 
        textAlignVertical: 'center',
      }}>
        { title }
      </Text>
      <TouchableOpacity onPress={ onClose }>
        <Icon name="close" size={30} color="black" />
      </TouchableOpacity>
    </View>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

class Indicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      size: this.props.size || 'large',
      visible: this.props.visible,
    };
  }

  setVisible(visible) {
    this.setState({ ...this.state, visible });
  }
  
  render() {
    return (
      <View style={[ styles.indicator, {opacity: this.state.visible ? 1.0 : 0.0} ]}>
        <ActivityIndicator
          size={this.state.size} 
          animating={true} />
      </View>
    );
  }
}

Indicator.propTypes = {
  size: PropTypes.string,
  // color: PropTypes.color,
  visible: PropTypes.bool.isRequired
};

// 저작권
export class About extends React.Component {
  constructor(props) {
    super(props);
    this.onShowContract = this.onShowContract.bind(this);
  }

  onShowContract() {
    if (this.contract) {
      this.contract.open();
    }
  }

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        position="center" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 240, width: '96%' }, styles.modal]}
      >
        <Header title="View Chat 1.0" onClose={ this.close } />
        <View style={styles.content}>
          <Text style={[styles.center, { fontSize: 14 }]}>
            뷰챗은 랜덤영상채팅 어플리케이션입니다.
          </Text>
          <Text style={[styles.center, { fontSize: 14 }]}>
            모든 지적재산과 권리는 법률로 보호받고 있습니다.
          </Text>
          <Text style={[styles.center, { fontSize: 12 }]}>
            Version 1.0.0
          </Text>
        </View>
        <TouchableOpacity onPress={ this.onShowContract }>
          <Text style={[styles.center, styles.button]}>이용약관 보기</Text>
        </TouchableOpacity>

        <Contract ref={comp => this.contract = comp} />
      </Modal>
    );
  }
}

// 이용약관
export class Contract extends React.Component {

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom"
        coverScreen={true}
        ref={ comp => this.modal = comp }
        style={ styles.modal }
      >
        <Header title="이용약관" onClose={ this.close }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 결제내역
export class PayHistory extends React.Component {

  state = { type: 'heart', loading: true };

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 400 }, styles.modal]}
      >
        <Header title="사용내역" onClose={ this.close }/>
        <View style={[styles.content, { justifyContent: 'flex-start' }]}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="하트내역" value="heart" />
              <Picker.Item label="캐시내역" value="cash" />
            </Picker>
          </View>
          <Indicator visible={this.state.loading} />
        </View>
      </Modal>
    );
  }
}

// 문의하기
export class Inquiry extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      category: 'heart',
      content: '',
      upload: false
    };
  }

  onUpload = () => {
    Couchbase.initRESTClient(manager => {
        //manager.help();
        // manager.server.post_replicate.help();

        // manager.query.get_db_all_docs({db: 'db'})
        // .then((res) => console.log(res));
        manager.server.post_replicate({
          body: {
            source: {
              url: 'http://10.0.2.2:4984/test'
            },
            target: 'db',
            continuous: true
          }
        })
          .then((res) => {
            var { sessionId } = res.obj;
            console.log(sessionId);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }); 
      // manager.database.delete_db({db: 'users'})
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     // manager.database.put_db({db: 'users'})
      //     //   .then((res) => {
      //     //     console.log('----------------------------');
      //     //     console.log(res);
      //     //   })
      //   });
    });

    if (!this.isValidInput()) {
      Alert.alert('Input content');
      return;
    }
    
    this.indicator.setVisible(true);

    // var remote = `http://jason:jason1452!@localhost:4984/inquiry`;
    // database.createDocument({
    //   category: this.state.category,
    //   content: this.state.content,
    //   author: 'Jason BAE',
    //   created: new Date().toISOString()
    // });
  }
 
  isValidInput() {
    return !!this.state.content;
  }

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 360 }, styles.modal]}
      >
        <Header title="문의하기" onClose={ this.close }/>
        <View style={[styles.content, { justifyContent: 'flex-start' }]}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.category}
              onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}>
              <Picker.Item label="하트" value="heart" />
              <Picker.Item label="오류" value="error" />
              <Picker.Item label="인앱결제" value="payinapp" />
              <Picker.Item label="기타" value="misc" />
            </Picker>
          </View>
          <TextInput style={{
              height: 40, 
              marginTop: 10, 
              borderColor: 'black', 
              borderWidth: 1
            }} 
            underlineColorAndroid="transparent" 
            blurOnSubmit={true}
            multiline={true}
            numberOfLines={4}
            onChangeText={content => this.setState({ content })}>
          </TextInput>
          <Indicator ref={ comp => this.indicator = comp } visible={false} />
        </View>
        <TouchableOpacity onPress={ this.onUpload }>
          <Text style={[styles.center, styles.button]}>확인</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

// 선호성별
export class FavGender extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gender: 'all' };
  }

  componentDidMount() {
    this.get().then(gender => this.setState({ gender }));
  }

  async get() {
    return await AsyncStorage.getItem('fav-gender');
  }

  async set(gender) {
    await AsyncStorage.setItem('fav-gender', gender);
  }

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 180 }, styles.modal]}
      >
        <Header title="선호하는 성별?" onClose={ this.close }/>
        <View style={styles.content}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) => {
                this.set(itemValue);
                this.setState({gender: itemValue});
              }}>
              <Picker.Item label="모두" value="all" />
              <Picker.Item label="남자" value="male" />
              <Picker.Item label="여자" value="female" />
            </Picker>
          </View>
        </View>
        {/* <TouchableOpacity onPress={() => this.modal.close() }>
          <Text style={[styles.center, styles.button]}>확인</Text>
        </TouchableOpacity> */}
      </Modal>
    );
  }
}

// 선호지역
export class FavCountry extends React.Component {

  state = { area: 'ko' };
  
  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 180 }, styles.modal]}
      >
        <Header title="선호하는 지역?" onClose={ this.close }/>
        <View style={styles.content}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.area}
              onValueChange={(itemValue, itemIndex) => this.setState({area: itemValue})}>
              <Picker.Item label="한국" value="ko" />
              <Picker.Item label="미국" value="us" />
              <Picker.Item label="영국" value="uk" />
            </Picker>
          </View>
        </View>
        {/* <TouchableOpacity onPress={ () => this.modal.close() }>
          <Text style={[styles.center, styles.button]}>확인</Text>
        </TouchableOpacity> */}
      </Modal>
    );
  }
}

// 알림설정
export class NotiSetting extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messageOn: true, chattingOn: true };
  }

  componentDidMount() {
    this.get()
      .then(value => JSON.parse(value))
      .then(value => this.setState(value));
  }
  
  open = () => this.modal.open();
  close = () => this.modal.close();

  async get() {
    return await AsyncStorage.getItem('noti-settings');
  }

  async set(setting) {
    await AsyncStorage.setItem('noti-settings', JSON.stringify(setting));
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 200 }, styles.modal]}
      >
        <Header title="알림설정" onClose={ this.close }/>
        <View style={styles.content}>
          <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            padding: 10
          }}>
            <Text style={{fontSize: 20}}>챗팅알림</Text>
            <Switch onTintColor="#e67e22" value={this.state.chattingOn} />
          </View>
          <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            padding: 10
          }}>
            <Text style={{fontSize: 20}}>쪽지알림</Text>
            <Switch onTintColor="#e67e22" value={this.state.messageOn} />
          </View>
        </View>
      </Modal>
    );
  }
}

// 팔로워
export class Followers extends React.Component {

  state = { loading: false };
  
  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 340 }, styles.modal]}
      >
        <Header title="팔로워" onClose={ this.close }/>
        <View style={styles.content}>
          <Indicator visible={this.state.loading} />
        </View>
      </Modal>
    );
  }
}

// 유저인포
export class UserInfo extends React.Component {

  state = { loading: true };

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        position="center" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 300, width: '96%' }, styles.modal]}
      >
        <Header 
          title="" 
          onClose={ this.close } 
          style={{ position: 'absolute', padding: 10 }} />
        <View style={[styles.content]}>
          <Indicator visible={this.state.loading} />
        </View>
      </Modal>
    );
  }
}

// 상점
export class Store extends React.Component {

  state = { loading: true };

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ comp => this.modal = comp }
        style={ styles.modal }
      >
        <Header title="상점" onClose={ this.close }/>
        <View style={styles.content}>
          <Indicator visible={this.state.loading} />
        </View>
      </Modal>
    );
  }
}

// 무료충전
export class FreeCharging extends React.Component {

  state = { loading: true }; 

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ comp => this.modal = comp }
        style={ styles.modal }
      >
        <Header title="무료충전" onClose={ this.close }/>
        <View style={styles.content}>
          <Indicator visible={this.state.loading} />
        </View>
      </Modal>
    );
  }
}

// 챗팅
export class TextChatting extends React.Component {

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ comp => this.modal = comp }
        style={ styles.modal }
      >
        <Header title="챗팅" onClose={ this.close }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 공지사항
export class Notice extends React.Component {

  state = { loading: true };

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ comp => this.modal = comp }
        style={ styles.modal }
      >
        <Header title="공지사항" onClose={ this.close }/>
        <View style={styles.content}>
          <Indicator visible={this.state.loading} />
        </View>
      </Modal>
    );
  }
}

// 캐시전환
export class RequestCash extends React.Component {

  open = () => this.modal.open();
  close = () => this.modal.close();

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ comp => this.modal = comp } 
        style={[{ height: 340 }, styles.modal]}
      >
        <Header title="캐시전환" onClose={ this.close }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  center: {
    textAlign: 'center'
  },
  modal: {
    backgroundColor: '#ffffffe0',
    justifyContent: 'space-between',
    padding: 10
  },
  button: {
    padding: 10, 
    backgroundColor: '#2c3e50', 
    color: 'white', 
    fontSize: 18
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  picker: { 
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    borderColor: '#7f8c8d'
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});