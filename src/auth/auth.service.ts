import {
	Injectable,
} from '@nestjs/common';
import { User } from '../users/users.service';

@Injectable()
export class AuthService
{
	async returnUser(userId: number, name: string, accessToken: string, refreshToken: string): Promise<any> {
		let user:User = {userId, name, accessToken, refreshToken}
		return user;
	}
}
