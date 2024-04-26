import { Test, TestingModule } from "@nestjs/testing";
import { EnvConfigService } from "../../config.service";
import { beforeEach, describe } from "node:test";
import { EnvConfigModule } from "../../config.module";


describe('Config Enviaroment', () => {
  let sut: EnvConfigService

  beforeEach(async () => {
    const testingModule:  TestingModule = await  Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService]
    }).compile()

    sut = testingModule.get<EnvConfigService>(EnvConfigService)
  })

  it('Should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('Should return the variable PORT', () => {
    expect(sut.getPort()).toBe(3000)
  })

  it('Should return the variable ENV', () => {
    expect(sut.getEnv()).toBe('test')
  })
})