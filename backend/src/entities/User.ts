import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  name?: string;

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

    const avatar_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';

    if (!this.avatar) {
      this.avatar = avatar_url;
    }
  }
}

export { User };
