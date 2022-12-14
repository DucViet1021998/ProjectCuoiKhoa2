import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';


// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
// import Search from '~/pages/Search';

// Plublic Routes
export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },

]

export const privateRoutes = [

]