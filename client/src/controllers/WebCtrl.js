const { Controller, syslib } = require('regoch-web');


class WebCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    // await this.loadHead('pages/web/head.html', 'inner'); // will cause flicker

    this.setTitle('Regoch Web - The SPA Framework');
    this.setDescription('The Regoch WEB is framework for developing single page, web applications. Very simple for use and extremly fast. SEO optimised.');
    this.setKeywords('regoch, spa, single page app, web applications');
    this.setLang('en');

    this.loadCSS(['https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-coy.min.css']);

    await this.loadView('#primary', 'pages/web/primary.html', 'sibling');
    this.loadViews([
      ['#sidebar', 'pages/web/sidebar.html'],

      ['#article-introduction', 'pages/web/article-introduction.html'],
      ['#article-app', 'pages/web/article-app.html'],

      ['#article-controller', 'pages/web/article-controller.html'],
      ['#article-view', 'pages/web/article-view.html'],
      ['#article-model', 'pages/web/article-model.html'],
      ['#article-datarg', 'pages/web/article-datarg.html'],
      ['#article-datarglisteners', 'pages/web/article-datarglisteners.html'],

      ['#article-router', 'pages/web/article-router.html'],

      ['#article-auth', 'pages/web/article-auth.html'],
      ['#article-cookie', 'pages/web/article-cookie.html'],
      ['#article-eventemitter', 'pages/web/article-eventemitter.html'],
      ['#article-form', 'pages/web/article-form.html'],
      ['#article-httpclient', 'pages/web/article-httpclient.html'],
      ['#article-navig', 'pages/web/article-navig.html'],
      ['#article-util', 'pages/web/article-util.html'],
      // ['#footer', 'pages/web/footer.html']
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

  async destroy(elem, event) {
    this.unlazyJS();
  }


}


module.exports = WebCtrl;
