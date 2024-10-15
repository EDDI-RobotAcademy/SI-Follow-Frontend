import { SetStateAction } from "react";

export interface ISummaryPresenter {
    _codeReview: Array<string>;
    _testReports: Array<string>;
    _fileList: Array<string>;
    _fileContent: string;
    _openDialog: boolean;
    _currentPage: number;
    _currentFile: string;
    handleClickOpen: (file: any) => void;
    handleClose: () => void;
    handlePageChange: (event: any, value: SetStateAction<number>) => void;
}
