import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import PersonIcon from 'material-ui/svg-icons/social/person';
import HomeIcon from 'material-ui/svg-icons/action/home';
import BookIcon from 'material-ui/svg-icons/action/book';

const Home = (<SvgIcon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>);
const Person = (<PersonIcon />);
const Book = (<BookIcon />);
const tabBarItems = [
  {
    id: 0,
    label: 'love',
    value: '/user',
    icon: Home
  },
  {
    id: 1,
    label: 'book',
    value: '/SpaceReport',
    icon: Book
  },
  {
    id: 2,
    label: 'me',
    value: '/user3',
    icon: Person
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
