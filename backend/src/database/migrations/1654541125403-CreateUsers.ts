import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1654541125403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'bio',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'phone',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'avatar',
          type: 'varchar',
        },
        {
          name: 'isSocialAuth',
          type: 'boolean',
          default: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
