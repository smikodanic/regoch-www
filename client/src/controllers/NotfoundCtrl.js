const { Controller } = require('regoch-web');


class NotfoundCtrl extends Controller {

  async loader(trx) {
    console.error(`404 not found: ${trx.uri}`);
    await this.loadView('#primary', 'pages/notfound/primary.html', 'sibling');
  }

}


module.exports = NotfoundCtrl;
