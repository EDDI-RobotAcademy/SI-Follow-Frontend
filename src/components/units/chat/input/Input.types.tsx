export interface IFormInput {
    userToken: string;
    projectName: string;
    config: string;
    requirements: string;
}

export interface IInputConatiner {
    setStatus: any;
}

export interface IInputPresenter {
    register: any;
    handleSubmit: any;
    errors: any;
    onSubmit: (data: IFormInput) => void;
    _isClickSubmit: Boolean;
    _logs: Array<string>;
}
