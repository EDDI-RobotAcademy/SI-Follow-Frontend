import * as S from "./Chat.styles";
import { IChatPresenterPhase } from "./Chat.types";

export default function ChatPresenterPhase(props: IChatPresenterPhase) {
    return (
        <>
            <S.LoaderBox>
                <S.Loader phase={props._phase} />
            </S.LoaderBox>
        </>
    );
}
