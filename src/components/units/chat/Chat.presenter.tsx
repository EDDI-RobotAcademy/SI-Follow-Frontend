import { Toolbar, List, CssBaseline, Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import InputContainer from "./input/Input.container";
import SummaryContainer from "./summary/Summary.container";
import AnimationPresenter from "./animation/Animation.presenter";
import BacklogPresenter from "./backlog/Backlog.presenter";
import ErrorPresenter from "./error/Error.presenter";
import { IChatPresenter } from "./Chat.types";
import PhaseContainer from "./phase/Phase.container";
import * as S from "./Chat.styles";

export default function ChatPresenter(props: IChatPresenter) {
    return (
        <>
            <S.ChatWrapper>
                <CssBaseline />
                <props.AppBar open={props._open}>
                    <Toolbar>
                        <S.StyledIconButton
                            open={props._open}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon />
                        </S.StyledIconButton>
                        <S.LogoTypgraphy noWrap>Si-Follow</S.LogoTypgraphy>
                    </Toolbar>
                </props.AppBar>

                <props.Drawer variant="permanent" open={props._open}>
                    <props.DrawerHeader>
                        <IconButton onClick={props.handleDrawerClose}>
                            {props.theme.direction === "rtl" ? (
                                <S.StyledChevronRightIcon />
                            ) : (
                                <S.StyledChevronLeftIcon />
                            )}
                        </IconButton>
                    </props.DrawerHeader>
                    <Divider />
                    <List>
                        {props._menuItem.map((item, index) => (
                            <S.StyledListItem
                                key={item}
                                disablePadding
                                onClick={() => props.handleClickMenuItem(item)}
                            >
                                <S.StyledListItemButton open={props._open}>
                                    <S.StyledListItemIcon open={props._open}>
                                        {index % props._menuItem.length ===
                                        0 ? (
                                            <S.StyledInputIcon />
                                        ) : index % props._menuItem.length ===
                                          1 ? (
                                            <S.StyledSummarizeIcon />
                                        ) : index % props._menuItem.length ===
                                          2 ? (
                                            <S.StyledAnimationIcon />
                                        ) : index % props._menuItem.length ===
                                          3 ? (
                                            <S.StyledHistoryIcon />
                                        ) : (
                                            <S.StyledErrorIcon />
                                        )}
                                    </S.StyledListItemIcon>
                                    <S.StyledListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.6rem",
                                        }}
                                        primary={item}
                                        open={props._open}
                                    />
                                </S.StyledListItemButton>
                            </S.StyledListItem>
                        ))}
                    </List>
                </props.Drawer>

                <S.UserInteractiveBox>
                    <props.DrawerHeader />
                    {props._status === "Input" ? (
                        props._phaseStored === "" &&
                        !props._isClickSubmitStored ? (
                            <InputContainer setStatus={props.setStatus} />
                        ) : props._phaseStored === "Done" ? (
                            <div
                                style={{
                                    width: "100%",
                                    height: "calc(100% - 6.4rem)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "2.5rem",
                                    color: "#eeffff",
                                }}
                            >
                                <div>
                                    현재 요청사항을 모두 구동완료하였습니다.
                                </div>
                            </div>
                        ) : (
                            <PhaseContainer setStatus={props.setStatus} />
                        )
                    ) : props._phaseStored === "" ? (
                        <div
                            style={{
                                width: "100%",
                                height: "calc(100% - 6.4rem)%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "2.5rem",
                                color: "#eeffff",
                            }}
                        >
                            <div>아직 요청하지 않은 상태입니다.</div>
                            <div>요청을 먼저해주세요</div>
                        </div>
                    ) : props._phaseStored !== "Done" ? (
                        <div
                            style={{
                                width: "100%",
                                height: "calc(100% - 6.4rem)%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "2.5rem",
                                color: "#eeffff",
                            }}
                        >
                            <div>현재 요청사항을 구동중입니다.</div>
                            <div>잠시만 기다려주세요.</div>
                        </div>
                    ) : props._status === "Summary" ? (
                        <SummaryContainer />
                    ) : props._status === "Animation" ? (
                        <AnimationPresenter />
                    ) : props._status === "Backlog" ? (
                        <BacklogPresenter />
                    ) : (
                        <ErrorPresenter />
                    )}
                </S.UserInteractiveBox>
            </S.ChatWrapper>
        </>
    );
}
