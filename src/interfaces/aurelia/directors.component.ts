import { Director } from '../../domain/model/director/director';
import { Blockbuster } from '../../domain/model/director/blockbuster';
import { DirectorRepository } from '../../domain/model/director/director.repository';
import { DirectorRepositoryLocalStorage } from '../../infrastructure/persistence/localstorage/director.repository.localstorage';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)

export class DirectorsComponent {
    router              : Router;
    directors           : Director[];
    directorRepository  : DirectorRepository;
    title               : string = "List of directors";
    
    constructor(router: Router){
        this.router = router;
        this.directorRepository = new DirectorRepositoryLocalStorage();
        this.directorRepository.findAll()
            .then((directors: Director[]) => {
                this.directors = directors;
            });
    }

    getMovieName(blockbusters: Blockbuster[]): string {
        return  blockbusters && blockbusters.length ? 
                blockbusters[0].movieName : '';
    }

    goToDetail(director: Director): void {
        this.router.navigateToRoute('director', { id: director.fullName })   
    }

}