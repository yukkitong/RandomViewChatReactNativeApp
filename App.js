import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SiteMap from './app/scene/SiteMap';
import Login from './app/scene/Login';
import Register from './app/scene/Register';
import Overview from './app/scene/Overview';
import ChatHome from './app/scene/ChatHome';
import Users from './app/scene/Users';
import UserDetail from './app/scene/UserDetail';
import Moment from './app/scene/Moment';
import MomentDetail from './app/scene/MomentDetail';

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
        <Scene key="moment" title="Moment" component={Moment} />
        <Scene key="momentDetail" title="Moment Detail" component={MomentDetail} />
      </Scene>
    </Router>
  );
}