import { ConfigService } from '@nestjs/config';
import { IConfig } from './config.interface';
export declare class EnvConfigService implements IConfig {
    private nestService;
    constructor(nestService: ConfigService);
    getPort(): number;
    getEnv(): string;
}
