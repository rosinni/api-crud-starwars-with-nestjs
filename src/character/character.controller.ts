import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CreateCharacterdto} from './dto/createCharacter.dto'


@Controller('character')
export class CharacterController {
    @Get()
    getCharacter():string{
        return 'Character'
    }

    @Post()
    createCharacter(@Body() character:CreateCharacterdto):string{
        console.log(character);
        
        return 'Created'
    }

    @Put(':id')
    updateCharacter(@Body() character, @Param('id') id): string{
        console.log(character);
        console.log(id);
        
        return 'Updated'
    }

    @Delete(':id')
    deleteCharacter(@Param('id') id):string{
        return `deleted ${id}` 
    }
}
