import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Picker,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const Header = ({title, onClose}) => {
  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      padding: 10
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
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

// 저작권
export class About extends React.Component {
  constructor(props) {
    super(props);
    this.onShowContract = this.onShowContract.bind(this);
  }

  onShowContract() {

  }

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        position="center" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 240, width: '96%' }}
      >
        <Header title="View Chat 1.0" onClose={ () => this.modal.close() } />
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
        <TouchableOpacity onPress={ this.onShowContract } style={{ padding: 10 }}>
          <Text style={[styles.center, styles.button]}>이용약관 보기</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

// 이용약관
export class Contract extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom"
        coverScreen={true}
        ref={ (comp) => this.modal = comp }
      >
        <Header title="이용약관" onClose={ () => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 결제내역
export class PayHistory extends React.Component {

  state = { type: 'heart' };

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}
      >
        <Header title="사용내역" onClose={ () => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="하트내역" value="heart" />
              <Picker.Item label="캐시내역" value="cash" />
            </Picker>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={ () => this.modal.close() }>
            <Text style={[styles.center, styles.button]}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

// 문의하기
export class Inquiry extends React.Component {

  state = { type: 'heart' };
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 240 }}
      >
        <Header title="문의하기" onClose={ () => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="하트" value="heart" />
              <Picker.Item label="오류" value="error" />
              <Picker.Item label="인앱결제" value="payinapp" />
              <Picker.Item label="기타" value="misc" />
            </Picker>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={ () => this.modal.close() }>
            <Text style={[styles.center, styles.button]}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

// 선호성별
export class FavGender extends React.Component {

  state = { gender: 'all' };

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 240 }}
      >
        <Header title="선호하는 성별?" onClose={ () => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }}>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
              <Picker.Item label="모두" value="all" />
              <Picker.Item label="남자" value="male" />
              <Picker.Item label="여자" value="female" />
            </Picker>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={() => this.modal.close() }>
            <Text style={[styles.center, styles.button]}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

// 선호지역
export class FavCountry extends React.Component {

  state = { area: 'ko' }
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 240 }}
      >
        <Header title="선호하는 지역?" onClose={ () => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }}>
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
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={ () => this.modal.close() }>
            <Text style={[styles.center, styles.button]}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

// 알림설정
export class NotiSetting extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}
      >
        <Header title="알림설정" onClose={ () => this.modal.close() }/>
        <View style={styles.content}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={ () => this.modal.close() }>
            <Text style={[styles.center, styles.button]}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

// 팔로워
export class Followers extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}
      >
        <Header title="팔로워" onClose={() => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 유저인포
export class UserInfo extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        position="center" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 300, width: '96%' }}
      >
        <Header title="" onClose={() => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 상점
export class Store extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ (comp) => this.modal = comp }
      >
        <Header title="상점" onClose={() => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 무료충전
export class FreeCharging extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ (comp) => this.modal = comp }
      >
        <Header title="무료충전" onClose={() => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 챗팅
export class TextChatting extends React.Component {
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ (comp) => this.modal = comp }
      >
        <Header title="챗팅" onClose={() => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 공지사항
export class Notice extends React.Component {
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        coverScreen={true}
        ref={ (comp) => this.modal = comp }
      >
        <Header title="공지사항" onClose={() => this.modal.close() }/>
        <View style={styles.content}>
        </View>
      </Modal>
    );
  }
}

// 캐시전환
export class RequestCash extends React.Component {
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}
      >
        <Header title="캐시전환" onClose={() => this.modal.close() }/>
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
  button: {
    padding: 10, 
    backgroundColor: '#2c3e50', 
    color: 'white', 
    fontSize: 18
  },
  content: {
    flex: 1, 
    justifyContent: 'center', 
    padding: 10
  },
  picker: { backgroundColor: '#ecf0f1' }
});