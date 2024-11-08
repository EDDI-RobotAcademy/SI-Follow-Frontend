import { useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import ModelPresenter from "./Model.presenter";
import { IModelContainer } from "./Model.types";

export default function Model2Container(props: IModelContainer) {
    const { nodes, materials } = useGLTF("/3d/temp2.glb");
    const [planeSize, setPlaneSize] = useState<[number, number]>([1, 1]);

    function getMaterialBoundingBox(mesh: any) {
        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        return size;
    }

    useEffect(() => {
        if (props.groupRef.current) {
            props.groupRef.current.traverse((child: any) => {
                if (child.isMesh && !child.userData.isScreen) {
                    child.material.transparent = true;
                    child.material.opacity = 0;
                    child.material.needsUpdate = true;
                }
            });
        }

        props.captureScreen();
    }, []);

    useLayoutEffect(() => {
        if (props?.capturedTexture && nodes.Object_235_001) {
            const boundingBox = getMaterialBoundingBox(nodes.Object_235_001);
            const meshWidth = boundingBox.x;
            const meshHeight = boundingBox.y;

            const aspectRatio = props?.capturedTexture.aspectRatio;

            let planeWidth = meshWidth;
            let planeHeight = meshWidth / aspectRatio;

            if (planeHeight > meshHeight) {
                planeHeight = meshHeight;
                planeWidth = meshHeight * aspectRatio;
            }

            setPlaneSize([planeWidth, planeHeight]);
            props.setIsLayout(true);
        }
    }, [props.capturedTexture, nodes.Object_235_001]);

    return (
        <>
            <ModelPresenter
                nodes={nodes}
                materials={materials}
                planeSize={planeSize}
                groupRef={props.groupRef}
                screenRef={props.screenRef}
                capturedTexture={props.capturedTexture}
            />
        </>
    );
}
