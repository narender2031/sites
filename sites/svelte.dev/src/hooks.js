// need to do this first before importing database, etc.
import dotenv from 'dotenv';
dotenv.config();

import * as cookie from 'cookie';
import * as session from '$lib/db/session';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
	request.locals.cookies = cookie.parse(request.headers.cookie || '');
	request.locals.user = await session.read(request.locals.cookies.sid);

	return resolve(request);
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
	return {
		user: request.locals.user
	};
}
