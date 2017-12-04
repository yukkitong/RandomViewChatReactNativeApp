import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import IntroScreen from '../AppIntro';
import Profile from '../AvatarWrapper';

export default () => {
  return (
    <Router>
      <Scene key="root">
        <Scene 
          key="intro" 
          component={ IntroScreen } 
          initial
          hideNavBar>
        </Scene>
        <Scene 
          key="profile" 
          component={ Profile }
          hideNavBar>
        </Scene>
      </Scene>
    </Router>
  );
};