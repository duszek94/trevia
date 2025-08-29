export default () => ({
  port: parseInt(process.env.PORT || '', 10) || 3000,
  database: {
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  jwtSecret: process.env.JWT_SECRET,
});
