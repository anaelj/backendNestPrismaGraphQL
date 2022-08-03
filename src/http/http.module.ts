import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
// import { HelloController } from './../hello/hello.controller';
import { DatabaseModule } from './../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { ParceiroResolver } from './graphql/resolvers/parceiro.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { ParceiroService } from './../services/parceiro.service';
import { CidadeResolver } from './graphql/resolvers/cidade.resolver';
import { CidadeService } from './../services/cidade.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [ParceiroResolver, ParceiroService, CidadeResolver, CidadeService],
  // controllers: [HelloController],
})
export class HttpModule {}
