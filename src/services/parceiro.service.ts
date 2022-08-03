import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class ParceiroService {
  constructor(private prisma: PrismaService) {}

  listAllParceiros() {
    return this.prisma.parceiro.findMany();
  }
}
