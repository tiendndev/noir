import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Connection from '../pages/Connection';
import Posts from '../pages/Posts';

import config from '../config';

const publicRoute = [
   { path: config.routes.home, component: Home },
   { path: config.routes.shop, component: Shop },
   { path: config.routes.connection, component: Connection },
   { path: config.routes.posts, component: Posts },
];

export { publicRoute };
