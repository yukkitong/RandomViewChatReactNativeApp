import React from 'react';

import { 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  View,
  Text 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { 
  About as AboutModal,
  Contract as ContractModal,
  PayHistory as PayHistoryModal,
  Inquiry as InquiryModal,
  FavGender as FavGenderModal,
  FavCountry as FavCountryModal,
  NotiSetting as NotiSettingModal,
  Followers as FollowersModal,
  UserInfo as UserInfoModal,
  Store as StoreModal,
  FreeCharging as FreeChargingModal,
  TextChatting as TextChattingModal,
  Notice as NoticeModal,
  RequestCash as RequestCashModal,
} from './Modals';

export default class SiteMap extends React.Component {
  
  modal = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <TouchableOpacity onPress={ () => Actions.login() }>
            <Text style={styles.button}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => Actions.register() }>
            <Text style={styles.button}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => Actions.overview() }>
            <Text style={styles.button}>오버뷰</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => Actions.chatHome() }>
            <Text style={styles.button}>채팅홈</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => Actions.users() }>
            <Text style={styles.button}>사용자-리스트</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => Actions.moment() }>
            <Text style={styles.button}>모멘트-리스트</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => Actions.momentDetail() }>
            <Text style={styles.button}>모멘트-상세</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ () => this.modal['user_info'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>사용자-상세</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['text_chatting'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>텍스트 챗팅</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['notice'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>공지사항</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ () => this.modal['free_charging'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>무료충전</Text>
          </TouchableOpacity>
          <TouchableOpacity   
            onPress={ () => this.modal['store'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>상점</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['noti_setting'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>알림설정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['fav_gender'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>선호성별</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['fav_country'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>선호지역</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ () => this.modal['followers'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>팔로워</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ () => this.modal['inquiry'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>문의하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['pay_history'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>사용내역</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['contract'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>이용약관</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.modal['about'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>저작권명시</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ () => this.modal['request_cash'].open() }>
            <Text style={[styles.button, {backgroundColor: '#2980b9'}]}>캐시전환</Text>
          </TouchableOpacity>
        </ScrollView>

        <AboutModal ref={(comp) => this.modal['about'] = comp } />
        <ContractModal ref={(comp) => this.modal['contract'] = comp } />
        <PayHistoryModal ref={(comp) => this.modal['pay_history'] = comp } />
        <InquiryModal ref={(comp) => this.modal['inquiry'] = comp } />
        <FavGenderModal ref={(comp) => this.modal['fav_gender'] = comp } />
        <FavCountryModal ref={(comp) => this.modal['fav_country'] = comp } />
        <NotiSettingModal ref={(comp) => this.modal['noti_setting'] = comp } />
        <FollowersModal ref={(comp) => this.modal['followers'] = comp } />
        <UserInfoModal ref={(comp) => this.modal['user_info'] = comp } />
        <StoreModal ref={(comp) => this.modal['store'] = comp } />
        <FreeChargingModal ref={(comp) => this.modal['free_charging'] = comp } />
        <NoticeModal ref={(comp) => this.modal['notice'] = comp } />
        <TextChattingModal ref={(comp) => this.modal['text_chatting'] = comp } />
        <RequestCashModal ref={(comp) => this.modal['request_cash'] = comp } />

      </View>
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