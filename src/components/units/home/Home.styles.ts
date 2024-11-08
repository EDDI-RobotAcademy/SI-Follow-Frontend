import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const colors = {
    white: "#fff",
    orange: "#D49C3D",
    red: "#D14B3D",
    violet: "#CF52EB",
    blue: "#44A3F7",
    green: "#5ACB3C",
    yellow: "#DEBF40",
};

export const CanvasWrapper = styled(Box)`
    width: 100%;
    height: fit-content;
    position: relative;
`;

export const CaptureBox = styled(Box)`
    text-align: center;
    background-color: #f0f0f0;
`;

export const CanvasBox = styled(Box)`
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: calc(100vh + 2000px);
`;

export const EmptyBox = styled(Box)`
    height: fit-content;
`;

export const EmptyContent = styled(Box)`
    height: 2000px;
`;

export const ContentBox = styled(Box)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 20rem;
    padding-right: 20rem;
`;

export const RainbowList = styled.ul`
    height: fit-content;
    list-style: none;
    margin-bottom: 20rem;
    counter-reset: rainbow;
`;

export const RainbowLayer = styled.li`
    font-size: 12rem;
    color: ${({ color }) => color || "#fff"};
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000, 4px 4px 0 rgba(0, 0, 0, 0.2);

    animation: rainbow 1.5s ease-in-out infinite;
    position: absolute;
    top: 0;

    &:nth-of-type(1) {
        animation-delay: 0.1s;
        left: calc(20rem + 1px);
        z-index: -10;
    }
    &:nth-of-type(2) {
        animation-delay: 0.2s;
        left: calc(20rem + 2px);
        z-index: -20;
    }
    &:nth-of-type(3) {
        animation-delay: 0.3s;
        left: calc(20rem + 3px);
        z-index: -30;
    }
    &:nth-of-type(4) {
        animation-delay: 0.4s;
        left: calc(20rem + 4px);
        z-index: -40;
    }
    &:nth-of-type(5) {
        animation-delay: 0.5s;
        left: calc(20rem + 5px);
        z-index: -50;
    }
    &:nth-of-type(6) {
        animation-delay: 0.6s;
        left: calc(20rem + 6px);
        z-index: -60;
    }
    &:nth-of-type(7) {
        animation-delay: 0.7s;
        left: calc(20rem + 7px);
        z-index: -70;
    }

    @keyframes rainbow {
        0%,
        100% {
            transform: translateY(1rem);
        }
        50% {
            transform: translateY(-1rem);
        }
    }
`;

export const IntroduceContent = styled(Box)`
    font-size: 5rem;
    color: #ffffff;
    margin-bottom: 30rem;
`;

export const LoginBox = styled(Box)`
    height: 50rem;
    font-size: 5rem;
    color: #ffffff;
`;

export const LoginButton = styled(Button)`
    font-size: 2.6rem;
    color: #ffffff;

    & .MuiButtonBase-root {
        background-color: red;
    }

    animation: jittery 4s infinite;
    @keyframes jittery {
        5%,
        50% {
            transform: scale(1);
        }

        10% {
            transform: scale(0.9);
        }

        15% {
            transform: scale(1.15);
        }

        20% {
            transform: scale(1.15) rotate(-5deg);
        }

        25% {
            transform: scale(1.15) rotate(5deg);
        }

        30% {
            transform: scale(1.15) rotate(-3deg);
        }

        35% {
            transform: scale(1.15) rotate(2deg);
        }

        40% {
            transform: scale(1.15) rotate(0);
        }
    }
`;
