const path = require('path');

module.exports = {
    testURL: 'http://localhost',
    rootDir: "../",
    verbose: true,
    moduleFileExtensions: [
        'js',
        'vue',
        'json'
    ],
    moduleNameMapper: {
        '^@\\/(.*)$': '../../src/$1',
        "\\.(css|scss|sass)$": "<rootDir>/node_modules/jest-css-modules",
        "\\.(styl)$": "<rootDir>/node_modules/jest-stylus",
        "\\.(md|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    },
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(vuetify)/)"
    ],
    transform: {
        '^.+\\.js$': path.resolve(__dirname, "./jest-babel-processor.js"),
        '.*\\.vue$': '<rootDir>/node_modules/vue-jest'
    },
    testMatch: ['<rootDir>/**/specs/**/*.spec.js'],
    testPathIgnorePatterns: [
    ],
    testResultsProcessor: "<rootDir>/node_modules/jest-html-reporter",
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    setupFiles: ['<rootDir>/config/jest.setup'],
    coverageReporters: ['text', 'lcov'],
    coverageDirectory: '<rootDir>/target/reports/coverage',
    collectCoverageFrom: [
        '!**/node_modules/**',
	    '!**/test/**',
	    '!**/dist/**',
	    '!**/example/**',
        '!**/webpack.js',
	    '!**/webpack.config.js'
    ]
};
