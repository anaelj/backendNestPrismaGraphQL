import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from './../../../http/authorization.guard';
import { Parceiro } from './../models/parceiro';
import { ParceiroService } from './../../../services/parceiro.service';
import { Cidade } from './../models/cidade';
import { CidadeService } from 'src/services/cidade.service';

@Resolver(() => Parceiro)
export class ParceiroResolver {
  constructor(
    private parceiroService: ParceiroService,
    private cidadeService: CidadeService
  ) {}

  @Query(() => [Parceiro])
  @UseGuards(AuthorizationGuard)
  parceiros() {
    return this.parceiroService.listAllParceiros();
  }

  @ResolveField(() => Cidade)
  CIDADE(@Parent() parceiro: Parceiro) {
    return this.cidadeService.getCidadeById(parceiro.CODCID);
  }
}
