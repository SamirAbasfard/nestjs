"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    console.log(req.path);
    console.log('-----');
    next();
}
exports.logger = logger;
//# sourceMappingURL=logger.middleware.js.map