"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticletypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_articletype_dto_1 = require("./create-articletype.dto");
class UpdateArticletypeDto extends (0, mapped_types_1.PartialType)(create_articletype_dto_1.CreateArticletypeDto) {
}
exports.UpdateArticletypeDto = UpdateArticletypeDto;
//# sourceMappingURL=update-articletype.dto.js.map