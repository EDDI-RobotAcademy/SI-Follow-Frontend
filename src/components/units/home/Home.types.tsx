import { RefObject, Dispatch, SetStateAction } from "react";
import * as THREE from "three";

export interface ICapturedTexture {
    texture: THREE.Texture;
    aspectRatio: number;
}

export interface IHomePresenter {
    captureRef: RefObject<HTMLDivElement>;
    canvasRef: RefObject<HTMLDivElement>;
    cameraRef: RefObject<THREE.OrthographicCamera>;
    groupRef: RefObject<THREE.Group>;
    screenRef: RefObject<THREE.Mesh>;
    introDivRef: RefObject<HTMLDivElement>;
    capturedTexture: ICapturedTexture | null;
    captureScreen: () => Promise<void>;
    setIsLayout: Dispatch<SetStateAction<boolean>>;
    handleClickLoginButton: () => void;
}
