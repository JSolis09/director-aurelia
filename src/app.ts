import {Router, RouterConfiguration} from 'aurelia-router';

namespace app {

  export class App {
    
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
      config.title = 'TODOS';
      config.map([
        { 
          route     : '', 
          name      :'directorDetail', 
          moduleId  : './interface/aurelia/director.component',   
          title     : 'Director Detail'
        },
        { 
          route     : '', 
          name      :'directors', 
          moduleId  : './interface/aurelia/directors.component',   
          title     : 'Directors'
        }
      ]);
      this.router = router;
    }

  }

}
