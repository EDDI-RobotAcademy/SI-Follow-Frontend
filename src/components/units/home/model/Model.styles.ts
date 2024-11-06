import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const IntroudceWrapper = styled(Box)`
    height: auto;
`;

export const Div123 = styled(Box)`
    width: 24.5px;
    max-width: 24.5px;
    height: 14px;
    max-height: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    font-size: 0.1rem;
    padding-bottom: 0.5px;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
