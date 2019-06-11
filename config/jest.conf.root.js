const path = require('path');

const config = (conf) => {
    return {
        testURL: 'http://localhost',
        rootDir: conf.root,
        verbose: true,
        moduleFileExtensions: [
            'js',
            'vue',
            'json'
        ],
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/src/$1',
            '^~/(.*)$': "<rootDir>" + conf.pathFromRoot + "/utilities/$1",
            "\\.(css|scss|sass)$": "<rootDir>" + conf.pathFromRoot + "node_modules/jest-css-modules",
            "\\.(styl)$": "<rootDir>" + conf.pathFromRoot + "node_modules/jest-stylus",
            "\\.(md|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>" + conf.pathFromRoot + "/__mocks__/fileMock.js"
        },
        transform: {
            '^.+\\.js$': path.resolve(__dirname, "./jest-babel-processor.js"),
            '.*\\.(vue)$': "<rootDir>" + conf.pathFromRoot + "node_modules/vue-jest"
        },
        testMatch: ['**/specs/**/*.spec.js'],
        testResultsProcessor: "<rootDir>" + conf.pathFromRoot + "node_modules/jest-html-reporter",
        snapshotSerializers: ["<rootDir>" + conf.pathFromRoot + "node_modules/jest-serializer-vue"],
        setupFiles: ['<rootDir>/test/setup'],
        collectCoverage: true,
        coverageReporters: ['text', 'lcov'],
        coverageDirectory: '<rootDir>/test/reports/coverage',
        collectCoverageFrom: [
            'src/**/*.{js,vue}'
        ],
        transformIgnorePatterns: [
            "node_modules/(?!(vuetify)/)"
        ],
        //specify the amount of coverage you want per component
        coverageThreshold: {
            global: {
                branches: 0,
                functions: 0,
                lines: 0,
                statements: 0
            }
        },
        globals: {
            "vue-jest": {
                babelConfig: path.resolve(__dirname, "../.babelrc.json")
            }
        }
    }
}

module.exports = env => config(env)

