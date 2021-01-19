import { Injectable } from '@nestjs/common';

export type User = {
	userId    	: number,
	name      	: string,
	accessToken	: string,
	refreshToken: string,
};

@Injectable()
export class UsersService
{
	private readonly users: User[];

	constructor() {
	}

	async findOne(
		field: string,
		externalId: string,
	): Promise<User | undefined> {
		return this.users.find(user => user[field] === externalId);
	}
}
