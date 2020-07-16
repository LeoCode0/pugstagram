import sirv from 'sirv';
import compression from 'compression';
import pola from 'polka';
import * as sapper from '@sapper/server';

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err)
    });