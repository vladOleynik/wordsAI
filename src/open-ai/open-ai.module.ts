import { Module } from '@nestjs/common';
import {ChatGpt} from "./services/chat-gpt";
import { ChatGptController } from './controllers/chat-gpt.controller';

@Module({
    imports: [],
    controllers: [ChatGptController],
    providers: [ChatGpt],
})
export class OpenAiModule {}
