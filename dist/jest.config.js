"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jest_1 = require("ts-jest");
const tsconfig_json_1 = require("./tsconfig.json");
exports.default = {
    moduleFileExtensions: ["js", "json", "ts"],
    moduleMapper: (0, ts_jest_1.pathsToModuleNameMapper)(tsconfig_json_1.compilerOptions.paths, {
        prefix: '<rootDir>/'
    }),
    testRegex: '.*\\..*spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    converageDirectory: '../coverage',
    testEnviroment: 'node'
};
//# sourceMappingURL=jest.config.js.map