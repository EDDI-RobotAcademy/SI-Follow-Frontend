import * as S from "./Hero.styles";
import { IHeroPresenter } from "./Hero.types";

export default function HeroPresenter(props: IHeroPresenter) {
    return (
        <>
            <S.HeroWrapper
                style={{ width: "100%", height: "100%", position: "relative" }}
            >
                {props._isClickedLogin ? (
                    <>
                        <S.LoginText>로그인</S.LoginText>
                        {props.IconBox}
                    </>
                ) : (
                    <>
                        <div
                            ref={props.containerRef}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <S.HeroButton onClick={props.onChangeIsClickedLogin}>
                            시작하기
                        </S.HeroButton>
                    </>
                )}
            </S.HeroWrapper>
        </>
    );
}
