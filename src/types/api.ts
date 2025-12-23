
interface ApiResponse<T> {
  code: string;
  msg: string;
  result: T;
}

export type {
  ApiResponse,
}
