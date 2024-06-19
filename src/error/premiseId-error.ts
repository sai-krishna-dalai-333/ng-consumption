export class InternalServerError extends Error {
    statusCode: number;
    constructor() {
      super("Internal server error");
      this.statusCode = 500;
    }
  }
   
  export class InvalidPremiseId extends Error {
    statusCode: number;
    constructor() {
      super("Invalid premise Id");
      this.statusCode = 400;
    }
  }
   
  export class UserNotFoundError extends Error {
    statusCode: number;
    constructor() {
      super("Premise not found");
      this.statusCode = 404;
    }
  }
   
  