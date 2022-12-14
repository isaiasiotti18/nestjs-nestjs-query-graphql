import { CreateContentInput } from './create-content.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  id?: string;
}
