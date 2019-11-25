import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ICurrentUser } from '../interfaces/current-user.interface';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext: any = GqlExecutionContext.create(context).getContext();
    if (!gqlContext.headers.authorization) {
      return false;
    }

    const userAccessToken = gqlContext.headers.authorization.split(' ').pop();

    const user: ICurrentUser = this.authService.verifyToken(
      userAccessToken,
    );
    if (!user) {
      return false;
    }
    gqlContext.user = user;

    return true;
  }
}
