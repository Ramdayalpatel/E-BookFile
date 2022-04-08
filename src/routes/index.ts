import { Controller } from "../controller/controller";
import { Router } from "express";


class MainRoute {
    routes: Router
    conrtol: Controller
    constructor() {
        this.routes = Router()
        this.conrtol = new Controller()

        this.routes = Router({ mergeParams: true })
        this.bookRoutes()

    }

    bookRoutes() {
        this.routes.route('/api/v1/insert').post(this.conrtol.insert)
    }
}

export default new MainRoute().routes