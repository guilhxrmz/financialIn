import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { mockCategory } from '@common/mocks';
import { ObjectID } from 'mongodb'
import {
  Column,
  Entity,
} from 'typeorm';
@Entity()
export class CreateCategoryDto {
  @Column()
  name: string;
}
