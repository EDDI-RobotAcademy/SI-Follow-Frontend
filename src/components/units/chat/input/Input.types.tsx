export interface IFormInput {
    userToken: string;
    projectName: string;
    config: string;
    requirements: string;
}

export interface IInputPresenter {
    _lineHeight: Number;
    _lineCount: Number;
    _containerRef: any;
    register: any;
    handleSubmit: any;
    errors: any;
    onSubmit: (data: IFormInput) => void;
    _isClickSubmit: Boolean;
    _logs: Array<string>;
}
