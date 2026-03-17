import AppError from "./appError.js";

class AuthError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401, "AUTH_ERROR");
  }
}

export default AuthError;