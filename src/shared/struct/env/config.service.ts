import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from './config.interface';

@Injectable()
export class EnvConfigService implements IConfig {

  constructor(private nestService: ConfigService){}

  getPort(): number {
      return Number(this.nestService.get<number>('PORT'))
  }

  getEnv(): string {
      return this.nestService.get<string>('ENV')
  }
}
