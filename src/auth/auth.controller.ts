import {
	Controller,
	Get,
	Req,
	Res,
	UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request, CookieOptions } from 'express'

@Controller('api/auth')
export class AuthController {

	@Get('strava')
	@UseGuards(AuthGuard('strava'))
	async getUserFromStravaLogin(@Req() req): Promise<any> {
		return req.user;
	}

	@Get('strava/callback')
	@UseGuards(AuthGuard('strava'))
	findAll(@Req() req, @Res() res: Response, @Res({ passthrough: true }) response: Response) {
		response.cookie('accessToken', req.user.accessToken, {sameSite: "lax"})
		response.cookie('refreshToken', req.user.refreshToken, {sameSite: "lax"})
		return res.redirect('/')
	}
}
