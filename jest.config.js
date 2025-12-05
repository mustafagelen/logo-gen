module.exports = {
    testMatch: ['**/__tests__/**/*.(test|spec).[jt]s?(x)'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
    },
};
