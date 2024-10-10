import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ url }) => {
    if (url.pathname === '/') {
        throw redirect(307, '/home');
    }
};