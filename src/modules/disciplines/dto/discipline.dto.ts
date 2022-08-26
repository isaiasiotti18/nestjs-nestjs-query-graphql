import { StudentDTO } from './../../students/dto/student.dto';
import { BaseDTO } from '../../../common/bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import { FilterableOffsetConnection } from '@nestjs-query/query-graphql';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO, { nullable: true })
export class DisciplineDTO extends BaseDTO {
  name: string;
}
