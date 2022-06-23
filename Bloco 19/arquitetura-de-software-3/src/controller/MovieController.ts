import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness"
import { MovieInputDTO } from "../model/Movie";

export class MovieController {
    async createMovieController (req:Request, res: Response) {
        try {
            
            const { title, description, durationInMinutes, yearOfRelease} = req.body

            const movieBusiness = new MovieBusiness()
            const movie :MovieInputDTO = {
                title,
                description,
                durationInMinutes,
                yearOfRelease
            }
            await movieBusiness.createMovieBusiness(movie)

            res.status(201).send({ message: "Filme cadastrado com sucesso" });
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}