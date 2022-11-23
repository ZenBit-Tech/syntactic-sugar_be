import { CreateUserDto } from 'src/modules/user/dtos/createUser.dto';
import { User } from 'src/database/entities/users.entity';
import { ResetPasswordDto } from 'src/modules/auth/dtos/resetPassword.dto';
import { UserRoles } from 'src/utils/constants';
import { IToken } from './IToken';

export interface IAuthService {
  registration(createUserDto: CreateUserDto);
  sendConfirmation(user: User);
  confirmEmail(id: string);
  forgotPassword(email: string);
  resetPassword(resetPasswordDto: ResetPasswordDto);
  signupGoogle(token: string);
  login(userDto: CreateUserDto);
  loginByGoogle(token: string);
  addUserRole(id: string, role: UserRoles): Promise<IToken>;
}
