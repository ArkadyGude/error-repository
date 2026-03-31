import ErrorRepository from './errorRepository';

const repo = new ErrorRepository();

repo.addError(404, 'Not Found');
repo.addError(500, 'Internal Server Error');

console.log(repo.translate(404));
console.log(repo.translate(200));
