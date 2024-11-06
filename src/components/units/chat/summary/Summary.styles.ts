import styled from "@emotion/styled";
import { Box, Pagination, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const SummaryPresenterWrapper = styled(Box)`
    width: 100%;
    height: calc(100% - 6.4rem);
`;

export const SummaryBox = styled(Box)`
    width: 100%;
    height: calc(100% - 25rem);
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
    overflow: auto;
    padding: 2rem;
    padding-left: 0;

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

export const CodeReviews = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const CodeReview = styled(Box)`
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    color: #eeffff;
`;

export const FileName2 = styled(Typography)`
    margin-left: 1.6rem;
    font-size: 2rem;
`;

export const StyledPre = styled.pre`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding-top: 3rem;
    font-size: 1.6rem;
    color: #eeffff;
    background-color: #282d3e;
`;

export const TestReportBox = styled(Box)`
    width: 100%;
    height: 25rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
    background-color: #444267;
`;

export const TestReportsScrollableArea = styled(Box)`
    flex: 1;
    overflow: auto;
    padding: 1rem;
    font-size: 1.6rem;
    color: #eeffff;

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

export const PaginationBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
`;

export const StyledPagination = styled(Pagination)`
    & .MuiPaginationItem-root {
        color: #eeffff;
        font-size: 1.25rem;
    }

    & .Mui-selected {
        background-color: #676e95;
    }
`;
