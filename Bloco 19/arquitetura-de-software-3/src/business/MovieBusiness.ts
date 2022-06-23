import { MovieDatabase } from "../data/MovieDataBase";
import { invalidDescription, invalidDurationInMinutes, invalidTitle, invalidYearOfRelease } from "../error/CustomError";
import { movie, MovieInputDTO } from "../model/Movie";
import { generateId } from "../services/generateId";

export class MovieBusiness {
    async createMovieBusiness (input: MovieInputDTO):Promise<void> {
        const { title, description, durationInMinutes, yearOfRelease} = input

        if (!title) {
            throw new invalidTitle()
        }

        if(!description) {
            throw new invalidDescription() 
        }

        if(!durationInMinutes) {
            throw new invalidDurationInMinutes()
        }

        if(!yearOfRelease) {
            throw new invalidYearOfRelease()
        }

        const id = generateId()

        const movieDataBase = new MovieDatabase()
        const movie: movie = {
            id,
            title,
            description,
            durationInMinutes,
            yearOfRelease
        }

        await movieDataBase.create(movie)
    }
}