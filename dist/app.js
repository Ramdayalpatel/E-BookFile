"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
let app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(index_1.default);
app.listen(8080, () => {
    console.log('server');
});
//# sourceMappingURL=app.js.map