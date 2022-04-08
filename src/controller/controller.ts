import { bookModel } from "..//models/bookModel";
import { Request, Response } from "express";


let BooKObject = bookModel;

export class Controller {
    constructor() { }

    insert = async (req: Request, res: Response) => {
        console.log(req.body);

        // BooKObject.create()

    }
}