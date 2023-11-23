import { Injectable } from '@nestjs/common';

@Injectable()
export class TextGenerator {
    getHello(): string {
        return 'Hello World!';
    }
}