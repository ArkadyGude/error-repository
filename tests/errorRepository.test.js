import ErrorRepository from '../src/errorRepository';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('should return correct description for existing error code', () => {
    repo.addError(404, 'Not Found');
    expect(repo.translate(404)).toBe('Not Found');
  });

  test('should return "Unknown error" for non-existing error code', () => {
    expect(repo.translate(999)).toBe('Unknown error');
  });

  test('should handle multiple errors correctly', () => {
    repo.addError(400, 'Bad Request');
    repo.addError(401, 'Unauthorized');
    expect(repo.translate(400)).toBe('Bad Request');
    expect(repo.translate(401)).toBe('Unauthorized');
    expect(repo.translate(500)).toBe('Unknown error');
  });

  test('should work with numeric keys that are not numbers but coercible?', () => {
    repo.addError(200, 'OK');
    expect(repo.translate(200)).toBe('OK');
    expect(repo.translate('200')).toBe('Unknown error');
  });

  test('should return Unknown error for empty repository', () => {
    expect(repo.translate(100)).toBe('Unknown error');
  });
});
