import { Injectable } from '@nestjs/common';
import { join } from "path";

@Injectable()
export class MysqlService {

  host = process.env.DB_HOST || "mariadb"

  port = +process.env.DB_PORT || 3306

  username = process.env.DB_USERNAME || "root"

  password = process.env.DB_PASSWORD || "123456"

  database = process.env.DB_DATABASE_NAME || "elearning"

  migrationRun = true

  retryDelay = 3

  synchronize = process.env.NODE_ENV === 'development'

  entities = [
    join(__dirname, '../../modules/public/**/*.entity{.ts,.js}')
  ]

  migrations = [
    join(__dirname, '../../migrations/public/*.{ts,.js}')
  ]
}
