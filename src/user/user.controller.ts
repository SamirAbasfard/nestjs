import { Controller, Get, Query, Param, Body, Post, ParseIntPipe, ParseBoolPipe, ParseArrayPipe } from "@nestjs/common";

@Controller('user')
export class UserController {

    @Post(':id')
    //findAll(@Query() query,@Param('id',ParseIntPipe) id : number,@Body() body){
    //findAll(@Query() query, @Param('id', ParseBoolPipe) id: number, @Body() body) {
    findAll(@Query() query, @Param('id', ParseBoolPipe) id: number, @Body('taskID', new ParseArrayPipe({items:String,separator:','})) taskID2:string[]) {
        return "all Items returned" + '--Query string--'
            + query.limit + ' age=' + query.age
            + '--param is:' + id
            + '---->' + 'my body is:' + taskID2[0] + '----' + taskID2[1]
            + '(#).'
    }
}