import axiosInstance from "@/commons/libs/axiosInstance";

export const POST_CHECK_CURRENT_PHASE = async (params: Object) => {
    const response = await axiosInstance.fastapiAxiosInst.post(
        "/llama-check-current-phase",
        params
    );

    return response.data;
};
