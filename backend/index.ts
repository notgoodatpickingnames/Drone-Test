import express, { Application, Request, Response } from 'express';

import { Tello } from './tello/tello';

const app: Application = express();
const port = 3100;

const tello = new Tello();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/drone/:command', async (req: Request, res: Response): Promise<Response> => {
        console.log(req.params);

        tello.sendMessage(req.params.command);

        return res.status(200).send({
            message: `COMMAND: ${req.params.command}`,
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}