var env = process.env.NODE_ENV || 'development';

console.log('*** env ', env);
if (env === 'development' || env === 'test') {
  process.env.PORT = 3000;
  process.env.DBEndpoint = 'http://localhost:8000';
  process.env.REGION = 'local'
} else if (env === 'production') {
  process.env.DBEndpoint = 'http://localhost:8000';
  process.env.REGION = 'us-east-1'
};
