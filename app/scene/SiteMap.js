import React from 'react';
import { 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Text 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SiteMap extends React.Component {

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => Actions.login() }>
          <Text style={styles.button}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.register() }>
          <Text style={styles.button}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.overview() }>
          <Text style={styles.button}>오버뷰</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.chatHome() }>
          <Text style={styles.button}>채팅홈</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.users() }>
          <Text style={styles.button}>사용자-리스트</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.userDetail() }>
          <Text style={styles.button}>사용자-상세</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.moment() }>
          <Text style={styles.button}>모멘트-리스트</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.momentDetail() }>
          <Text style={styles.button}>모멘트-상세</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.textChat() }>
          <Text style={styles.button}>텍스트 챗팅</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.notice() }>
          <Text style={styles.button}>공지사항</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.freeCharge() }>
          <Text style={styles.button}>무료충전</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.store() }>
          <Text style={styles.button}>상점</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.notificationSetting() }>
          <Text style={styles.button}>알림설정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.favoriteGender() }>
          <Text style={styles.button}>선호성별</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.favoriteCountry() }>
          <Text style={styles.button}>선호지역</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.followers() }>
          <Text style={styles.button}>팔로워</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.inquiry() }>
          <Text style={styles.button}>문의하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.payHistory() }>
          <Text style={styles.button}>이용내역</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.contract() }>
          <Text style={styles.button}>이용약관</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.about() }>
          <Text style={styles.button}>저작권명시</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.requestCash() }>
          <Text style={styles.button}>캐시전환</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'black',
    padding: 10,
    margin: 4,
  },
});