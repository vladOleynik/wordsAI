import {Controller, Get} from '@nestjs/common';
import {ChatGpt} from "../services/chat-gpt";

@Controller('chat-gpt')
export class ChatGptController {
    constructor(private readonly chatGpt: ChatGpt) {
    }
    @Get()
    async test(){
        return this.chatGpt.test()

    }
}
