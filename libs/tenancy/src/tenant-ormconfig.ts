import * as ormconfig from '../../mysql/src/ormconfig';
import { join } from 'path';

module.exports = {
    ...ormconfig,
    synchronize: process.env.NODE_ENV === 'development',
    logging: true,
    entities: [
        join(__dirname, '../../modules/tenant/**/*.entity{.ts,.js}'),
    ],
    migrations: [
        join(__dirname, '../../migrations/tenant/*{.ts,.js}'),
    ],
}