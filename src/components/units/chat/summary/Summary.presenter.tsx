import LineNumberContainer from "@/components/commons/lineNumber/LineNumber.container";
import * as S from "./Summary.styles";
import { ISummaryPresenter } from "./Summary.types";

export default function SummaryPresenter(props: ISummaryPresenter) {
    return (
        <>
            <S.SummaryPresenterWrapper>
                <S.SummaryBox>
                    <S.FileListBox>
                        {props._fileList?.map((file, index) => (
                            <S.FileName key={index}>{file}</S.FileName>
                        ))}
                    </S.FileListBox>
                    <S.CodeReviewBox>
                        <LineNumberContainer />
                        <S.CodeReviews>
                            {props._codeReview?.map((review, index) => (
                                <S.CodeReview key={index}>
                                    {review}
                                </S.CodeReview>
                            ))}
                        </S.CodeReviews>
                    </S.CodeReviewBox>
                </S.SummaryBox>
                <S.TestReportBox>
                    {props._testReports?.map((report, index) => (
                        <S.TestReports key={index}>
                            <S.TestReport>
                                <S.StyledDoubleArrowIcon />
                                {report}
                            </S.TestReport>
                        </S.TestReports>
                    ))}
                </S.TestReportBox>
            </S.SummaryPresenterWrapper>
        </>
    );
}
