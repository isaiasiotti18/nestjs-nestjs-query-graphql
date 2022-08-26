import { Content } from 'src/modules/contents/entities/content.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/bases/entities/base.entity';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => Content, (contents) => contents.lesson)
  contents: Content[];
}
