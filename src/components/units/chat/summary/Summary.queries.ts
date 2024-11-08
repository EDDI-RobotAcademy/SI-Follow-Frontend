import axiosInstance from "@/commons/libs/axiosInstance";

export const POST_GET_CODE_REVIEW = async (params: Object) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/llama-get-code-review",
        params
    );

    return response.data;
};

export const POST_GET_TEST_REPORTS = async (params: Object) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/llama-get-test-reports",
        params
    );

    return response.data;
};

export const POST_GET_FILE_LIST = async (params: Object) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/llama-get-file-list",
        params
    );

    return response.data;
};

export const POST_GET_FILE_CONTENT = async (params: Object) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/llama-get-file-content",
        params
    );

    return response.data;
};
