import { Box, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { GetCurrenUser, LoginService } from "@/services/userServices";
import type { UserLoginProps } from "@/types/userTypes";
import useUserStore from "@/store/userStore/userStore";

interface FormValues {
  username: string;
  password: string;
}
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const handlesubmit = async ({ username, password }: UserLoginProps) => {
    const res = await LoginService({ username, password });
    useUserStore.getState().setToken(res.accessToken);
    // console.log(useUserStore.getState().token);
  };
  const getCurrentUser = async () => {
    const res = await GetCurrenUser();
    console.log(res);
  };
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"50%"}
        h={"50%"}
        bg={"gray.300"}
        rounded={"xl"}
      >
        <form
          onSubmit={handleSubmit((data) => handlesubmit(data))}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack gap="4" align="flex-start" maxW="sm">
            <Field.Root invalid={!!errors.username}>
              <Field.Label>username</Field.Label>
              <Input
                {...register("username", {
                  required: "username is required",
                })}
              />
              <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label>password</Field.Label>
              <Input {...register("password")} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Button colorPalette={"orange"} type="submit">
              Submit
            </Button>
            <Button colorPalette={"blue"} onClick={() => getCurrentUser()}>
              show detail in console
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};
export default LoginPage;
