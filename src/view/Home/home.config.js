import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (<SvgIcon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>);

const tabBarItems = [
  {
    id: 0,
    label: '喜欢',
    value: '/user',
    icon: HomeIcon
  },
  {
    id: 1,
    label: '文章',
    value: '/user2',
    icon: HomeIcon
  },
  {
    id: 2,
    label: '我',
    value: '/user3',
    icon: HomeIcon
  }
];

const buttonList = [
  {
    label: 'me',
    action: 'introduce',
    backgroundColor: '#FF4081',
    labelColor: '#fff'
  },
  {
    label: 'interest',
    action: 'interest',
    backgroundColor: '#FF4081',
    labelColor: '#fff'
  },
  {
    label: 'about',
    action: 'show',
    backgroundColor: '#FF4081',
    labelColor: '#fff'
  }
];

const navList = [
  {
    value: 'pink',
    label: 'pink'
  },
  {
    value: 'dark',
    label: 'dark'
  },
  {
    value: 'light',
    label: 'light'
  }
];

export { tabBarItems, buttonList, navList };
