import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import html2canvas from "html2canvas";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { GET_GITHUB_OAUTH_URI } from "./Home.queries";
import HomePresenter from "./Home.presenter";

export default function Home2Container() {
    const [capturedTexture, setCapturedTexture] = useState(null);
    const [isLayout, setIsLayout] = useState(false);
    const canvasRef = useRef(null);
    const captureRef = useRef(null);
    const groupRef = useRef(null);
    const screenRef = useRef(null);
    const cameraRef = useRef(null);
    const introDivRef = useRef(null);

    const captureScreen = async () => {
        if (captureRef.current) {
            const rect = captureRef.current.getBoundingClientRect();
            const htmlElement = document.documentElement;
            const rect2 = htmlElement.getBoundingClientRect();
            const heightToCapture = Math.min(rect2.height, rect.height);

            let y;
            if (rect.bottom > window.innerHeight) {
                y = rect.height - window.innerHeight;
            } else {
                y = 0;
            }

            y = Math.max(0, y);

            const height = Math.min(heightToCapture, rect.height - y);

            const canvas = await html2canvas(captureRef.current, {
                scale: window.devicePixelRatio,
                useCORS: true,
                scrollX: 0,
                scrollY: 0,
                x: 0,
                y: y,
                width: rect.width,
                height: height,
                windowWidth: rect.width,
                windowHeight: rect.height,
                backgroundColor: null,
            });

            const elementWidth = canvas.width;
            const elementHeight = canvas.height;

            const aspectRatio = elementWidth / elementHeight;

            const texture = new THREE.Texture(canvas);

            texture.needsUpdate = true;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;

            setCapturedTexture({ texture, aspectRatio });
        }
    };

    const handleClickLoginButton = () => {
        GET_GITHUB_OAUTH_URI();
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: captureRef.current,
                start: "bottom bottom",
                end: "+=500",
                scrub: true,
                invalidateOnRefresh: false,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (groupRef.current) {
                        groupRef.current.traverse((child: any) => {
                            if (
                                child.isMesh &&
                                child.material &&
                                !child.userData.isScreen
                            ) {
                                child.material.opacity = progress;
                                child.material.needsUpdate = true;
                            }
                        });
                    }
                },
            },
        });

        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".emptyBox",
                start: "top bottom",
                end: "+=500",
                pin: canvasRef.current,
                pinSpacing: false,
                scrub: true,
                onUpdate: (self) => {
                    const screen = screenRef.current;
                    const boundingBox = new THREE.Box3().setFromObject(screen);
                    const size = new THREE.Vector3();
                    boundingBox.getSize(size);

                    const frustumHeight = size.y;
                    const frustumWidth = size.x;

                    cameraRef.current.left = -frustumWidth / 2;
                    cameraRef.current.right = frustumWidth / 2;
                    cameraRef.current.top = frustumHeight / 2;
                    cameraRef.current.bottom = -frustumHeight / 2;

                    cameraRef.current.updateProjectionMatrix();

                    if (canvasRef.current && captureRef.current) {
                        captureRef.current.style.opacity =
                            self.progress > 0 ? 0 : 1;
                    }
                },
            },
        });

        const timeline3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".emptyBox",
                start: "top+=500 bottom",
                end: "+=500",
                pin: canvasRef.current,
                pinSpacing: false,
                scrub: true,
                onUpdate: (self) => {
                    if (cameraRef.current) {
                        const progress = self.progress;

                        const startZoom = 1;
                        const endZoom = 0.2;
                        const newZoom =
                            startZoom + progress * (endZoom - startZoom);

                        cameraRef.current.zoom = newZoom;
                        cameraRef.current.updateProjectionMatrix();
                    }
                },
            },
        });

        const timeline4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".emptyBox",
                start: "top+=1000 bottom",
                end: "+=500",
                pin: canvasRef.current,
                pinSpacing: false,
                scrub: true,
                onUpdate: (self) => {
                    if (groupRef.current) {
                        const progress = self.progress;

                        const initialPosition = new THREE.Vector3(
                            2.177,
                            -1.055,
                            0.591
                        );
                        const targetPosition = new THREE.Vector3(5, -1.2, 1.5);

                        groupRef.current.position.lerpVectors(
                            initialPosition,
                            targetPosition,
                            progress
                        );

                        const initialRotation = new THREE.Euler(0, 0, 0, "XYZ");
                        const targetRotation = new THREE.Euler(
                            0,
                            1.3,
                            0,
                            "XYZ"
                        );
                        const initialQuaternion =
                            new THREE.Quaternion().setFromEuler(
                                initialRotation
                            );
                        const targetQuaternion =
                            new THREE.Quaternion().setFromEuler(targetRotation);
                        const tempQuaternion = new THREE.Quaternion();
                        tempQuaternion
                            .copy(initialQuaternion)
                            .slerp(targetQuaternion, progress);

                        groupRef.current.quaternion.copy(tempQuaternion);
                    }
                },
            },
        });

        const timeline5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".emptyBox",
                start: "top+=1500 bottom",
                end: "+=500",
                pin: canvasRef.current,
                pinSpacing: false,
                scrub: true,
                onUpdate: (self) => {
                    if (cameraRef.current) {
                        const progress = self.progress;

                        const startZoom = 0.2;
                        const endZoom = 0.24;
                        const newZoom =
                            startZoom + progress * (endZoom - startZoom);

                        cameraRef.current.zoom = newZoom;
                        cameraRef.current.updateProjectionMatrix();
                    }
                },
            },
        });

        if (introDivRef.current) {
            gsap.fromTo(
                introDivRef.current,
                { opacity: 0, y: 0 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: introDivRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        pin: canvasRef.current,
                    },
                }
            );
        }

        return () => {
            timeline.kill();
            timeline2.kill();
            timeline3.kill();
            timeline4.kill();
            timeline5.kill();

            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (
            capturedTexture !== null &&
            screenRef.current !== null &&
            cameraRef.current !== null &&
            isLayout
        ) {
            const screen = screenRef.current;
            const boundingBox = new THREE.Box3().setFromObject(screen);
            const size = new THREE.Vector3();
            boundingBox.getSize(size);
            const frustumHeight = size.y;
            const frustumWidth = size.x;

            cameraRef.current.left = -frustumWidth / 2;
            cameraRef.current.right = frustumWidth / 2;
            cameraRef.current.top = frustumHeight / 2;
            cameraRef.current.bottom = -frustumHeight / 2;

            cameraRef.current.updateProjectionMatrix();
        }
    }, [capturedTexture, cameraRef, isLayout]);

    return (
        <HomePresenter
            captureRef={captureRef}
            canvasRef={canvasRef}
            cameraRef={cameraRef}
            groupRef={groupRef}
            screenRef={screenRef}
            introDivRef={introDivRef}
            capturedTexture={capturedTexture}
            captureScreen={captureScreen}
            setIsLayout={setIsLayout}
            handleClickLoginButton={handleClickLoginButton}
        />
    );
}
