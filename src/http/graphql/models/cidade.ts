import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Cidade {
  @Field(() => ID)
  CODCID: number;
  @Field()
  NOMECID: string;
  @Field({ nullable: true })
  UF: number;
}
