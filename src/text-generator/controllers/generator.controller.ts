import {Controller} from '@nestjs/common';
import {TextGenerator} from "../services/text-generator";

@Controller('generator')
export class GeneratorController {
    constructor(private readonly textGenerator: TextGenerator) {
    }

    async test(){
        return this.textGenerator.getHello();
    }
}
