export interface IModelContaier {
    groupRef: any;
    divRef: any;
    _htmlScroll: any;
}

export interface IModelPresenter {
    nodes: any;
    materials: any;
    groupRef: any;
    group235: () => any;
}

export interface IModel2Container {
    capturedTexture: any;
    screenRef: any;
    groupRef: any;
    cameraRef: any;
    targetMeshRef: any;
    captureScreen: () => void;
    setIsLayout: any;
}

export interface IModel2Presenter {
    nodes: any;
    materials: any;
    planeSize: any;
    screenRef: any;
    targetMeshRef: any;
    capturedTexture: any;
    groupRef: any;
}
