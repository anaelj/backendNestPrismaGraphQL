import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Cidade } from './cidade';

@ObjectType()
export class Parceiro {
  @Field(() => ID)
  CODPARC: number;
  @Field()
  CODVEND: number;
  @Field()
  NOMEPARC: string;
  @Field({ nullable: true })
  RAZAOSOCIAL: string;
  @Field()
  TIPPESSOA: string;
  @Field(() => Cidade, { nullable: true })
  CIDADE: Cidade;
  @Field()
  CODPARCMATRIZ: number;
  CODCID: number;
}
