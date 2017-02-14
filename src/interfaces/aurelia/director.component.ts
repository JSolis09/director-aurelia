import { Director } from '../../domain/model/director/director';
//import { Blockbuster } from '../../domain/model/director/blockbuster';
import { DirectorRepository } from '../../domain/model/director/director.repository';
import { DirectorRepositoryLocalStorage } from '../../infrastructure/persistence/localstorage/director.repository.localstorage';

import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)

export class DirectorComponent {
    router              : Router;
    director            : Director;
    directorRepository  : DirectorRepository;
    title               : string = "Director detail";

    constructor(router: Router) {
        this.router             = router;
        this.directorRepository = new DirectorRepositoryLocalStorage();
    }
    
    activate(params: any): void {
        this.directorRepository.find(params.id)
            .then((director: Director) => this.director = director)
            .catch(() => console.error("Director not found"));
    }

    goBack(): void {
        this.router.navigateBack();
    }

    save(): void {
        this.directorRepository.store(this.director)
        .then((response) => {
            this.goBack();
        });
    }

}