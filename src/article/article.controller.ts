import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {

    @Get()
    show(){
        return "from show in article controller"
    }
}
