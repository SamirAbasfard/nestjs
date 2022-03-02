import { CreateArticletypeDto } from './dto/create-articletype.dto';
import { UpdateArticletypeDto } from './dto/update-articletype.dto';
export declare class ArticletypeService {
    create(createArticletypeDto: CreateArticletypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArticletypeDto: UpdateArticletypeDto): string;
    remove(id: number): string;
}
