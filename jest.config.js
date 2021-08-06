module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    /**
     * 1. 프로젝트 내에서 절대 경로를 사용해 import 할 수 있게 끔 설정을 했거나
     * 2. 테스트 파일에서 테스트 할 파일 경로에 대해 별칭을 사용하고 싶은 경우
     * Jest가 이를 인식할 수 있도록 하는 추가 설정 (정규식)
     */
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@shared(.*)$': '<rootDir>/src/shared$1',
  },
  testEnvironment: '<rootDir>/node_modules/jest-environment-jsdom/build/index.js',
};
