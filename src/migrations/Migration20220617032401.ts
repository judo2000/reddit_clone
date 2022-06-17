import { Migration } from '@mikro-orm/migrations';

export class Migration20220617032401 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "update_at" to "updated_at";');
  }

}
