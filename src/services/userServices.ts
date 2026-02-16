import type { UserLoginProps } from "@/types/userTypes";
import { getData, postData } from "./servides";

export const LoginService = async ({ username, password }: UserLoginProps) => {
  const data = await postData({
    endPoint: `/user/login`,
    data: { username, password },
  });
  return data;
};

export const GetCurrenUser = async () => {
  const data = await getData({
    endPoint: `/user/me`,
  });
  return data;
};
export const getCurrentUser = async () => {
  const res = await GetCurrenUser();
  console.log(res);
};
