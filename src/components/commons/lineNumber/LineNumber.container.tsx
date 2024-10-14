import { useEffect, useRef, useState } from "react";
import LineNumberPresenter from "./LineNumber.presenter";

export default function LineNumberContainer(props: any) {
    const _lineHeight = 25;
    const _containerRef = useRef(null);
    const [_lineCount, setLineCount] = useState(0);

    useEffect(() => {
        const updateLineCount = () => {
            if (_containerRef.current) {
                const containerHeight = _containerRef.current.clientHeight;
                const count = Math.floor(containerHeight / _lineHeight);
                setLineCount(count);
            }
        };

        window.addEventListener("resize", updateLineCount);
        updateLineCount();

        return () => {
            window.removeEventListener("resize", updateLineCount);
        };
    }, []);

    return (
        <>
            <LineNumberPresenter
                _lineHeight={_lineHeight}
                _containerRef={_containerRef}
                _lineCount={_lineCount}
            />
        </>
    );
}
