import { DisciplineDTO } from './../../disciplines/dto/discipline.dto';
import { FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/bases/dto/base.dto';

@ObjectType('Student')
@FilterableOffsetConnection('disciplines', () => DisciplineDTO, {
  nullable: true,
})
export class StudentDTO extends BaseDTO {
  id: string;

  name: string;

  key: string;
}
