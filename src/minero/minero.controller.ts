import { Body, Controller, HttpStatus, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { MineroService } from './minero.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { User } from '@prisma/client';

@Controller('minero')
export class MineroController {
    constructor(private readonly mineroService: MineroService) { }

    @Post('salida')
    @UseGuards(JwtAuthGuard)
    async registrarSalida(
        @Body("cedula", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) cedula: number,
        @Req() req: Request
    ): Promise<void> {
        const userId = (req.user as User).id;
        await this.mineroService.registrarSalida(cedula, userId);


    }
}
