import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class CidadeService {
  constructor(private prisma: PrismaService) {}

  listAllParceiros() {
    return this.prisma.cidade.findMany();
  }

  getCidadeById(id: number) {
    return this.prisma.cidade.findUnique({
      where: {
        CODCID: id,
      },
    });
  }
}
