const { App, syslib } = require('regoch-web');
const viewsCached = require('../_cache/views.json');
const routes = require('./routes');

// conf
const { $debugOpts, authOpts } = require('./conf');

// controllers
const HomeCtrl = require('./controllers/HomeCtrl');
const WebsocketServerCtrl = require('./controllers/WebsocketServerCtrl');
const WebsocketClientsCtrl = require('./controllers/WebsocketClientsCtrl');
const WebsocketClientsNodejsCtrl = require('./controllers/WebsocketClientsNodejsCtrl');
const WebsocketClientsBrowserCtrl = require('./controllers/WebsocketClientsBrowserCtrl');
const WebCtrl = require('./controllers/WebCtrl');
const MobCtrl = require('./controllers/MobCtrl');
const DatabaseCtrl = require('./controllers/DatabaseCtrl');
const RouterCtrl = require('./controllers/RouterCtrl');
const ContactCtrl = require('./controllers/ContactCtrl');
const NotfoundCtrl = require('./controllers/NotfoundCtrl');

// controllers - playground
const Controller_hooksCtrl = require('./controllers/playground/Controller_hooksCtrl');
const ModelCtrl = require('./controllers/playground/ModelCtrl');
const View_rgIncCtrl = require('./controllers/playground/View_rgIncCtrl');
const View_loadViewsCtrl = require('./controllers/playground/View_loadViewsCtrl');
const View_lazyJSCtrl = require('./controllers/playground/View_lazyJSCtrl');
const DataRgCtrl = require('./controllers/playground/DataRgCtrl');
const DataRgListenersCtrl = require('./controllers/playground/DataRgListenersCtrl');
const CookieCtrl = require('./controllers/playground/CookieCtrl');
const FormCtrl = require('./controllers/playground/FormCtrl');
const LoginCtrl = require('./controllers/playground/LoginCtrl');
const LoginokCtrl = require('./controllers/playground/LoginokCtrl');
const Navig1Ctrl = require('./controllers/playground/Navig1Ctrl');
const Navig2Ctrl = require('./controllers/playground/Navig2Ctrl');

// auth
const auth = new syslib.Auth(authOpts);

// preflight/postflight
const pref1 = async (trx) => { console.log('PREFLIGHT 1 - trx::', trx); };
const pref2 = async (trx) => { console.log('PREFLIGHT 2 - trx::', trx); };
const postf1 = async (trx) => { console.log('POSTFLIGHT 1 - trx::', trx); };
const postf2 = async (trx) => { console.log('POSTFLIGHT 2 - trx::', trx); };

// app
const app = new App();
app
  .controllers([
    // docs
    HomeCtrl,
    WebsocketServerCtrl,
    WebsocketClientsCtrl,
    WebsocketClientsNodejsCtrl,
    WebsocketClientsBrowserCtrl,
    WebCtrl,
    MobCtrl,
    DatabaseCtrl,
    RouterCtrl,
    ContactCtrl,

    // playground
    Controller_hooksCtrl,
    ModelCtrl,
    View_rgIncCtrl,
    View_loadViewsCtrl,
    View_lazyJSCtrl,
    DataRgCtrl,
    DataRgListenersCtrl,
    CookieCtrl,
    FormCtrl,
    LoginCtrl,
    LoginokCtrl,
    Navig1Ctrl,
    Navig2Ctrl,

    // not found
    NotfoundCtrl
  ])
  .auth(auth) // needed for route authGuards
  // .preflight(pref1, pref2)
  // .postflight(postf1, postf2)
  .routes(routes)
  .viewsCached(viewsCached)
  .debugger($debugOpts);

