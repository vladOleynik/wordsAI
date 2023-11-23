import {Injectable} from '@nestjs/common';
import OpenAI from "openai";
import * as process from "process";

@Injectable()
export class ChatGpt {
    openai: OpenAI

    //TODO add params in constructor
    constructor() {
        this.openai = new OpenAI({apiKey:process.env.GPT_KEY})
    }

    async test() {
        return this.openai.chat.completions.create({
            messages: [{role: "system", content: "Ти можеш створити тест для англійского левла A1?"}],
            model: "gpt-3.5-turbo",
        });
    }
}