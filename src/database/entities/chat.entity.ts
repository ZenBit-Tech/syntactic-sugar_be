import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employer, Freelancer, Job, Message } from '.';

@Entity({ name: 'chat' })
export class Chat {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '10.02.2023' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: '10.02.2023' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @OneToMany(() => Message, message => message.chat)
  messages: Message[];

  @ApiProperty()
  @ManyToOne(() => Freelancer, freelancer => freelancer.chats)
  freelancer: Freelancer;

  @ApiProperty()
  @ManyToOne(() => Employer, employer => employer.chats)
  employer: Employer;

  @ApiProperty()
  @ManyToOne(() => Job, job => job.chats)
  job: Job;
}