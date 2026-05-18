import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(email: string, password: string) {
    return {
      message: 'register stub',
      email,
    };
  }

  async login(email: string, password: string) {
    return {
      message: 'login stub',
      email,
    };
  }
}