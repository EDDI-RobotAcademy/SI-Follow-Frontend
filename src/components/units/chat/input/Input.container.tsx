import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

import InputPresenter from "./Input.presenter";
import PhaseContainer from "../phase/Phase.container";
import {
    POST_GET_GITHUB_USER_INFO,
    POST_REQUEST_AI_COMMAND,
} from "./Input.queries";
import {
    projectNameStored,
    requirementStored,
    userTokenStored,
} from "@/commons/store/Chat.store";

export default function InputContainer() {
    const [_userTokenStored, setUserTokenStored] =
        useRecoilState(userTokenStored);
    const [_projectNameStored, setProjectNameStored] =
        useRecoilState(projectNameStored);
    const [_requirementStored, setRequirementStored] =
        useRecoilState(requirementStored);

    const [_isClickSubmit, setIsClickSubmit] = useState(false);
    const [_logs, setLogs] = useState<string[]>([]);
    const [_phase, setPhase] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        getValues,
        setValue,
    } = useForm({
        defaultValues: {
            userToken: _userTokenStored,
            projectName: "",
            config: "Default",
            requirements: "",
        },
    });

    const _watchProjectName = watch("projectName");
    const _watchConfig = watch("config");
    const _watchRequirements = watch("requirements");

    const sliceUserToken = () => {
        const maxLength = 10;
        if (_userTokenStored.length <= maxLength) {
            return _userTokenStored;
        } else {
            const remainingLength = _userTokenStored.length - maxLength;
            return (
                _userTokenStored.substring(0, maxLength) +
                "x".repeat(remainingLength)
            );
        }
    };

    useEffect(() => {
        const _userToken =
            typeof window !== "undefined"
                ? sessionStorage.getItem("user_token")
                : null;

        const getUserInfoByGithub = async () => {
            if (_userToken) {
                await POST_GET_GITHUB_USER_INFO(_userToken).then((res) => {
                    setUserTokenStored(res.access_token);
                });
            }
        };

        getUserInfoByGithub();
    }, []);

    useEffect(() => {
        if (_userTokenStored) {
            setValue("userToken", _userTokenStored);
        }
    }, [_userTokenStored, setValue]);

    useEffect(() => {
        const updatedLogs = [];

        if (_watchProjectName)
            updatedLogs.push(`〉〉〉 프로젝트 이름: ${_watchProjectName}`);
        if (_watchConfig)
            updatedLogs.push(`〉〉〉 Config 설정: ${_watchConfig}`);
        if (_watchRequirements)
            updatedLogs.push(`〉〉〉 요구사항: ${_watchRequirements}`);

        setLogs(updatedLogs);
    }, [_watchProjectName, _watchRequirements, _watchConfig]);

    const onSubmit = async () => {
        const _requestData = [
            getValues("config"),
            "llama3.2",
            getValues("userToken"),
            getValues("requirements"),
            getValues("projectName"),
            process.env.NEXT_PUBLIC_AI_COMMAND_URL,
        ];

        setProjectNameStored(getValues("projectName"));
        setRequirementStored(getValues("requirements"));

        setIsClickSubmit(true);

        setTimeout(async () => {
            await POST_REQUEST_AI_COMMAND(_requestData).then(() => {
                setPhase("DemandAnalysis");
            });
        }, 500);
    };

    return (
        <>
            {_phase === "" ? (
                <InputPresenter
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    _isClickSubmit={_isClickSubmit}
                    _logs={_logs}
                    sliceUserToken={sliceUserToken}
                />
            ) : (
                <PhaseContainer _phase={_phase} setPhase={setPhase} />
            )}
        </>
    );
}
