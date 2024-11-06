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
    _isClickSubmitStored: Boolean;
    onSubmit: (data: IFormInput) => void;
    _logs: Array<string>;
}
