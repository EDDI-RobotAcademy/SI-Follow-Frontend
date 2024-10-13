import { useEffect } from "react";

import PhasePresenter from "./Phase.presenter";
import { POST_CHECK_CURRENT_PHASE } from "./Phase.queries";
import { IPhaseContainer } from "./Phase.types";

export default function PhaseContainer(props: IPhaseContainer) {
    let intervalId: any;

    const fetchData = async () => {
        try {
            const _checkData = {
                user_token: props.getValues("userToken"),
                project_name: props.getValues("projectName"),
            };

            const _currentPhase = await POST_CHECK_CURRENT_PHASE(_checkData);
            props.setPhase(_currentPhase?.phase);

            if (_currentPhase?.phase === "Done") {
                clearInterval(intervalId);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const transferPhase = (phase: string) => {
        // get-file-list: 생성 완료된 파일 리스트 - 리스트형식
        // get-test-reports: 테스트 리포트 확인 - 리스트형식
        // get-code-review: 코드리뷰 확인 - 리스트형식

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
        intervalId = setInterval(fetchData, 30000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {props._phase === "Done" && <div>123</div>}
            {props._phase !== "Done" && (
                <PhasePresenter _phase={transferPhase(props._phase)} />
            )}
        </>
    );
}
