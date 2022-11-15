import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SESSION } from './app.controller';

export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        return Boolean(SESSION.user);
    }
}
