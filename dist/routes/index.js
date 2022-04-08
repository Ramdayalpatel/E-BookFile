"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller/controller");
const express_1 = require("express");
class MainRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.conrtol = new controller_1.Controller();
        this.routes = (0, express_1.Router)({ mergeParams: true });
        this.bookRoutes();
    }
    bookRoutes() {
        this.routes.route('/api/v1/insert').post(this.conrtol.insert);
    }
}
exports.default = new MainRoute().routes;
//# sourceMappingURL=index.js.map