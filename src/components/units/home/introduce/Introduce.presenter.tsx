import { useEffect, useRef } from "react";
import * as S from "./Introduce.styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export default function IntroducePresenter() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        }
    }, []);

    return (
        <>
            <S.IntroducePresenterBox>
                <S.IntroduceTopBox>
                    <S.IntroduceTopBigTypographyBox>
                        <S.IntroduceTopBigTypography>
                            Si-Follow
                        </S.IntroduceTopBigTypography>
                        <S.IntroduceTopBigTypography>
                            Code Generator
                        </S.IntroduceTopBigTypography>
                    </S.IntroduceTopBigTypographyBox>
                    <S.IntroduceTopSmallTypography>
                        Make your own fabulous code,
                    </S.IntroduceTopSmallTypography>
                    <S.IntroduceTopSmallTypography>
                        Si-Follow is the best way to make code with AI.
                    </S.IntroduceTopSmallTypography>
                </S.IntroduceTopBox>

                <S.IntroduceVideoBox>비디오 넣을 자리</S.IntroduceVideoBox>

                <S.TrustBox>
                    <S.TrustText>Trusted by engineers at</S.TrustText>
                    <S.LogoBox>
                        <S.EncoreLogo src="./images/encore.png" />
                        <S.SkLogo src="./images/sk.png" />
                        <S.Name>Jaeho Lee</S.Name>
                        <S.Name>Byeongchan Han</S.Name>
                    </S.LogoBox>
                    <S.LogoBox2>
                        <S.Name>Wonhyeong Jeong</S.Name>
                        <S.Name>Eddi</S.Name>
                    </S.LogoBox2>
                </S.TrustBox>

                <S.FeatureWrapper>
                    <S.FeatureBox>
                        <S.FeatureImg src="./images/vscode.webp" />
                        <S.FeatureTitle>Feels Familiar</S.FeatureTitle>
                        <S.FeatureContent>
                            Experience with a familiar UI/UX
                        </S.FeatureContent>
                    </S.FeatureBox>
                    <S.FeatureBox>
                        <S.FeatureImg src="./images/lock.webp" />
                        <S.FeatureTitle>Privacy & Security</S.FeatureTitle>
                        <S.FeatureContent>
                            Anyone can access your history or record.
                        </S.FeatureContent>
                    </S.FeatureBox>
                </S.FeatureWrapper>

                <S.LovedBox>
                    <S.LovedTitle>Loved by Developers</S.LovedTitle>
                    <S.LovedSubTitle>
                        We are proud to have helped developers all over the
                        world.
                    </S.LovedSubTitle>

                    <S.LovedCommentWrapper>
                        <S.LovedCommentBox>
                            <S.LovedName>Jaeho</S.LovedName>
                            <S.LovedJob>Developer, Pyeongtaek</S.LovedJob>
                            <S.LovedComment>
                                Si-follow is so good, and literally gets
                                better/more feature-rich every couple of weeks.
                            </S.LovedComment>
                        </S.LovedCommentBox>

                        <S.LovedCommentBox>
                            <S.LovedName>Byeongchan</S.LovedName>
                            <S.LovedJob>Homekeeper, Jeju</S.LovedJob>
                            <S.LovedComment>
                                Now I have AI superpowers right in my editor and
                                my terminal.
                            </S.LovedComment>
                        </S.LovedCommentBox>

                        <S.LovedCommentBox>
                            <S.LovedName>Wonhyeong</S.LovedName>
                            <S.LovedJob>BJ MonsterRat, Busan</S.LovedJob>
                            <S.LovedComment>
                                It's so elegant and easy. I'm an hour in and
                                already hooked.
                            </S.LovedComment>
                        </S.LovedCommentBox>
                    </S.LovedCommentWrapper>

                    <S.LovedCommentWrapper>
                        <S.LovedCommentBox>
                            <S.LovedName>Eddi</S.LovedName>
                            <S.LovedJob>Instructor, USA</S.LovedJob>
                            <S.LovedComment>
                                Started using Si-follow yesterday & I'm blown
                                away. I'm completely off VSCode now.
                            </S.LovedComment>
                        </S.LovedCommentBox>

                        <S.LovedCommentBox>
                            <S.LovedName>Gyumin</S.LovedName>
                            <S.LovedJob>Manufacturer, Seoul</S.LovedJob>
                            <S.LovedComment>
                                I just asked it to write a README for a project
                                I've been working on - analyzed the code-base
                                and worked first time.
                            </S.LovedComment>
                        </S.LovedCommentBox>

                        <S.LovedCommentBox>
                            <S.LovedName>Younghoon</S.LovedName>
                            <S.LovedJob>FE, Bucheon</S.LovedJob>
                            <S.LovedComment>
                                It can be summarized in 3 words. Awesome, Great,
                                Wonderful !
                            </S.LovedComment>
                        </S.LovedCommentBox>
                    </S.LovedCommentWrapper>
                </S.LovedBox>
            </S.IntroducePresenterBox>
        </>
    );
}
