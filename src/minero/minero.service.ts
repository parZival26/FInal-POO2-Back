import { Injectable } from '@nestjs/common';
import { Prisma, RegistroSalida } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class MineroService {
    constructor(private readonly prismaService: PrismaService) { }

    async registrarSalida(cedula: number, userId: number): Promise<RegistroSalida> {
        return this.prismaService.registroSalida.create({
            data: {
                fecha: new Date(),
                cedula: cedula,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
    }

    async obtenerSalidas(): Promise<RegistroSalida[]> {
        return this.prismaService.registroSalida.findMany();
    }
}
