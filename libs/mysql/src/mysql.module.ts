import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from "path";
import { MysqlService } from './mysql.service';
import { OrmConfig } from './ormconfig';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: (config: MysqlService) => ({
      type: 'mysql',
      ...config
    }),
    inject: [MysqlService],
  })],
  providers: [MysqlService]
})
export class MysqlModule { }
