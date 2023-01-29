import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/modules/user/services/user.service';
import { Services } from 'src/utils/constants';
import { AuthModule } from 'src/modules/auth/auth.module';
import { User } from 'src/database/entities';
import { UserController } from './controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [{ provide: Services.USER, useClass: UserService }],
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  exports: [
    {
      provide: Services.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
