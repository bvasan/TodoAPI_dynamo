var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.DYNAMO_URI = 'http://localhost:8000';
  process.env.REGION = 'local'
} else if (env === 'test') {
  prodess.env.PORT = 3000;
  process.env.DYNAMO_URI = 'http://localhost:8000';
  process.env.REGION = 'local'
}
