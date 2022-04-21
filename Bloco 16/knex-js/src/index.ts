import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

//Atividade feita com o raw

/* app.post("/actor", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Date.now().toString();

    await connection.raw(`
    INSERT INTO Actor
    (id, name, salary, birth_date, gender)
    VALUES
    (
     ${id},
     '${req.body.name}',
     ${req.body.salary},
     '${req.body.birthDate}',
     '${req.body.gender}'
     );
    `);
    res.status(201).send({ message: "Ator criado" });
} catch (error: any) {
  res.status(500).send(error.sqlMessage || error.message);
}
});

const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in https://localhost:${address.port}`);
    } else {
      console.error(`Server is not running in https://localhost`);
    }
  });

  
  app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
      
        const result =  await connection.raw(`
            SELECT * FROM Actor
        `)
  
      res.status(200).send(result[0]);
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });
 */

  //Atividade feita com query builder

  app.post("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Date.now().toString();
  
      await connection("Actor").insert({
        id,
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      });
  
      res.status(201).send({ message: "Ator criado" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });
  
  const server = app.listen(3003, () => {
      if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in https://localhost:${address.port}`);
      } else {
        console.error(`Server is not running in https://localhost`);
      }
    });
  
    
    app.get("/actor", async (req: Request, res: Response): Promise<void> => {
      try {
        
          const result =  await connection("Actor").select() //o ".select()" não é necessário
    
        res.status(200).send(result);
      } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
      }
    });

    app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
        try {
          await connection("Actor")
            .update({
              salary: req.body.salary,
            })
            .where({ id: req.params.id });
      
          res.status(200).send({ message: "Ator editado" });
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });

      app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
        try {
          await connection("Actor").delete().where({ id: req.params.id });
      
          res.status(200).send({ message: "Ator deletado" });
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });