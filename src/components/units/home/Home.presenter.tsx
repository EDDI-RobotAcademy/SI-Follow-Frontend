import { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, Preload } from "@react-three/drei";

import ModelContainer from "./model/Model.container";
import IntroduceContainer from "./introduce/Introduce.container";
import { IHomePresenter } from "./Home.types";
import * as S from "./Home.styles";

export default function HomePresenter(props: IHomePresenter) {
    return (
        <>
            <S.CanvasWrapper>
                <S.CaptureBox ref={props.captureRef}>
                    <IntroduceContainer />
                </S.CaptureBox>

                <S.CanvasBox ref={props.canvasRef}>
                    <Canvas
                        gl={{
                            preserveDrawingBuffer: true,
                            outputColorSpace: THREE.SRGBColorSpace,
                        }}
                    >
                        <Suspense fallback={null}>
                            <OrthographicCamera
                                ref={props.cameraRef}
                                makeDefault
                                position={[0, 0, 10]}
                                near={1}
                                far={1000}
                                zoom={1}
                            />
                            <group position={[0, 0, 0]}>
                                <ModelContainer
                                    groupRef={props.groupRef}
                                    screenRef={props.screenRef}
                                    cameraRef={props.cameraRef}
                                    capturedTexture={props.capturedTexture}
                                    captureScreen={props.captureScreen}
                                    setIsLayout={props.setIsLayout}
                                />
                            </group>
                            <Preload all />
                        </Suspense>
                        <ambientLight intensity={1} />
                        <spotLight
                            position={[0, 0, 5]}
                            angle={0.15}
                            penumbra={1}
                        />
                        <pointLight position={[0, 0, 5]} />
                    </Canvas>
                </S.CanvasBox>

                <S.EmptyBox className="emptyBox" id="emptyBox">
                    <S.EmptyContent />
                    <S.ContentBox ref={props.introDivRef}>
                        <S.RainbowList>
                            <S.RainbowLayer color={S.colors.white}>
                                SI-Follow
                            </S.RainbowLayer>
                            <S.RainbowLayer color={S.colors.orange}>
                                SI-Follow
                            </S.RainbowLayer>
                            <S.RainbowLayer color={S.colors.red}>
                                SI-Follow
                            </S.RainbowLayer>
                            <S.RainbowLayer color={S.colors.violet}>
                                SI-Follow
                            </S.RainbowLayer>
                            <S.RainbowLayer color={S.colors.blue}>
                                SI-Follow
                            </S.RainbowLayer>
                            <S.RainbowLayer color={S.colors.green}>
                                SI-Follow
                            </S.RainbowLayer>
                            <S.RainbowLayer color={S.colors.yellow}>
                                SI-Follow
                            </S.RainbowLayer>
                        </S.RainbowList>

                        <S.IntroduceContent>
                            Type anything you’d like to ask or choose from
                            ready-made questions!
                        </S.IntroduceContent>

                        <S.LoginBox>
                            <div>Ready to Explore ?</div>
                            <S.LoginButton
                                sx={{ backgroundColor: "#90feb5" }}
                                onClick={props.handleClickLoginButton}
                            >
                                Click Here To Login !
                            </S.LoginButton>
                        </S.LoginBox>
                    </S.ContentBox>
                </S.EmptyBox>
            </S.CanvasWrapper>
        </>
    );
}
