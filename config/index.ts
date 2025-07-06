export default () => ({
  port: Number(process.env.PORT) || 80,
  jwt: {
    accessTokenSecret: String(process.env.ACCESS_TOKEN_SECRET),
    refreshTokenSecret: String(process.env.REFRESH_TOKEN_SECRET),
    accessTokenExpiry: String(process.env.ACCESS_TOKEN_EXPIRY),
    refreshTokenExpiry: String(process.env.REFRESH_TOKEN_EXPIRY),
  },
});
