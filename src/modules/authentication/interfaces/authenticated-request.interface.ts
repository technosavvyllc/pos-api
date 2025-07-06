export interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
  };
}
