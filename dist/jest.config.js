module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@common(.*)$': '<rootDir>/src/common$1',
    },
};
//# sourceMappingURL=jest.config.js.map