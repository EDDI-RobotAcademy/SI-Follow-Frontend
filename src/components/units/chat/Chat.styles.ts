import styled from "@emotion/styled";
import {
    Box,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InputIcon from "@mui/icons-material/Input";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AnimationIcon from "@mui/icons-material/Animation";
import HistoryIcon from "@mui/icons-material/History";
import ErrorIcon from "@mui/icons-material/Error";

export const ChatWrapper = styled(Box)`
    display: flex;
`;

export const StyledIconButton = styled(IconButton)<{ open: Boolean }>`
    margin-right: 4rem;
    ${(props) => props.open && `display: none;`}
`;

export const LogoTypgraphy = styled(Typography)`
    font-size: 2.4rem;
`;

export const StyledChevronRightIcon = styled(ChevronRightIcon)`
    color: #676e95;
`;

export const StyledChevronLeftIcon = styled(ChevronLeftIcon)`
    font-size: 2.4rem;
    color: #676e95;
`;

export const StyledListItemButton = styled(ListItemButton)<{ open: Boolean }>`
    min-height: 4.8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    ${(props) =>
        props.open ? `justify-content: initial` : `justify-content: center`}
`;

export const StyledListItem = styled(ListItem)`
    dispaly: block;
`;

export const StyledListItemIcon = styled(ListItemIcon)<{ open: Boolean }>`
    min-width: 0;
    display: flex;
    justify-content: center;
    ${(props) => (props.open ? `margin-right: 2.4rem` : `margin-right: auto`)}
`;

export const StyledInputIcon = styled(InputIcon)`
    font-size: 2.4rem;
    color: #676e95;
`;

export const StyledSummarizeIcon = styled(SummarizeIcon)`
    font-size: 2.4rem;
    color: #676e95;
`;

export const StyledAnimationIcon = styled(AnimationIcon)`
    font-size: 2.4rem;
    color: #676e95;
`;

export const StyledHistoryIcon = styled(HistoryIcon)`
    font-size: 2.4rem;
    color: #676e95;
`;

export const StyledErrorIcon = styled(ErrorIcon)`
    font-size: 2.4rem;
    color: #676e95;
`;

export const StyledListItemText = styled(ListItemText)<{ open: Boolean }>`
    ${(props) => (props.open ? `opacity: 1` : `opacity: 0`)};
    font-weight: bold;
    color: #676e95;
    font-size: 2.4rem;
`;

export const UserInteractiveBox = styled(Box)`
    height: 100vh;
    flex-grow: 1;
    background-color: #292d3e;
`;
