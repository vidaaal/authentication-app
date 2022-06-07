import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  password?: string;

  @Column({
    type: 'text',
  })
  bio?: string;

  @Column()
  avatar?: string;

  @Column({
    default: false,
  })
  isSocialAuth?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
