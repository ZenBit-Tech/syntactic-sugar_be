import { Role } from './src/modules/roles/roles.entity';
import { DataSource } from 'typeorm';
import { User } from './src/modules/users/users.entity';
import { UserRole1667482792749 } from './src/migrations/1667482792749-User_Role';


export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'mysql_db',
  entities: [User, Role],
  migrations: [UserRole1667482792749],
  synchronize: true,
});
