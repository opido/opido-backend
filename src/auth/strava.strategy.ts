import { PassportStrategy } from '@nestjs/passport';
import {
	HttpService,
	Injectable,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-oauth2';
import { stringify } from 'querystring';
import * as dotenv from 'dotenv';

dotenv.config()
export const clientID = process.env.CLIENT_ID
export const clientSecret = process.env.CLIENT_SECRET
export const callbackURL = process.env.CALLBACK_URL

@Injectable()

export class StravaStrategy extends PassportStrategy(Strategy, 'strava')
{
	constructor(
		private authService: AuthService,
		private http: HttpService,
	) {
		super({
			authorizationURL: `http://www.strava.com/oauth/authorize?${ stringify({
				client_id    : clientID,
				approval_prompt: "force",
				redirect_uri : callbackURL,
				response_type: 'code',
				scope        : 'activity:read_all',
			}) }`,
			tokenURL        : 'https://www.strava.com/oauth/token',
			grant_type			: "authorization_code",
			scope           : 'activity:read_all',
			clientID,
			clientSecret,
			callbackURL,
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
	): Promise<any> {
		const { data } = await this.http.get('https://www.strava.com/api/v3/athlete', {
				headers: { Authorization: `Bearer ${ accessToken }` },
			})
			.toPromise();		
		return this.authService.returnUser(data.id, data.username, accessToken, refreshToken);
	}
}
