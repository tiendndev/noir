import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Connection from '../pages/Connection';
import Posts from '../pages/Posts';

const publicRoute = [
   { path: '/', component: Home },
   { path: '/shop', component: Shop },
   { path: '/connection', component: Connection },
   { path: '/posts', component: Posts },
];

export { publicRoute };
