export default {
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/build/',
        '<rootDir>/node_modules/',
        '<rootDir>/src/__tests__/mocks/',
    ],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
}
