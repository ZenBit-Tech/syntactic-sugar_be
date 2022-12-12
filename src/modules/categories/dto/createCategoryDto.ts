import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'IT, computers & Internet' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
