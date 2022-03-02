"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticletypeController = void 0;
const common_1 = require("@nestjs/common");
const articletype_service_1 = require("./articletype.service");
const create_articletype_dto_1 = require("./dto/create-articletype.dto");
const update_articletype_dto_1 = require("./dto/update-articletype.dto");
let ArticletypeController = class ArticletypeController {
    constructor(articletypeService) {
        this.articletypeService = articletypeService;
    }
    create(createArticletypeDto) {
        return this.articletypeService.create(createArticletypeDto);
    }
    findAll() {
        return this.articletypeService.findAll();
    }
    findOne(id) {
        return this.articletypeService.findOne(+id);
    }
    update(id, updateArticletypeDto) {
        return this.articletypeService.update(+id, updateArticletypeDto);
    }
    remove(id) {
        return this.articletypeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_articletype_dto_1.CreateArticletypeDto]),
    __metadata("design:returntype", void 0)
], ArticletypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticletypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticletypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_articletype_dto_1.UpdateArticletypeDto]),
    __metadata("design:returntype", void 0)
], ArticletypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticletypeController.prototype, "remove", null);
ArticletypeController = __decorate([
    (0, common_1.Controller)('articletype'),
    __metadata("design:paramtypes", [articletype_service_1.ArticletypeService])
], ArticletypeController);
exports.ArticletypeController = ArticletypeController;
//# sourceMappingURL=articletype.controller.js.map