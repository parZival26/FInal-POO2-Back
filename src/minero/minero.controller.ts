import { Body, Controller, Get, HttpStatus, ParseIntPipe, Post, Req, Res, UseGuards } from '@nestjs/common';
import { MineroService } from './minero.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Request, Response } from 'express';
import { User } from '@prisma/client';

@Controller('minero')
export class MineroController {
    constructor(private readonly mineroService: MineroService) { }

    @Post('salida')
    @UseGuards(JwtAuthGuard)
    async registrarSalida(
        @Body("cedula", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) cedula: number,
        @Req() req: Request,
        @Res() res: Response
    ): Promise<void> {
        const userId = (req.user as User).id;
        await this.mineroService.registrarSalida(cedula, userId);
        res.status(HttpStatus.OK).json({ message: 'Salida registrada correctamente' });

    }

    @Get('salidas')
    @UseGuards(JwtAuthGuard)
    async obtenerSalidas(
        @Res() res: Response
    ): Promise<void> {
        const salidas = await this.mineroService.obtenerSalidas();
        const salidasTransformadas = salidas.map(salida => {
            return {
                ...salida,
                cedula: Number(salida.cedula)
            };
        });
        res.status(HttpStatus.OK).json(salidasTransformadas);
    }
}
