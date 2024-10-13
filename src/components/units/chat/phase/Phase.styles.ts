import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LoaderBox = styled(Box)`
    width: 100%;
    height: calc(100% - 6.4rem);
`;

export const Loader = styled(Box)<{ phase: string }>`
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: fit-content;
    font-size: 3.6rem;
    line-height: 1.4;
    font-weight: bold;
    background: linear-gradient(#ffcb6b 0 0) left,
        linear-gradient(#ffcb6b 0 0) right;
    background-repeat: no-repeat;
    border-right: 5px solid #0000;
    border-left: 5px solid #0000;
    background-origin: border-box;
    position: relative;
    animation: l9-0 2s infinite;

    &::before {
        content: "${(props) => props.phase}";
        color: #ffcb6b;
    }

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 110px;
        height: 300px;
        background: linear-gradient(
                    90deg,
                    #c3e88d 20px,
                    #0000 0 calc(100% - 20px),
                    #c3e88d 0
                )
                bottom / 110px 100px,
            linear-gradient(
                    90deg,
                    #f07178 20px,
                    #0000 0 calc(100% - 20px),
                    #f07178 0
                )
                bottom 50px left 0 / 110px 30px,
            linear-gradient(#c3e88d 0 0) bottom 15px left 0 / 110px 40px,
            linear-gradient(#c3e88d 0 0) bottom 0 left 50% / 40px 80px;
        background-repeat: no-repeat;
        animation: l9-1 2s infinite;
    }

    @keyframes l9-0 {
        0%,
        25% {
            background-size: 50% 100%;
        }
        25.1%,
        75% {
            background-size: 0 0, 50% 100%;
        }
        75.1%,
        100% {
            background-size: 0 0, 0 0;
        }
    }

    @keyframes l9-1 {
        25% {
            background-position: bottom, bottom 270px left 0, bottom 15px left 0,
                bottom 0 left 50%;
            left: 0;
        }
        25.1% {
            background-position: bottom, bottom 50px left 0, bottom 15px left 0,
                bottom 0 left 50%;
            left: 0;
        }
        50% {
            background-position: bottom, bottom 50px left 0, bottom 15px left 0,
                bottom 0 left 50%;
            left: calc(100% - 110px);
        }
        75% {
            background-position: bottom, bottom 270px left 0, bottom 15px left 0,
                bottom 0 left 50%;
            left: calc(100% - 110px);
        }
        75.1% {
            background-position: bottom, bottom 50px left 0, bottom 15px left 0,
                bottom 0 left 50%;
            left: calc(100% - 110px);
        }
    }
`;
