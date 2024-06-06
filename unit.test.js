import { power } from './powerer.js';

describe('hooks', function () {
  beforeAll(() => {
    console.log('Run at the beginning of tests');
  });

  afterAll(() => {
    console.log('Run after tests');
  });

  beforeEach(() => {
    console.log('Run at the beginning of each test');
  });

  afterEach(() => {
    console.log('Run at the end of each test');
  });

  test('1 to power 2 to equal 1', () => {
    console.log('1 to powerer 2 to equal 1');
    expect(power(1, 2)).toBe(1);
  });

  test('3 to power 2 to equal 9', () => {
    console.log('3 to power 2 to equal 9');
    expect(power(3, 2)).toBe(9);
  });
});