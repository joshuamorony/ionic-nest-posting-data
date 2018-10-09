import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { MessageDto } from './message.dto';
import { QuotesService } from '../services/quotes.service';

@Controller('messages')
export class MessagesController {

    constructor(private quotesService: QuotesService){

    }

    @Post()
    createMessage(@Body() message: MessageDto){
        console.log(message);
        return message;
    }

    @Get()
    getMessages(){
        return this.quotesService.getQuotes();
    }

    @Get(':id')
    getMessage(@Param('id') id){
        return this.quotesService.getQuote(id);
    }

}
