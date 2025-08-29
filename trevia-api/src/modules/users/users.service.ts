import { User } from '@database/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public async findById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  public async findOne(name: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ name });
  }
}
