// Create a CustomAPIError class which extends the Error class
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default CustomAPIError;
