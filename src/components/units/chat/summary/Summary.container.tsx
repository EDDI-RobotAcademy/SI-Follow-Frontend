import { SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import SummaryPresenter from "./Summary.presenter";
import {
    POST_GET_CODE_REVIEW,
    POST_GET_FILE_CONTENT,
    POST_GET_FILE_LIST,
    POST_GET_TEST_REPORTS,
} from "./Summary.queries";
import { projectNameStored, userTokenStored } from "@/commons/store/Chat.store";

export default function SummaryContainer() {
    const [_userTokenStored] = useRecoilState(userTokenStored);
    const [_projectNameStored] = useRecoilState(projectNameStored);

    const [_codeReview, setCodeReview] = useState();
    const [_testReports, setTestReports] = useState();
    const [_fileList, setFileList] = useState();
    const [_fileContent, setFileContent] = useState();
    const [_openDialog, setOpenDialog] = useState(false);
    const [_currentPage, setCurrentPage] = useState(1);
    const [_currentFile, setCurrentFile] = useState("");

    const handleClickOpen = (file: any) => {
        setCurrentFile(file);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handlePageChange = (event: any, value: SetStateAction<number>) => {
        setCurrentPage(value);
    };

    const getSummary = async () => {
        const _params = {
            user_token: _userTokenStored,
            project_name: _projectNameStored,
        };

        const _codeReviewResponse = await POST_GET_CODE_REVIEW(_params);
        const _testReportsResponse = await POST_GET_TEST_REPORTS(_params);
        const _fileListResponse = await POST_GET_FILE_LIST(_params);

        setCodeReview(_codeReviewResponse?.code_review);
        setTestReports(_testReportsResponse?.test_reports);
        setFileList(_fileListResponse?.file_list);
    };

    const getFileContent = async () => {
        const _params = {
            user_token: _userTokenStored,
            project_name: _projectNameStored,
            file_name: _currentFile,
        };

        const _fileContentResponse = await POST_GET_FILE_CONTENT(_params);

        setFileContent(_fileContentResponse?.file_content);
    };

    useEffect(() => {
        getSummary();
    }, []);

    useEffect(() => {
        getFileContent();
    }, [_currentFile]);

    return (
        <>
            <SummaryPresenter
                _codeReview={_codeReview}
                _testReports={_testReports}
                _fileList={_fileList}
                _fileContent={_fileContent}
                _openDialog={_openDialog}
                _currentPage={_currentPage}
                _currentFile={_currentFile}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handlePageChange={handlePageChange}
            />
        </>
    );
}
