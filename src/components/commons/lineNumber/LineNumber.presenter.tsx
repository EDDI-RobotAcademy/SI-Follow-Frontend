import * as S from "./LineNumber.styles";
import { ILineNumberPresenter } from "./LineNumber.types";

export default function LineNumberPresenter(props: ILineNumberPresenter) {
    return (
        <S.LineNumberBox ref={props._containerRef}>
            {Array.from({ length: Number(props._lineCount) }, (_, index) => (
                <span
                    key={index}
                    style={{
                        display: "block",
                        height: `${props._lineHeight}px`,
                    }}
                >
                    {index + 1}
                </span>
            ))}
        </S.LineNumberBox>
    );
}
