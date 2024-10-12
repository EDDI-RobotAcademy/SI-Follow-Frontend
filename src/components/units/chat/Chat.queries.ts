import axiosInstance from "@/commons/libs/axiosInstance";

export const POST_GET_GITHUB_USER_INFO = async (params: string) => {
    const response = await axiosInstance.djangoAxiosInst.post(
        "/github_oauth/github/user-info",
        {
            user_token: params,
        }
    );

    return response.data;
};

export const POST_REQUEST_AI_COMMAND = async (params: Array<string>) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/request-ai-command",
        {
            command: 3773,
            data: params,
        }
    );

    return response.data;
};

export const POST_CHECK_CURRENT_PHASE = async (params: Object) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/check-current-phase",
        params
    );

    return response.data;
};
