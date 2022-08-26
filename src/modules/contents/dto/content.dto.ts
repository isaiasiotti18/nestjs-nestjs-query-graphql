import { LessonDTO } from './../../lessons/dto/lesson.dto';
import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../common/bases/dto/base.dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO)
export class ContentDTO extends BaseDTO {
  @FilterableField({ nullable: true })
  description: string;

  @FilterableField({ nullable: true })
  linkContent: string;
}
