import axiosInstance from "@/commons/libs/axiosInstance";

export const POST_GITHUB_ACCESS_TOKEN_URI = async (code: string) => {
    const response = await axiosInstance.djangoAxiosInst.post(
        "/github_oauth/github/access-token",
        { code }
    );

    return response.data;
};
