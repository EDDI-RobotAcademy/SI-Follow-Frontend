import { RefObject } from "react";
import * as THREE from "three";

export interface ICapturedTexture {
    texture: THREE.Texture;
    aspectRatio: number;
}

export interface IModelContainer {
    capturedTexture?: {
        texture: THREE.Texture;
        aspectRatio: number;
    };
    screenRef: RefObject<THREE.Mesh>;
    groupRef: RefObject<THREE.Group>;
    cameraRef: RefObject<THREE.Camera>;
    captureScreen: () => Promise<void>;
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IModelPresenter {
    nodes: any;
    materials: any;
    planeSize: [number, number];
    screenRef: RefObject<THREE.Mesh>;
    capturedTexture?: ICapturedTexture | null;
    groupRef: RefObject<THREE.Group>;
}
