import { useEffect } from "react";
import { useRecoilState } from "recoil";

import PhasePresenter from "./Phase.presenter";
import { POST_CHECK_CURRENT_PHASE } from "./Phase.queries";
import { IPhaseContainer } from "./Phase.types";
import {
    phaseStored,
    projectNameStored,
    userTokenStored,
} from "@/commons/store/Chat.store";

export default function PhaseContainer(props: IPhaseContainer) {
    let intervalId: any;
    const [_userTokenStored] = useRecoilState(userTokenStored);
    const [_projectNameStored] = useRecoilState(projectNameStored);
    const [_phaseStored, setPhaseStored] = useRecoilState(phaseStored);

    const chekcCurrentPhase = async () => {
        try {
            const _checkParams = {
                user_token: _userTokenStored,
                project_name: _projectNameStored,
            };

            const _currentPhase = await POST_CHECK_CURRENT_PHASE(_checkParams);
            setPhaseStored(_currentPhase?.phase);

            if (_currentPhase?.phase === "Done") {
                props.setStatus("Summary");
                clearInterval(intervalId);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const transferPhase = (phase: string) => {
        switch (phase) {
            case "DemandAnalysis":
                return "요구 분석중";
            case "LanguageChoose":
                return "언어 선택중";
            case "Coding":
                return "코드 작성중";
            case "CodeComplete":
                return "코드 완성중";
            case "CodeReviewComment":
                return "코드 리뷰 커멘트중";
            case "CodeReviewModification":
                return "코드 리뷰 수정중";
            case "TestErrorSummary":
                return "테스트 에러 요약중";
            case "TestModification":
                return "테스트 수정중";
            case "EnvironmentDoc":
                return "Env 작성중";
            case "Manual":
                return "메뉴얼 수정중";
        }
    };

    useEffect(() => {
        intervalId = setInterval(chekcCurrentPhase, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {_phaseStored !== "Done" && (
                <PhasePresenter _phase={transferPhase(_phaseStored)} />
            )}
        </>
    );
}
