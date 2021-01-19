import {
  HttpModule,
  Module,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { StravaStrategy } from './strava.strategy';

@Module({
  imports    : [
    UsersModule,
    HttpModule,
  ],
  providers  : [
    AuthService,
    StravaStrategy,
  ],
  controllers: [
    AuthController,
  ],
})
export class AuthModule
{
}
