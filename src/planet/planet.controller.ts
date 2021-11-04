import { Controller, Get } from '@nestjs/common';

@Controller('planets')
export class PlanetController {

    @Get()
    getPlanet(): string{
        return 'Planets'
    }
}
