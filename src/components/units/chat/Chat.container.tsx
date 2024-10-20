import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import ChatPresenter from "./Chat.presenter";
import { POST_CHECK_CURRENT_PHASE } from "./phase/Phase.queries";
import {
    isClickSubmitStored,
    phaseStored,
    projectNameStored,
    userTokenStored,
} from "@/commons/store/Chat.store";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

export default function ChatContainer() {
    const theme = useTheme();
    let intervalId: any;
    const _menuItem = ["Input", "Summary", "Animation", "Backlog", "Error"];

    const [_phaseStored, setPhaseStored] = useRecoilState(phaseStored);
    const [_isClickSubmitStored, _] = useRecoilState(isClickSubmitStored);
    const [_userTokenStored] = useRecoilState(userTokenStored);
    const [_projectNameStored] = useRecoilState(projectNameStored);

    const [_open, setOpen] = useState(false);
    const [_status, setStatus] = useState("Input");

    const drawerWidth = 180;

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        borderRight: "0.1px solid #676e95",
        backgroundColor: "#292D3E",
        overflowX: "hidden",
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderRight: "0.1px solid #676e95",
        backgroundColor: "#292D3E",
        overflowX: "hidden",
        width: `calc(${theme.spacing(7)} + 1px)`,
    });

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })<AppBarProps>(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#34324a",
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    marginLeft: drawerWidth,
                    width: `calc(100% - ${drawerWidth}px)`,
                    transition: theme.transitions.create(["width", "margin"], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
            },
        ],
    }));

    const Drawer = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    "& .MuiDrawer-paper": openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    "& .MuiDrawer-paper": closedMixin(theme),
                },
            },
        ],
    }));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickMenuItem = (item: string) => {
        setStatus(item);
    };

    const checkCurrentPhase = async () => {
        try {
            const _checkParams = {
                user_token: _userTokenStored,
                project_name: _projectNameStored,
            };

            const _currentPhase = await POST_CHECK_CURRENT_PHASE(_checkParams);
            setPhaseStored(_currentPhase?.phase);

            if (_currentPhase?.phase === "Done") {
                setStatus("Summary");
                clearInterval(intervalId);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (_isClickSubmitStored === true) {
            intervalId = setInterval(checkCurrentPhase, 10000);

            return () => clearInterval(intervalId);
        }
    }, [_isClickSubmitStored]);

    return (
        <ChatPresenter
            theme={theme}
            AppBar={AppBar}
            Drawer={Drawer}
            DrawerHeader={DrawerHeader}
            _menuItem={_menuItem}
            _phaseStored={_phaseStored}
            _isClickSubmitStored={_isClickSubmitStored}
            _open={_open}
            _status={_status}
            setStatus={setStatus}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleClickMenuItem={handleClickMenuItem}
        />
    );
}
