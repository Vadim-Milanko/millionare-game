import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': './src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default createJestConfig(config);
