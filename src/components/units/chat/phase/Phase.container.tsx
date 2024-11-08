import { useRecoilState } from "recoil";

import PhasePresenter from "./Phase.presenter";
import { IPhaseContainer } from "./Phase.types";
import {
    phaseStored,
    projectNameStored,
    userTokenStored,
} from "@/commons/store/Chat.store";

export default function PhaseContainer(props: IPhaseContainer) {
    const [_userTokenStored] = useRecoilState(userTokenStored);
    const [_projectNameStored] = useRecoilState(projectNameStored);
    const [_phaseStored] = useRecoilState(phaseStored);

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

    return (
        <>
            {_phaseStored !== "Done" && (
                <PhasePresenter _phase={_phaseStored} />
            )}
        </>
    );
}
