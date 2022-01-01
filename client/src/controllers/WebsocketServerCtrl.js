const { Controller, syslib } = require('regoch-web');


class WebsocketServerCtrl extends Controller {

  constructor(app) {
    super();
  }


  async loader(trx) {
    this.setTitle('Regoch Websocket Server');
    this.setDescription('Ultra fast Websocket Server with builtin JS framework for creating real-time, complex apps.');
    this.setKeywords(' websocket, server, socket, ws, RFC 6455, real-time, realtime, tcp, websocket server, regoch');
    this.setLang('en');

    this.loadCSS(['https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-coy.min.css']);

    await this.loadView('#primary', 'pages/websocket/server/primary.html', 'sibling');
    this.loadViews([
      ['#sidebar', 'pages/websocket/server/sidebar.html'],
      ['#article-introduction', 'pages/websocket/server/article-introduction.html'],
      ['#article-rfc6455', 'pages/websocket/server/article-rfc6455.html'],
      ['#article-rwserver', 'pages/websocket/server/article-rwserver.html'],
      ['#article-rwhttpserver', 'pages/websocket/server/article-rwhttpserver.html'],
      ['#article-router', 'pages/websocket/server/article-router.html'],
      ['#article-stringext', 'pages/websocket/server/article-stringext.html'],
      ['#article-helper', 'pages/websocket/server/article-helper.html'],
      ['#article-datatransfer', 'pages/websocket/server/article-datatransfer.html'],
      ['#article-socketextension', 'pages/websocket/server/article-socketextension.html'],
      ['#article-storage', 'pages/websocket/server/article-storage.html'],
      ['#article-subprotocol', 'pages/websocket/server/article-subprotocol.html'],
    ], true);
  }


  async postrend(trx) {
    this.showButtonBars = true;
    await this.rgIf('showButtonBars');

    await syslib.util.sleep(1300);
    this.lazyJS([
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js',
      '/assets/js/highlight-custom.js',
      '/assets/plugins/jquery.scrollTo.min.js',
      '/assets/plugins/lightbox/dist/ekko-lightbox.min.js',
      '/assets/js/docs.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js'
    ]);
  }


  destroy(elem, event) {
    this.unlazyJS();
  }


}


module.exports = WebsocketServerCtrl;
