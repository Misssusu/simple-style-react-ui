module.exports = {
    verbose: true,
    clearMocks: false,
    collectCoverage: false,
    reporters: ["default"],
    moduleFileExtensions: ['js','jsx','ts','tsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        "\\.(jps|jpeg|png|gif|eot|otfwebp)$": "<rootDir>/test"
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    transform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}