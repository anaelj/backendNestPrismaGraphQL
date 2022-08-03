import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CidadeService } from 'src/services/cidade.service';
import { Cidade } from '../models/cidade';
import { AuthorizationGuard } from './../../../http/authorization.guard';

@Resolver(() => Cidade)
export class CidadeResolver {
  constructor(private cidadeService: CidadeService) {}

  @Query(() => [Cidade])
  @UseGuards(AuthorizationGuard)
  cidades() {
    return this.cidadeService.listAllParceiros();
  }
}
