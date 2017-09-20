import React from 'react';
import ReactDOM from 'react-dom';
import '../common/css/index.css';
// npm run build 把这些字体文件打包到static/fonts下面
import '../common/fonts/iconsycf.eot';
import '../common/fonts/iconsycf.svg';
import '../common/fonts/iconsycf.ttf';
import '../common/fonts/iconsycf.woff';

import App from '../App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
