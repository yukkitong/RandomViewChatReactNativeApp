import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
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
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 240 }}>
        <Header title="View Chat 1.0" onClose={() => this.modal.close() } />
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
          <Text style={[styles.center, { fontSize: 16 }]}>
            뷰챗은 랜덤영상채팅 어플리케이션입니다.
          </Text>
          <Text style={[styles.center, { fontSize: 16 }]}>
            모든 지적재산과 권리는 법률로 보호받고 있습니다.
          </Text>
          <Text style={[styles.center, { fontSize: 16 }]}>
            Version 3.5.03
          </Text>
        </View>
        <TouchableOpacity onPress={this.onShowContract}>
          <Text style={[styles.center, { 
            padding: 10, 
            backgroundColor: 'red', 
            color: 'white', 
            fontSize: 20
          }]}>이용약관 보기</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

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
        ref={ (comp) => this.modal = comp }>
        <Header title="이용약관" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

export class PayHistory extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}>
        <Header title="사용내역" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

export class Inquiry extends React.Component {
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}>
        <Header title="문의하기" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

export class FavGender extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}>
        <Header title="선호하는 성별?" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

export class FavCountry extends React.Component {
  
  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        entry="bottom"
        position="bottom" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}>
        <Header title="선호하는 지역?" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

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
        style={{ height: 340 }}>
        <Header title="알림설정" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

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
        style={{ height: 340 }}>
        <Header title="팔로워" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

export class UserInfo extends React.Component {

  open() {
    this.modal.open();
  }

  render() {
    return (
      <Modal
        position="center" 
        ref={ (comp) => this.modal = comp } 
        style={{ height: 340 }}>
        <Header title="User" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

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
        ref={ (comp) => this.modal = comp }>
        <Header title="상점" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}


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
        ref={ (comp) => this.modal = comp }>
        <Header title="무료충전" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}


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
        ref={ (comp) => this.modal = comp }>
        <Header title="챗팅" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

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
        ref={ (comp) => this.modal = comp }>
        <Header title="공지사항" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}

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
        style={{ height: 340 }}>
        <Header title="캐시전환" onClose={() => this.modal.close() }/>
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  center: {
    textAlign: 'center'
  }
});