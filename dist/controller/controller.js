"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const bookModel_1 = require("..//models/bookModel");
let BooKObject = bookModel_1.bookModel;
class Controller {
    constructor() {
        this.insert = async (req, res) => {
            console.log(req.body);
            // BooKObject.create()
        };
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map