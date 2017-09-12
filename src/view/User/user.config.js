import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (<SvgIcon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>);

const tabBarItems = [
    {
        label: '喜欢',
        value: 0,
        icon: HomeIcon
    },
    {
        label: '文章',
        value: 1,
        icon: HomeIcon
    },
    {
        label: '我',
        value: 2,
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
        value: '1',
        label: 'reload'
    },
    {
        value: '2',
        label: 'share'
    },
    {
        value: '3',
        label: 'close'
    }
];

export { tabBarItems, buttonList, navList };
