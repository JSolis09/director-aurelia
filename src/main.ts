import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import { infrastructure } from './infrastructure/resources';
import { context } from './context';

//Configure Bluebird Promises.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  aurelia.start().then(() => aurelia.setRoot());
}
