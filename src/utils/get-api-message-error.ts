import { AxiosError } from "axios";

interface ApiErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

export const getApiMessageError = (error: AxiosError): string => {
  const messageError = error.response?.data as ApiErrorResponse;
  return messageError?.message ?? "Erro";
};
