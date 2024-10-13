import { useEffect } from "react";
import ChatPresenterPhase from "./Chat.presenterPhase";
import { POST_CHECK_CURRENT_PHASE } from "./Chat.queries";
import { IChatContainerPhase } from "./Chat.types";

export default function ChatContainerPhase(props: IChatContainerPhase) {
    let intervalId: any;

    const fetchData = async () => {
        try {
            const _checkData = {
                user_token: props.getValues("userToken"),
                project_name: props.getValues("projectName"),
            };

            const _currentPhase = await POST_CHECK_CURRENT_PHASE(_checkData);
            props.setPhase(_currentPhase?.phase);

            if (
                _currentPhase?.phase === "CodeComplete" ||
                _currentPhase?.phase === "CodeReviewComment" ||
                _currentPhase?.phase === "CodeReviewModification" ||
                _currentPhase?.phase === "TestErrorSummary" ||
                _currentPhase?.phase === "TestModification" ||
                _currentPhase?.phase === "EnvironmentDoc" ||
                _currentPhase?.phase === "Manual"
            ) {
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
        intervalId = setInterval(fetchData, 30000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <ChatPresenterPhase _phase={transferPhase(props._phase)} />
        </>
    );
}
