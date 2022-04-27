import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());


      //Exercício 1

      const server = app.listen(3003, () => {
        if (server) {
          const address = server.address() as AddressInfo;
          console.log(`Server is running in https://localhost:${address.port}`);
        } else {
          console.error(`Server is not running in https://localhost`);
        }
      });

      //a) O raw devolve exatamente o que o banco MySQL devolveu.

      //b)

      const searchActor = async (name: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT * FROM Actor WHERE name = "${name}"
        `)
        return result[0]
      }

      searchActor("Rodrigo Santoro")
	    .then(result => {
		  console.log(result)
	    })
	    .catch(err => {
		  console.log(err)
	    });

      //c)

      const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
        
        const count = result[0][0].count;
        return count;
      };

      countActors("female")
	    .then(result => {
		  console.log(result)
	    })
	    .catch(err => {
		  console.log(err)
	    });

      //Exercício 2

      //a)

      const updateActor = async (id: string, salary: number): Promise<any> => {
        await connection("Actor")
          .update({
            salary: salary,
          })
          .where("id", id);
      };

      updateActor("001", 700000)
	    .then(result => {
		  console.log("Salário atualizado.")
	    })
	    .catch(err => {
		  console.log(err)
	    });

      //b)

      const deleteActor = async (id: string): Promise<void> => {
        await connection("Actor")
          .delete()
          .where("id", id);
      }; 

      deleteActor("001")
	    .then(result => {
		  console.log("Ator deletado.")
	    })
	    .catch(err => {
		  console.log(err)
	    });

      //c)

      const avgSalary = async (gender: string): Promise<any> => {
        const result = await connection("Actor")
          .avg("salary as average")
          .where({ gender });
      
        return result[0].average;
      };

      avgSalary("female")
	    .then(result => {
		  console.log(result)
	    })
	    .catch(err => {
		  console.log(err)
	    });

      //Exercício 3

      //a)

      app.get("/actor/:id", async (req: Request, res: Response) => {
        try {
          const id = req.params.id;
          const result = await connection.raw(`
          SELECT * FROM Actor WHERE id = "${id}"
        `);

          res.status(200).send(result[0])
        
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });

      //b)

      app.get("/actor?gender", async (req: Request, res: Response) => {
        try {
        const result = await connection("Actor").count().where({ gender: req.query.gender });
        res.status(200).send(result);
        
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });

      //Exercício 4

      //a) 

      app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
        try {
          await connection("Actor")
            .update({
              salary: req.body.salary,
            })
            .where({ id: req.params.id });
      
          res.status(200).send({ message: "Salário editado" });
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });

      //b)

      app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
        try {
          await connection("Actor").delete().where({ id: req.params.id });
      
          res.status(200).send({ message: "Ator deletado" });
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });