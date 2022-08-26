import { Discipline } from './../../disciplines/entities/discipline.entity';
import { BaseEntity } from '../../../common/bases/entities/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => Discipline, (disciplines) => disciplines.students, {
    nullable: true,
  })
  disciplines: Discipline[];
}
