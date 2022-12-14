import { CreateDisciplineInput } from './create-discipline.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  id?: string;
}
