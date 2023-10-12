// Extends Error object to include a 'type' property
export class CustomError extends Error {
  constructor(type, message) {
    super(message);
    this.type = type;
  }
}
