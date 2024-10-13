import * as S from "./Phase.styles";
import { IPhasePresenter } from "./Phase.types";

export default function PhasePresenter(props: IPhasePresenter) {
    return (
        <>
            <S.LoaderBox>
                <S.Loader phase={props._phase} />
            </S.LoaderBox>
        </>
    );
}
