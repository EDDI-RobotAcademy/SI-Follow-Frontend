import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const IntroducePresenterBox = styled(Box)`
    padding: 2rem;
    margin: 0 auto;
    max-width: 90rem;
`;

export const IntroduceTopBox = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-radius: 16px;
    background-image: linear-gradient(
        225deg,
        #ff3cac 0%,
        #784ba0 50%,
        #2b86c5 100%
    );
`;

export const IntroduceTopBigTypographyBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const IntroduceTopBigTypography = styled(Typography)`
    font-size: 8.6rem;
    color: #ffffff;
    animation: flashText 0.5s ease-out alternate infinite;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: -10%;
        width: 100%;
        background: #ffffff;
        filter: blur(10px);
        opacity: 0;
        animation: flash 1s ease-out alternate infinite;
    }

    @keyframes flash {
        to {
            opacity: 1;
        }
    }

    @keyframes flashText {
        to {
            opacity: 0;
        }
    }
`;

export const IntroduceTopSmallTypography = styled(Typography)`
    font-size: 2.8rem;
    color: #ffffff;
`;

export const IntroduceVideoBox = styled(Box)`
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 10rem;
    background-color: #bdbdbd;
    margin-bottom: 2rem;
`;

export const TrustBox = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    font-size: 1.8rem;
    border-radius: 16px;
    background-color: #000000;
`;

export const TrustText = styled(Box)`
    color: #ffffff;
    opacity: 0.6;
    margin-bottom: 2.5rem;
`;

export const LogoBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
`;

export const LogoBox2 = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const EncoreLogo = styled.img`
    height: 5rem;
    margin-left: 3.2rem;
    margin-right: 3.2rem;

    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
`;

export const SkLogo = styled.img`
    height: 5rem;
    margin-left: 3.2rem;
    margin-right: 3.2rem;

    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
`;

export const Name = styled(Typography)`
    font-size: 2.6rem;
    color: #ffffff;
    line-height: 5rem;
    margin-left: 3.2rem;
    margin-right: 3.2rem;
`;

export const FeatureWrapper = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2.5rem;
    border-radius: 16px;
    background-color: #bdbdbd;
`;

export const FeatureBox = styled(Box)`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0rem 4rem 0rem;
`;

export const FeatureImg = styled.img`
    height: 6.4rem;
`;

export const FeatureTitle = styled(Box)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 800;
`;

export const FeatureContent = styled(Box)`
    font-size: 2rem;
`;

export const LovedBox = styled(Box)`
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    padding-bottom: 2rem;
    border-radius: 16px;
    background-color: #000000;
`;

export const LovedTitle = styled(Typography)`
    font-size: 4.8rem;
    font-weight: 800;
    color: #ffffff;
`;

export const LovedSubTitle = styled(Typography)`
    margin-bottom: 2.5rem;
    font-size: 2rem;
    color: #ffffff;
`;

export const LovedCommentWrapper = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`;

export const LovedCommentBox = styled(Box)`
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem;
    padding: 1.2rem;
    border-radius: 16px;
    color: #000000;
    background-color: #ffffff;
`;

export const LovedName = styled(Typography)`
    font-size: 1.6rem;
    font-weight: 600;
`;

export const LovedJob = styled(Typography)`
    font-size: 1.4rem;
    margin-bottom: 1rem;
`;

export const LovedComment = styled(Typography)`
    font-size: 1.6rem;
    text-align: left;
`;
