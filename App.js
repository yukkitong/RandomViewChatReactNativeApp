import React from 'react';
import { Router, Scene, Modal, Stack } from 'react-native-router-flux';
import SiteMap from './app/scene/SiteMap';
import Login from './app/scene/Login';
import Register from './app/scene/Register';
import Overview from './app/scene/Overview';
import ChatHome from './app/scene/ChatHome';
import Users from './app/scene/Users';
import UserDetail from './app/scene/UserDetail';
import Moment from './app/scene/Moment';
import MomentDetail from './app/scene/MomentDetail';
import TextChat from './app/scene/TextChat';
import Notice from './app/scene/Notice';
import FreeCharge from './app/scene/FreeCharge';
import Store from './app/scene/Store';
import NotificationSetting from './app/scene/NotificationSetting';
import FavoriteGender from './app/scene/FavoriteGender';
import FavoriteCountry from './app/scene/FavoriteCountry';
import Followers from './app/scene/Followers';
import Inquiry from './app/scene/Inquiry';
import PayHistory from './app/scene/PayHistory';
import Contract from './app/scene/Contract';
import About from './app/scene/About';
import RequestCash from './app/scene/RequestCash';

export default () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="sitemap" title="SiteMap" component={SiteMap} initial={true} />
        <Scene key="login" title="Login" component={Login} />
        <Scene key="register" title="Register" component={Register} />
        <Scene key="overview" title="Overview" hideNavBar={true} component={Overview} />
        <Scene key="chatHome" title="Chat Home" component={ChatHome} />
        <Scene key="users" title="Users" component={Users} />
        <Scene key="userDetail" title="User Detail" component={UserDetail} />
        <Scene key="moment" title="Moment" component={Moment} />
        <Scene key="momentDetail" title="Moment Detail" component={MomentDetail} />
        <Scene key="textChat" title="Text Chat" component={TextChat} />
        <Scene key="notice" title="Notice" component={Notice} />
        <Scene key="freeCharge" title="Free Charge" component={FreeCharge} />
        <Scene key="store" title="Store" component={Store} />
        <Scene key="notificationSetting" title="Notification Setting" component={NotificationSetting} />
        <Scene key="favoriteGender" title="Favorite Gender" component={FavoriteGender} />
        <Scene key="favoriteCountry" title="Favorite Country" component={FavoriteCountry} />
        <Scene key="followers" title="Followers" component={Followers} />
        <Scene key="inquiry" title="Inquiry" component={Inquiry} />
        <Scene key="payHistory" title="Payment History" component={PayHistory} />
        <Scene key="contract" title="Contract" component={Contract} />
        <Scene key="about" title="About" component={About} />
        <Scene key="requestCash" title="Request Cash" component={RequestCash} />
      </Scene>
    </Router>
  );
}