import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'TODOS';
    config.map([
      { 
        route     : 'director/:id', 
        name      : 'director',
        moduleId  : './interfaces/aurelia/director.component',   
        title     : 'Director Detail'
      },
      { 
        route     : '', 
        name      : 'directors', 
        moduleId  : './interfaces/aurelia/directors.component',   
        title     : 'Directors'
      }
    ]);
    this.router = router;
  }

}
