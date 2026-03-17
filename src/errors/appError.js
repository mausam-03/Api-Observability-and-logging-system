class appError extends Error {
  constructor(message, statusCode, errorType) {
    super(message);

    this.statusCode = statusCode;
    this.errorType = errorType;
    this.isOperational = true; // important for classification

    Error.captureStackTrace(this, this.constructor);
  }
}

export default appError;