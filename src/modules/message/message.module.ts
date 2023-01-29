import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat, Message, Notification } from 'src/database/entities';
import { Services } from 'src/utils/constants';
import { ChatModule } from 'src/modules/chat/chat.module';
import { MessageController } from './controllers/message.controller';
import { MessageService } from './services/message.service';
import { NotificationModule } from 'src/modules/notification/notification.module';
import { NotificationService } from 'src/modules/notification/services/notification.service';
import { FreelancerModule } from 'src/modules/freelancer/freelancer.module';
import { EmployerModule } from 'src/modules/employer/employer.module';

@Module({
  imports: [
    ChatModule,
    FreelancerModule,
    EmployerModule,
    forwardRef(() => NotificationModule),
    TypeOrmModule.forFeature([Message, Chat, Notification]),
  ],
  exports: [{ provide: Services.MESSAGES, useClass: MessageService }],
  controllers: [MessageController],
  providers: [
    { provide: Services.MESSAGES, useClass: MessageService },
    NotificationService,
    MessageService,
  ],
})
export class MessageModule {}
