import { RadioGroup } from "@mui/material";

import * as S from "./Input.styles";
import { IInputPresenter } from "./Input.types";
import LineNumberContainer from "@/components/commons/lineNumber/LineNumber.container";

export default function InputPresenter(props: IInputPresenter) {
    return (
        <S.InputPresenterWrapper>
            <S.FileBox>
                <S.FileNameBox>
                    Input.html
                    <S.StyledCloseIcon />
                </S.FileNameBox>
                <S.FileNameBox2>Input.js</S.FileNameBox2>
                <S.FileNameBox2>Input.css</S.FileNameBox2>
            </S.FileBox>

            <S.UserInputBox>
                <LineNumberContainer />

                <S.StyledForm
                    onSubmit={props.handleSubmit((data: any) => {
                        props.onSubmit(data);
                    })}
                >
                    <S.UserInput>
                        <S.InputBox>
                            <S.StyledTypography>
                                유저 토큰 값
                            </S.StyledTypography>
                            <S.StyledTextField
                                {...props.register("userToken")}
                                disabled
                            />
                        </S.InputBox>

                        <S.InputBox>
                            <S.StyledTypography>
                                프로젝트 이름
                            </S.StyledTypography>
                            <S.StyledTextField
                                {...props.register("projectName", {
                                    required: "프로젝트 이름을 입력해주세요 !",
                                })}
                                placeholder="프로젝트 이름을 입력해주세요 !"
                            />
                            {props.errors.projectName && (
                                <S.InputError>
                                    {props.errors.projectName.message}
                                </S.InputError>
                            )}
                        </S.InputBox>

                        <S.StyledFormControl>
                            <S.StyledFormLabel>Config 설정</S.StyledFormLabel>
                            <RadioGroup row defaultValue="Default">
                                <S.StyledFormControlLabel
                                    value="Default"
                                    control={<S.StyledRadio />}
                                    label="Default1"
                                    {...props.register("config")}
                                />
                                <S.StyledFormControlLabel
                                    value="Default2"
                                    control={<S.StyledRadio />}
                                    label="Default2"
                                    {...props.register("config")}
                                />
                            </RadioGroup>
                        </S.StyledFormControl>

                        <S.InputBox>
                            <S.StyledTypography>요구사항</S.StyledTypography>
                            <S.StyledTextField
                                {...props.register("requirements", {
                                    required: "요구사항을 입력해주세요 !",
                                })}
                                multiline
                                minRows={4}
                                maxRows={4}
                            />
                            {props.errors.requirements && (
                                <S.InputError>
                                    {props.errors.requirements.message}
                                </S.InputError>
                            )}
                        </S.InputBox>
                    </S.UserInput>
                    <S.SubmitButtonBox>
                        <S.SubmitButton variant="contained" type="submit">
                            보내기
                        </S.SubmitButton>
                    </S.SubmitButtonBox>
                </S.StyledForm>
            </S.UserInputBox>

            <S.TerminalBox>
                {!props._isClickSubmitStored &&
                    props._logs.map((log, index) => (
                        <div key={index}>{log}</div>
                    ))}
                {props._isClickSubmitStored && <div>〉〉〉 Compiling...</div>}
            </S.TerminalBox>
        </S.InputPresenterWrapper>
    );
}
