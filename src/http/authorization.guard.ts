import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
// import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private declaredvarforExample: string;

  constructor(private configService: ConfigService) {
    this.declaredvarforExample = this.configService.get('DB_CONNECTION') ?? '';
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { req, res } = GqlExecutionContext.create(context).getContext();

    // const httpContext = context.switchToHttp();
    // const req = httpContext.getRequest();
    // const res = httpContext.getResponse();
    // console.log('req', req);
    // console.log('envvalue', this.declaredvarforExample);
    return true;
  }
}
