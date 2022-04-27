module.exports = {
    transform: {'^.+\\.(t|j)s$': 'ts-jest'},
    testEnvironment: 'node',
    testRegex: '.*\\.test\\.ts$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};