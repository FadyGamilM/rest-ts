import { Request, Response, Express } from "express";

const router = (app: Express) => {
    // healtcheck endpoiint
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200);
    })

}

export default router;