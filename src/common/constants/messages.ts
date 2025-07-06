export const messages = {
  DATA_FETCHED_SUCCESS: 'Data fetched successfully',
  RECORD_UPDATED_SUCCESS: 'Record has been updated successfully',
  RECORD_CREATED_SUCCESS: 'Record has been created successfully',
  RECORD_DELETED_SUCCESS: 'Record has been deleted successfully',
  RECORD_CREATED_FAILED: 'Failed to create record. Please try again later.',
  RECORD_UPDATED_FAILED: 'Failed to update record. Please try again later.',
  RECORD_DELETED_FAILED: 'Failed to delete record. Please try again later.',
  RECORD_NOT_FOUND: 'Record not found',
  INVALID_QUERY_PARAM: 'Invalid FrameId.',
  USER: {
    ALREADY_EXISTS: 'User already exists',
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    DOES_NOT_EXISTS: 'User does not exists',
    NOT_FOUND: 'User not found',
    INVALID_ROLE: 'Invalid role',
    REGISTERED_SUCCESSFULLY: 'User registered successfully',
    LOGGED_IN_SUCCESSFULLY: 'User logged in successfully',
    INVALID_CREDENTIALS: 'Invalid credentials',
  },
  AUTH: {
    ACCESS_TOKEN_SUCCESS: 'Access token generated successfully',
    ACCESS_TOKEN_NOT_SET:
      'jwt.accessTokenExpiry is not set in environment variables',
    REFRESH_TOKEN_NOT_SET:
      'jwt.refreshTokenExpiry is not set in environment variables',
    JWT_SECRET_NOT_SET: 'JWT_SECRET is not defined in environment variables.',
    INVALID_TOKEN: 'Invalid JWT Token',
  },
};
