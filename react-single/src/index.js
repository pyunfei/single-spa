import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

import App from './App';

const render = ({ appContent, loading }) => {
  ReactDOM.render(<App appContent={appContent} loading={loading} />, document.getElementById('main-root'));
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

initApp();

registerMicroApps(
  [
    { name: 'react', entry: '//localhost:10100', render, activeRule: genActiveRule('/react'), props: { key: 12 } },
    { name: 'vue', entry: '//localhost:10200', render, activeRule: genActiveRule('/vue') },
  ],
  {
    beforeLoad: [
      app => {
        console.log(' ======== before load ======>', app);
      },
    ],
    beforeMount: [
      app => {
        console.log(' ======== before mount ======>', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log(' ======== after unload ======>', app);
      },
    ],
  },
);

setDefaultMountApp('/react');

start({ prefetch: true });
