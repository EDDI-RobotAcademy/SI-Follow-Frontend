import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import Model2Presenter from "./Model2.presenter";
import { IModel2Container } from "./Model.types";
import { useEffect, useLayoutEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

export default function Model2Container(props: IModel2Container) {
    const { nodes, materials } = useGLTF("/3d/temp2.glb");
    const [planeSize, setPlaneSize] = useState([1, 1]);

    function getMaterialBoundingBox(mesh: any) {
        console.log("4");
        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        return size;
    }

    useEffect(() => {
        if (props.groupRef.current) {
            console.log("5");
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
            console.log("6");
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
            <Model2Presenter
                nodes={nodes}
                materials={materials}
                planeSize={planeSize}
                groupRef={props.groupRef}
                screenRef={props.screenRef}
                targetMeshRef={props.targetMeshRef}
                capturedTexture={props.capturedTexture}
            />
        </>
    );
}
