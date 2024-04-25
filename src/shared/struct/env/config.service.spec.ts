import { Test, TestingModule } from "@nestjs/testing";
import { ConfigService } from "./config.service";
import { beforeEach, describe } from "node:test";

describe('Config Enviaroment', () => {
  let configService: ConfigService
  beforeEach(async () => {
    const testingModule:  TestingModule = await  Test.createTestingModule({
      providers: [ConfigService]
    }).compile()

    configService = testingModule.get<ConfigService>(ConfigService)
  })

  it('Should be defined', () => {
    expect(ConfigService).toBeDefined(  )
  })
})