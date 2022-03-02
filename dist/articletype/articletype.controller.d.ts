import { ArticletypeService } from './articletype.service';
import { CreateArticletypeDto } from './dto/create-articletype.dto';
import { UpdateArticletypeDto } from './dto/update-articletype.dto';
export declare class ArticletypeController {
    private readonly articletypeService;
    constructor(articletypeService: ArticletypeService);
    create(createArticletypeDto: CreateArticletypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateArticletypeDto: UpdateArticletypeDto): string;
    remove(id: string): string;
}
