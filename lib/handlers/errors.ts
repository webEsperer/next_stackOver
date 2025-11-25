// import { ZodError } from "zod";
// import { RequestError, ValidationError } from "../http-errors";
// import logger from "../logger";

// export type ResponseType = "api" | "server";

// import { NextResponse } from "next/server";

// const formatApiError = (
//   status: number,
//   message: string,
//   errors?: Record<string, string[]>
// ) => {
//   return NextResponse.json(
//     {
//       success: false,
//       errors: {
//         message,
//         details: errors,
//       },
//     },
//     { status }
//   );
// };

// const formatServerError = (
//   status: number,
//   message: string,
//   errors?: Record<string, string[]>
// ) => {
//   return {
//     status,
//     success: false,
//     errors: {
//       message,
//       details: errors,
//     },
//   };
// };


// const handleError = (error: unknown, responseType: ResponseType = "server") => {
//   const isApi = responseType === "api";

//   // ---------- RequestError ----------
//   if (error instanceof RequestError) {
//     logger.error(
//       { err: error },
//       `${responseType.toUpperCase()} Error: ${error.message}`
//     );

//     return isApi
//       ? formatApiError(error.statusCode, error.message, error.errors)
//       : formatServerError(error.statusCode, error.message, error.errors);
//   }

//   // ---------- ZodError ----------
//   if (error instanceof ZodError) {
//     const validationError = new ValidationError(
//       error.flatten().fieldErrors as Record<string, string[]>
//     );

//     logger.error(
//       { err: error },
//       `Validation Error: ${validationError.message}`
//     );

//     return isApi
//       ? formatApiError(
//           validationError.statusCode,
//           validationError.message,
//           validationError.errors
//         )
//       : formatServerError(
//           validationError.statusCode,
//           validationError.message,
//           validationError.errors
//         );
//   }

//   // ---------- Standard Error ----------
//   if (error instanceof Error) {
//     logger.error(error.message);

//     return isApi
//       ? formatApiError(500, error.message)
//       : formatServerError(500, error.message);
//   }

//   // ---------- Unknown ----------
//   logger.error({ err: error }, "Unexpected error");

//   return isApi
//     ? formatApiError(500, "Unexpected error")
//     : formatServerError(500, "Unexpected error");
// };

// export default handleError;
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { RequestError, ValidationError } from "../http-errors";
import logger from "../logger";

export type ResponseType = "api" | "server";

// Typy odpowiedzi
type ApiErrorReturn = NextResponse<{
  success: false;
  errors: {
    message: string;
    details?: Record<string, string[]>;
  };
}>;

type ServerErrorReturn = {
  status: number;
  success: false;
  errors: {
    message: string;
    details?: Record<string, string[]>;
  };
};

// Function overloads - definiują różne typy zwracane
function handleError(error: unknown, responseType: "api"): ApiErrorReturn;
function handleError(error: unknown, responseType: "server"): ServerErrorReturn;
function handleError(error: unknown, responseType?: ResponseType): ApiErrorReturn | ServerErrorReturn;

// Implementacja
function handleError(error: unknown, responseType: ResponseType = "server") {
  const isApi = responseType === "api";

  // ---------- RequestError ----------
  if (error instanceof RequestError) {
    logger.error(
      { err: error },
      `${responseType.toUpperCase()} Error: ${error.message}`
    );

    return isApi
      ? formatApiError(error.statusCode, error.message, error.errors)
      : formatServerError(error.statusCode, error.message, error.errors);
  }

  // ---------- ZodError ----------
  if (error instanceof ZodError) {
    const validationError = new ValidationError(
      error.flatten().fieldErrors as Record<string, string[]>
    );

    logger.error(
      { err: error },
      `Validation Error: ${validationError.message}`
    );

    return isApi
      ? formatApiError(
          validationError.statusCode,
          validationError.message,
          validationError.errors
        )
      : formatServerError(
          validationError.statusCode,
          validationError.message,
          validationError.errors
        );
  }

  // ---------- Standard Error ----------
  if (error instanceof Error) {
    logger.error(error.message);

    return isApi
      ? formatApiError(500, error.message)
      : formatServerError(500, error.message);
  }

  // ---------- Unknown ----------
  logger.error({ err: error }, "Unexpected error");

  return isApi
    ? formatApiError(500, "Unexpected error")
    : formatServerError(500, "Unexpected error");
}

export default handleError;

// Funkcje formatujące pozostają bez zmian
const formatApiError = (
  status: number,
  message: string,
  errors?: Record<string, string[]>
): ApiErrorReturn => {
  return NextResponse.json(
    {
      success: false,
      errors: {
        message,
        details: errors,
      },
    },
    { status }
  );
};

const formatServerError = (
  status: number,
  message: string,
  errors?: Record<string, string[]>
): ServerErrorReturn => {
  return {
    status,
    success: false,
    errors: {
      message,
      details: errors,
    },
  };
};
