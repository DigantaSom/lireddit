import { RegisterInput } from '../resolvers/RegisterInput';

export const validateRegister = (options: RegisterInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid email format',
      },
    ];
  }
  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'Username cannot contain @',
      },
    ];
  }
  if (options.username.length <= 4) {
    return [
      {
        field: 'username',
        message: 'Username length must be greater than 4',
      },
    ];
  }
  if (options.password.length <= 4) {
    return [
      {
        field: 'password',
        message: 'password length must be greater than 4',
      },
    ];
  }

  return null;
};
