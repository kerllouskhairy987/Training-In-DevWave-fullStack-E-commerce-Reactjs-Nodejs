// types/user.ts
export interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}