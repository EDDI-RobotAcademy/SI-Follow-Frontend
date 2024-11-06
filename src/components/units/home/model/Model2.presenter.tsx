import { IModel2Presenter } from "./Model.types";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Model2Presenter(props: IModel2Presenter) {
    return (
        <>
            <group
                {...props}
                dispose={null}
                position={[2.177, -1.055, 0.591]}
                ref={props.groupRef}
            >
                <group position={[0.138, 0, 2.307]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_172.geometry}
                        material={props.materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_173.geometry}
                        material={props.materials.Gray}
                    />
                </group>
                <group position={[0.138, 0, -2.927]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_169.geometry}
                        material={props.materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_170.geometry}
                        material={props.materials.Gray}
                    />
                </group>
                <group scale={[0.1, 1, 1]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_166.geometry}
                        material={props.materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_167.geometry}
                        material={props.materials.Gray}
                    />
                </group>
                <group position={[0.138, 0, 6.298]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_163.geometry}
                        material={props.materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_164.geometry}
                        material={props.materials.Gray}
                    />
                </group>
                <group
                    position={[0.172, 0, 3.687]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_160.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_161.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group position={[0.138, 0, -6.927]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_157.geometry}
                        material={props.materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_158.geometry}
                        material={props.materials.Gray}
                    />
                </group>
                <group
                    position={[0.172, 0, -2.727]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_154.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_155.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, -1.527]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_151.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_152.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, -0.327]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_148.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_149.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, -6.727]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_145.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_146.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, -4.327]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_142.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_143.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, 4.887]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_139.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_140.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[3.938, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_136.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_137.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[2.738, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_133.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_134.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[1.538, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_130.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_131.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[-0.062, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_127.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_128.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[-1.262, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_124.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_125.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[-2.462, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_121.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_122.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[-3.662, 1.5, -7.024]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_118.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_119.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, 0.873]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_115.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_116.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, -5.527]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_112.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_113.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.172, 0, 2.507]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_109.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_110.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[3.938, 1.5, -2.965]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_106.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_107.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[2.738, 1.5, -2.965]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_103.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_104.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[1.538, 1.5, -2.965]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_100.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_101.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[5.138, 1.5, -2.965]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_97.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_98.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.233, 0, -0.045]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_94.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_95.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.233, 0, 3.345]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_91.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_92.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[0.233, 0, -6.414]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_88.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_89.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[3.938, 1.5, 2.26]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_85.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_86.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[2.738, 1.5, 2.26]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_82.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_83.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[1.538, 1.5, 2.26]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_79.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_80.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[5.138, 1.5, 2.26]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_76.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_77.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[3.938, 1.5, 6.383]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_73.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_74.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[2.738, 1.5, 6.383]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_70.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_71.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[1.538, 1.5, 6.383]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_67.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_68.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group
                    position={[5.138, 1.5, 6.383]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_64.geometry}
                        material={props.materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_65.geometry}
                        material={props.materials.Glass}
                    />
                </group>
                <group position={[5.046, 0, -0.502]} rotation={[0, 1.571, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_383.geometry}
                        material={props.materials.Furniture_Office_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_383_001.geometry}
                        material={props.materials.Furniture_Office_01}
                        position={[0, 1.743, 0]}
                    />
                </group>
                <group position={[-2.191, 0.7, 0.652]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Object_235.geometry}
                        material={props.materials.Furniture_Office_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        position={[0.014, 0.355, -0.061]}
                        name="Object_235_Screen"
                        ref={props.screenRef}
                        userData={{ isScreen: true }}
                    >
                        <planeGeometry args={props.planeSize} />
                        <meshBasicMaterial
                            map={props.capturedTexture?.texture}
                            side={THREE.DoubleSide}
                            transparent
                        />
                    </mesh>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_62.geometry}
                    material={props.materials["Business.002"]}
                    position={[-2.108, 0, -2.941]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_60.geometry}
                    material={props.materials["Business.002"]}
                    position={[-3.051, 0, 1.383]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_58.geometry}
                    material={props.materials["Business.001"]}
                    position={[-0.271, 0, 0.241]}
                    rotation={[-Math.PI, 0.24, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_56.geometry}
                    material={props.materials["Business.005"]}
                    position={[-2.213, 0, -6.115]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_54.geometry}
                    material={props.materials["Business.003"]}
                    position={[4.222, 0, 4.804]}
                    rotation={[0, 1.17, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_52.geometry}
                    material={props.materials["Business.001"]}
                    position={[-6.058, 0, 2.566]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_50.geometry}
                    material={props.materials["Business.001"]}
                    position={[2.547, 0, 1.698]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_48.geometry}
                    material={props.materials["Business.003"]}
                    position={[-0.793, 0, -5.622]}
                    rotation={[0, 0.678, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_46.geometry}
                    material={props.materials["Business.001"]}
                    position={[4.366, 0, -5.647]}
                    rotation={[0, -0.864, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_44.geometry}
                    material={props.materials["Business.002"]}
                    position={[-4.224, 0, 5.539]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_42.geometry}
                    material={props.materials["Business.005"]}
                    position={[1.681, 0, 4.995]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_40.geometry}
                    material={props.materials["Business.003"]}
                    position={[1.694, 0, 5.607]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_38.geometry}
                    material={props.materials["Business.003"]}
                    position={[-3.258, 0, -5.929]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_36.geometry}
                    material={props.materials["Business.002"]}
                    position={[3.807, 0, 2.998]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_34.geometry}
                    material={props.materials["Business.002"]}
                    position={[0.144, 0, -4.789]}
                    rotation={[-Math.PI, 1.485, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_32.geometry}
                    material={props.materials["Business.005"]}
                    position={[-1.322, 0, -1.224]}
                    rotation={[0, -0.758, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_30.geometry}
                    material={props.materials["Business.005"]}
                    position={[-6.309, 0, -1.495]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_28.geometry}
                    material={props.materials["Business.002"]}
                    position={[-2.803, 0, 7.046]}
                    rotation={[Math.PI, -0.022, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_26.geometry}
                    material={props.materials["Business.003"]}
                    position={[-4.44, 0, -5.555]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_24.geometry}
                    material={props.materials["Business.006"]}
                    position={[1.982, 0, -0.981]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_22.geometry}
                    material={props.materials["Business.006"]}
                    position={[1.645, 0, 3.186]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_20.geometry}
                    material={props.materials["Business.002"]}
                    position={[3.349, 0, 5.66]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_18.geometry}
                    material={props.materials["Business.002"]}
                    position={[-0.629, 0, -0.404]}
                    rotation={[0, 1.365, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_16.geometry}
                    material={props.materials["Business.001"]}
                    position={[-0.831, 0, -3.286]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_14.geometry}
                    material={props.materials["Business.002"]}
                    position={[-6.657, 0, -4.035]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_12.geometry}
                    material={props.materials["Business.002"]}
                    position={[4.086, 0, -1.762]}
                    rotation={[0, -0.237, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_10.geometry}
                    material={props.materials["Business.003"]}
                    position={[-1.325, 0, 3.83]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_8.geometry}
                    material={props.materials["Business.003"]}
                    position={[-6.218, 0, 0.502]}
                    rotation={[0, -0.863, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_6.geometry}
                    material={props.materials["Business.002"]}
                    position={[-4.063, 0, 2.239]}
                    rotation={[0, 0.763, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_4.geometry}
                    material={props.materials["Business.003"]}
                    position={[3.349, 0, -0.927]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_381.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[4.615, 0, -3.607]}
                    rotation={[Math.PI, -1.057, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_379.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.789, 0.7, -4.758]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_377.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.572, 0, -4.806]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_375.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.924, 0, -5.374]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_373.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.35, 0, 6.051]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_371.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.379, 0, 6.051]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_369.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.068, -0.001, -6.648]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_367.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.961, -0.001, -0.845]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_365.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.109, 0, -6.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_363.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.662, 1.011, 6.051]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_361.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-0.118, 0, -0.309]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_359.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.849, 0, -6.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_357.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.37, 0, -6.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_355.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.573, 0, -4.827]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_353.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.53, 0, 4.079]}
                    rotation={[0, 0.16, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_351.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.998, 0.7, -4.65]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_349.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[4.615, 0, -6.347]}
                    rotation={[0, -0.982, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_347.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.35, 1.011, 6.051]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_345.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.066, 0.7, -0.239]}
                    rotation={[Math.PI, -0.487, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_343.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.022, 0.7, 0.17]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_341.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.356, 0.7, 0.17]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_339.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.583, 0, 0.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_337.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.588, 0, -6.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_335.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-4.328, 0, -6.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_333.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-0.603, 0, -6.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_331.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.565, 0, -2.596]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_329.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.515, 0, -2.596]}
                />
                <mesh
                    ref={props.targetMeshRef}
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_327.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.191, 0.7, -4.65]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_325.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.1, 0.7, -4.95]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_323.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.927, 0.7, -4.95]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_321.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.627, 0, -4.827]}
                    rotation={[Math.PI, -1.272, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_319.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.085, 0, -5.342]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_317.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.167, 0, -4.246]}
                    rotation={[Math.PI, -0.065, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_315.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.068, 0, -4.187]}
                    rotation={[Math.PI, -0.065, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_313.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-0.141, 0, -1.627]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_311.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-0.118, 0, 3.692]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_309.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-0.141, 0, 4.99]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_307.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.068, -0.001, -6.182]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_305.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.068, -0.001, -4.32]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_303.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.068, -0.001, -3.854]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_301.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.068, -0.001, -3.387]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_299.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.057, -0.001, -6.644]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_297.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.057, -0.001, -6.177]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_295.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.057, -0.001, -4.316]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_293.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.057, -0.001, -3.849]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_291.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.057, -0.001, -3.383]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_289.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.04, -0.001, -6.648]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_287.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.04, -0.001, -6.182]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_285.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.04, -0.001, -4.32]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_283.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.04, -0.001, -3.854]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_281.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.04, -0.001, -3.387]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_279.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.67, -0.001, -0.845]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_277.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.379, -0.001, -0.845]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_275.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.379, -0.001, 0.824]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_273.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.67, -0.001, 0.885]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_271.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.961, -0.001, 0.885]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_269.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.998, 0.7, -1.999]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_267.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.573, 0, -2.176]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_265.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.939, 0, -2.752]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_263.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.572, 0, -2.155]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_261.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.789, 0.7, -2.107]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_259.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.191, 0.7, -1.999]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_257.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.1, 0.7, -2.299]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_255.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.927, 0.7, -2.299]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_253.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.627, 0, -2.176]}
                    rotation={[Math.PI, -1.272, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_251.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.08, 0, -2.829]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_249.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.167, 0, -1.595]}
                    rotation={[Math.PI, -0.065, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_247.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.068, 0, -1.537]}
                    rotation={[Math.PI, -0.065, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_245.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.998, 0.7, 0.652]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_243.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.573, 0, 0.474]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_241.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.987, 0, -0.041]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_239.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.572, 0, 0.495]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_237.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.402, 0.7, 4.293]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_233.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.1, 0.7, 0.351]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_231.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.927, 0.7, 0.351]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_229.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.627, 0, 0.474]}
                    rotation={[Math.PI, -1.272, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_227.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.085, 0, -0.041]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_225.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.167, 0, 1.056]}
                    rotation={[Math.PI, -0.065, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_223.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.068, 0, 1.259]}
                    rotation={[Math.PI, -0.065, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_221.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.309, 0, 4.133]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_219.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.648, -0.001, 4.867]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_217.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.318, -0.001, 4.867]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_215.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.009, -0.001, 4.867]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_213.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.572, 0, 3.329]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_211.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.572, 0, 5.191]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_209.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.372, 0, 2.837]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_207.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.63, 0, 4.317]}
                    rotation={[0, 0.16, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_205.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.619, 0, 3.513]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_203.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.446, 0, 5.943]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_201.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-3.349, 0, 5.131]}
                    rotation={[0, 0.16, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_199.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-2.122, 0, 6.445]}
                    rotation={[0, -0.451, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_197.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[-1.707, 0, 5.589]}
                    rotation={[0, -0.451, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_195.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.009, -0.001, 3.221]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_193.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.339, -0.001, 3.221]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_191.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.648, -0.001, 3.313]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_189.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.571, -0.001, 4.173]}
                    rotation={[0, -1.272, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_187.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.015, -0.001, 4.044]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_185.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[4.919, 0, 5.318]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_183.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[4.919, 0, 3.406]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_181.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[1.068, -0.001, -5.69]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_179.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[2.057, -0.001, -5.685]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_177.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[3.04, -0.001, -5.69]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Object_175.geometry}
                    material={props.materials.Furniture_Office_01}
                    position={[4.961, 1.011, 5.554]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
            </group>
        </>
    );
}
