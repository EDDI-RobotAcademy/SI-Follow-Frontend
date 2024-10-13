"use client";

import { Suspense, useRef, useEffect } from "react";
import Router from "next/router";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import HomePresenterHero from "./Home.presenterHero";
import { IHomeContainerHero } from "./Home.types";
import { GET_GITHUB_OAUTH_URI, GET_KAKAO_OAUTH_URI } from "./Home.queries";

export default function HomeContainerHero(props: IHomeContainerHero) {
    const router = Router;
    const containerRef = useRef(null);
    const uniformsRef = useRef<any>({});
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const sceneRef = useRef(null);

    const fragmentShader = `
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform sampler2D u_noise;
      uniform sampler2D u_bg;
      uniform float u_scroll;
    
      const vec3 cloudcolour = vec3(.07,0.0,.24);
      const vec3 lightcolour = vec3(.25,0.6,1.);
    
      float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
  
      float noise(vec3 p){
          vec3 a = floor(p);
          vec3 d = p - a;
          d = d * d * (3.0 - 2.0 * d);
  
          vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
          vec4 k1 = perm(b.xyxy);
          vec4 k2 = perm(k1.xyxy + b.zzww);
  
          vec4 c = k2 + a.zzzz;
          vec4 k3 = perm(c);
          vec4 k4 = perm(c + 1.0);
  
          vec4 o1 = fract(k3 * (1.0 / 41.0));
          vec4 o2 = fract(k4 * (1.0 / 41.0));
  
          vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
          vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
  
          return o4.y * d.y + o4.x * (1.0 - d.y);
      }
  
      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        float noise1 = noise(vec3(uv * 3. * noise(vec3(uv * 3. + 100., u_time * 3. + 10.)), u_time * 2.))  * 2.;
        float noise2 = noise(vec3(uv + 2.35, u_time * 1.357 - 10.));
        uv.y -= u_scroll * .0001;
        
        uv += texture2D(u_bg, uv * vec2(.5, 1.) - vec2(u_time * .05, 1.) - .5 * .05).rg * 0.08 + noise1 * .008 * (1. - clamp(noise1 * noise1 * 2. + .2, 0., 1.));
        
        vec3 tex = texture2D(u_bg, uv * vec2(.5, 1.) - vec2(u_time * .02, 1.) - .5).rgb;
        uv.y -= u_scroll * .0001;
        vec3 tex1 = texture2D(u_bg, uv * vec2(.5, 1.) - vec2(u_time * .08, 1.)).rgb;
        uv.y -= u_scroll * .0001;
        vec3 tex2 = texture2D(u_bg, (uv * .8 + .5) * vec2(.5, 1.) - vec2(u_time * .1, 1.)).rgb;
        vec3 fragcolour = tex;
        
        float shade = tex.r;
        shade *= clamp(noise1 * noise2 * sin(u_time * 3.), .2, 10.);
        shade += shade * shade * 3.;
        shade -= (1. - clamp(tex1 * 4., 0., 1.).r) * .2;
        shade -= (1. - clamp(tex2 * 4., 0., 1.).r) * .1;
        
        fragcolour = mix(cloudcolour, lightcolour, shade);
  
        gl_FragColor = vec4(fragcolour, 1.);
      }
    `;

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin("anonymous");

        loader.load(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png",
            (texture) => {
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.minFilter = THREE.LinearFilter;

                loader.load(
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/clouds-1-tile.jpg",
                    (bg) => {
                        bg.wrapS = THREE.RepeatWrapping;
                        bg.wrapT = THREE.RepeatWrapping;
                        bg.minFilter = THREE.LinearFilter;

                        init(texture, bg);
                        animate();
                    }
                );
            }
        );

        const init = (texture: THREE.Texture, bg: THREE.Texture) => {
            const container = containerRef.current;
            const camera = new THREE.Camera();
            camera.position.z = 1;
            cameraRef.current = camera;

            const scene = new THREE.Scene();
            sceneRef.current = scene;

            const geometry = new THREE.PlaneGeometry(2, 2);

            uniformsRef.current = {
                u_time: { value: 1.0 },
                u_resolution: { value: new THREE.Vector2() },
                u_noise: { value: texture },
                u_bg: { value: bg },
                u_mouse: { value: new THREE.Vector2() },
                u_scroll: { value: 0 },
            };

            const material = new THREE.ShaderMaterial({
                uniforms: uniformsRef.current,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(1);
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            onResize();
            window.addEventListener("resize", onResize);

            document.addEventListener("pointermove", (e) => {
                let ratio = container.clientHeight / container.clientWidth;
                uniformsRef.current.u_mouse.value.x =
                    (e.pageX - container.clientWidth / 2) /
                    container.clientWidth /
                    ratio;
                uniformsRef.current.u_mouse.value.y =
                    ((e.pageY - container.clientHeight / 2) /
                        container.clientHeight) *
                    -1;
            });
        };

        const onResize = () => {
            const container = containerRef.current;
            const renderer = rendererRef.current;

            if (container && renderer) {
                const width = container.clientWidth;
                const height = container.clientHeight;

                renderer.setSize(width, height);
                uniformsRef.current.u_resolution.value.set(width, height);
            }
        };

        const animate = (time = 0) => {
            requestAnimationFrame(animate);
            const renderer = rendererRef.current;
            const camera = cameraRef.current;
            const scene = sceneRef.current;
            uniformsRef.current.u_time.value = time * 0.001;
            uniformsRef.current.u_scroll.value = window.scrollY;
            renderer.render(scene, camera);
        };

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const KakaoModel = () => {
        const _kakaoGroup = useRef<any>();
        const { scene } = useGLTF("/3d/kakao.glb");

        const handleClickKakao = (event: any) => {
            event.stopPropagation();
            GET_KAKAO_OAUTH_URI();
            router.push("/chat");
        };

        const handlePointerOverKakao = () => {
            document.body.style.cursor = "pointer";
        };

        const handlePointerOutKakao = () => {
            document.body.style.cursor = "default";
        };

        useFrame((state) => {
            const t = state.clock.getElapsedTime();

            _kakaoGroup.current.rotation.x = THREE.MathUtils.lerp(
                _kakaoGroup.current.rotation.x,
                Math.cos(t / 2) / 20 + 0.25,
                0.1
            );

            _kakaoGroup.current.rotation.y = THREE.MathUtils.lerp(
                _kakaoGroup.current.rotation.y,
                Math.sin(t / 4) / 20,
                0.1
            );

            _kakaoGroup.current.position.y = THREE.MathUtils.lerp(
                _kakaoGroup.current.position.y,
                (3 + Math.sin(t / 2)) / 2,
                0.1
            );
        });

        return (
            <group
                ref={_kakaoGroup}
                position={[-5, 0, 0]}
                scale={0.2}
                onPointerDown={handleClickKakao}
                onPointerOver={handlePointerOverKakao}
                onPointerOut={handlePointerOutKakao}
            >
                <primitive object={scene} />
            </group>
        );
    };

    const Kakao = () => {
        return (
            <Suspense fallback={null}>
                <KakaoModel />
                <pointLight position={[-5, 1.5, 0]} intensity={1.5} />
            </Suspense>
        );
    };

    const GoogleModel = () => {
        const _googleGroup = useRef<any>();
        const { scene } = useGLTF("/3d/google.glb");

        const handleClickGoogle = (event: any) => {
            event.stopPropagation();
            alert("구글 로그인은 아직 준비중입니다 !");
        };

        const handlePointerOverGoogle = () => {
            document.body.style.cursor = "pointer";
        };

        const handlePointerOutGoogle = () => {
            document.body.style.cursor = "default";
        };

        useFrame((state) => {
            const t = state.clock.getElapsedTime();

            _googleGroup.current.rotation.x = THREE.MathUtils.lerp(
                _googleGroup.current.rotation.x,
                Math.cos(t / 2) / 20 + 0.25,
                0.1
            );

            _googleGroup.current.rotation.y = THREE.MathUtils.lerp(
                _googleGroup.current.rotation.y,
                Math.sin(t / 4) / 20,
                0.1
            );

            _googleGroup.current.position.y = THREE.MathUtils.lerp(
                _googleGroup.current.position.y,
                (2.8 + Math.sin(t / 2)) / 2,
                0.1
            );
        });

        return (
            <group
                ref={_googleGroup}
                position={[-2.85, 0, 0]}
                scale={0.7}
                onPointerDown={handleClickGoogle}
                onPointerOver={handlePointerOverGoogle}
                onPointerOut={handlePointerOutGoogle}
            >
                <primitive object={scene} />
            </group>
        );
    };

    const Google = () => {
        return (
            <Suspense fallback={null}>
                <GoogleModel />
                <pointLight position={[-2.5, 1.5, 0]} intensity={1.5} />
            </Suspense>
        );
    };

    const GitModel = () => {
        const _gitGroup = useRef<any>();
        const { scene } = useGLTF("/3d/git.glb");

        const handleClickGit = (event: any) => {
            event.stopPropagation();
            GET_GITHUB_OAUTH_URI();
            // router.push("/chat");
        };

        const handlePointerOverGit = () => {
            document.body.style.cursor = "pointer";
        };

        const handlePointerOutGit = () => {
            document.body.style.cursor = "default";
        };

        useFrame((state) => {
            const t = state.clock.getElapsedTime();

            _gitGroup.current.rotation.x = THREE.MathUtils.lerp(
                _gitGroup.current.rotation.x,
                Math.cos(t / 2) / 20 + 0.25,
                0.1
            );

            _gitGroup.current.rotation.y = THREE.MathUtils.lerp(
                _gitGroup.current.rotation.y,
                Math.sin(t / 4) / 20,
                0.1
            );

            _gitGroup.current.position.y = THREE.MathUtils.lerp(
                _gitGroup.current.position.y,
                (2.8 + Math.sin(t / 2)) / 2,
                0.1
            );
        });

        return (
            <group
                ref={_gitGroup}
                position={[-0.8, 0, 0]}
                scale={0.7}
                onPointerDown={handleClickGit}
                onPointerOver={handlePointerOverGit}
                onPointerOut={handlePointerOutGit}
            >
                <primitive object={scene} />
            </group>
        );
    };

    const Git = () => {
        return (
            <Suspense fallback={null}>
                <GitModel />
                <pointLight position={[-0.5, 1.5, 0]} intensity={1.5} />
            </Suspense>
        );
    };

    const IconBox = () => {
        return (
            <Canvas>
                <Suspense fallback={null}>
                    <Kakao />
                    <Google />
                    <Git />
                    <ambientLight intensity={3} />
                </Suspense>
            </Canvas>
        );
    };

    return (
        <>
            <HomePresenterHero
                _isClickedLogin={props._isClickedLogin}
                onChangeIsClickedLogin={props.onChangeIsClickedLogin}
                IconBox={<IconBox />}
                containerRef={containerRef}
            />
        </>
    );
}
