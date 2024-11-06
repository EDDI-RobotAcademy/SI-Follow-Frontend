import LineNumberContainer from "@/components/commons/lineNumber/LineNumber.container";
import * as S from "./Summary.styles";
import { ISummaryPresenter } from "./Summary.types";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SetStateAction, useState } from "react";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SummaryPresenter(props: ISummaryPresenter) {
    return (
        <>
            <S.SummaryPresenterWrapper>
                <S.SummaryBox>
                    <S.FileListBox>
                        {props._fileList?.map((file, index) => (
                            <S.FileName
                                key={index}
                                onClick={() => {
                                    props.handleClickOpen(file);
                                }}
                            >
                                {file}
                            </S.FileName>
                        ))}
                    </S.FileListBox>
                    <S.CodeReviewBox>
                        <LineNumberContainer />
                        <S.CodeReviews>
                            {props._codeReview?.map((review, index) => (
                                <S.CodeReview key={index}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            Review {index + 1}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {review}
                                        </AccordionDetails>
                                    </Accordion>
                                </S.CodeReview>
                            ))}
                        </S.CodeReviews>
                    </S.CodeReviewBox>

                    <Dialog
                        fullScreen
                        open={props._openDialog}
                        onClose={props.handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: "relative" }}>
                            <Toolbar
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    backgroundColor: "#34324a",
                                }}
                            >
                                <S.FileName2>{props._currentFile}</S.FileName2>

                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={props.handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <S.StyledPre>{props._fileContent}</S.StyledPre>
                    </Dialog>
                </S.SummaryBox>

                <S.TestReportBox>
                    {props._testReports && props._testReports.length > 0 && (
                        <S.TestReportsScrollableArea>
                            <S.TestReports>
                                <S.TestReport>
                                    <S.StyledDoubleArrowIcon />
                                    {props._testReports[props._currentPage - 1]}
                                </S.TestReport>
                            </S.TestReports>
                        </S.TestReportsScrollableArea>
                    )}
                    <S.PaginationBox>
                        <Stack spacing={2}>
                            <S.StyledPagination
                                size="large"
                                count={
                                    props._testReports
                                        ? props._testReports.length
                                        : 0
                                }
                                page={props._currentPage}
                                onChange={props.handlePageChange}
                                showFirstButton
                                showLastButton
                            />
                        </Stack>
                    </S.PaginationBox>
                </S.TestReportBox>
            </S.SummaryPresenterWrapper>
        </>
    );
}
