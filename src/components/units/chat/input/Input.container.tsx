import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import InputPresenter from "./Input.presenter";
import PhaseContainer from "../phase/Phase.container";
import {
    POST_GET_GITHUB_USER_INFO,
    POST_REQUEST_AI_COMMAND,
} from "./Input.queries";

export default function InputContainer() {
    const _lineHeight = 20;
    const [_githubAccessToken, setGithubAccessToken] = useState("");
    const _containerRef = useRef(null);
    const [_lineCount, setLineCount] = useState(0);
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
            userToken: _githubAccessToken,
            projectName: "",
            config: "Default",
            requirements: "",
        },
    });

    const projectName = watch("projectName");
    const config = watch("config");
    const requirements = watch("requirements");

    useEffect(() => {
        const _userToken =
            typeof window !== "undefined"
                ? sessionStorage.getItem("user_token")
                : null;

        const getUserInfoByGithub = async () => {
            if (_userToken) {
                await POST_GET_GITHUB_USER_INFO(_userToken).then((res) => {
                    setGithubAccessToken(res.access_token);
                });
            }
        };

        const updateLineCount = () => {
            if (_containerRef.current) {
                const containerHeight = _containerRef.current.clientHeight;
                const count = Math.floor(containerHeight / _lineHeight);
                setLineCount(count);
            }
        };

        window.addEventListener("resize", updateLineCount);
        getUserInfoByGithub();
        updateLineCount();

        return () => {
            window.removeEventListener("resize", updateLineCount);
        };
    }, []);

    useEffect(() => {
        if (_githubAccessToken) {
            setValue("userToken", _githubAccessToken);
        }
    }, [_githubAccessToken, setValue]);

    useEffect(() => {
        const updatedLogs = [];

        if (projectName)
            updatedLogs.push(`〉〉〉 프로젝트 이름: ${projectName}`);
        if (config) updatedLogs.push(`〉〉〉 Config 설정: ${config}`);
        if (requirements) updatedLogs.push(`〉〉〉 요구사항: ${requirements}`);

        setLogs(updatedLogs);
    }, [projectName, requirements, config]);

    const onSubmit = async () => {
        const _requestData = [
            getValues("config"),
            "llama3.2",
            getValues("userToken"),
            getValues("requirements"),
            getValues("projectName"),
            process.env.NEXT_PUBLIC_AI_COMMAND_URL,
        ];

        await POST_REQUEST_AI_COMMAND(_requestData).then((res) => {
            console.log("res", res);
            setPhase("DemandAnalysis");
        });
        setIsClickSubmit(true);
        setLogs([]);
    };

    return (
        <>
            {_phase === "" ? (
                <InputPresenter
                    _lineHeight={_lineHeight}
                    _lineCount={_lineCount}
                    _containerRef={_containerRef}
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    _isClickSubmit={_isClickSubmit}
                    _logs={_logs}
                />
            ) : (
                <PhaseContainer
                    _phase={_phase}
                    setPhase={setPhase}
                    getValues={getValues}
                />
            )}
        </>
    );
}
