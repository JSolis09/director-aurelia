import { Director } from '../../domain/model/director/director';
import { DirectorRepository } from '../../infrastructure/persistance/localStorage/director.repository' ;

export class DirectorsComponent {
    directors: Director[];
    directorRepository: DirectorRepository;
    title: string = "List of directors";

    constructor(){
        this.directorRepository = new DirectorRepository;
        this.directorRepository.findAll()
            .then((directors: Director[]) => {
                this.directors = directors;
            });
    }

}