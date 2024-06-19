
export class ResponseBuilder {

    success(statusCode: number, data): any {
      return {
        statusCode: statusCode,
        body: {
          jsonapi: {
            version: "1.0",
            data,
          },
        },
      };
    }
 
    error(message: any, statusCode: number): any {
      return {
        statusCode: statusCode,
        errors: {
            message,
        },
      };
    }
  }