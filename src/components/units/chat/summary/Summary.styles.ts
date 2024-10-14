import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const SummaryPresenterWrapper = styled(Box)`
    width: 100%;
    height: calc(100% - 6.4rem);
`;

export const SummaryBox = styled(Box)`
    width: 100%;
    height: calc(100% - 15rem);
    display: flex;
`;

export const FileListBox = styled(Box)`
    width: 20rem;
    height: 100%;
    border-right: 0.1px solid #676e95;
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        scrollbar-width: thin;
    }

    &:hover::-webkit-scrollbar {
        display: block;
        width: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
`;

export const FileName = styled(Typography)`
    padding: 1rem;
    font-size: 1.6rem;
    color: #676e95;
    line-height: 4rem;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #4a4a7d;
    }
`;

export const CodeReviewBox = styled(Box)`
    width: calc(100% - 20rem);
    height: 100%;
    display: flex;
    overflow-y: auto;
`;

export const CodeReviews = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        scrollbar-width: thin;
    }

    &:hover::-webkit-scrollbar {
        display: block;
        width: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
`;

export const CodeReview = styled(Typography)`
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    color: #676e95;
`;

export const TestReportBox = styled(Box)`
    width: 100%;
    height: 15rem;
    max-height: 15rem;
    padding: 1rem;
    overflow: auto;
    font-size: 1.6rem;
    color: #eeffff;
    background-color: #444267;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        scrollbar-width: thin;
    }

    &:hover::-webkit-scrollbar {
        display: block;
        width: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
`;

export const TestReports = styled(Box)`
    display: flex;
    margin-bottom: 0.5rem;
`;

export const StyledDoubleArrowIcon = styled(DoubleArrowIcon)`
    color: #eeffff;
    font-size: 1.2rem;
`;

export const TestReport = styled(Typography)`
    font-size: 1.6rem;
    color: #eeffff;
`;
