import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyles } from "@/commons/styles/globalStyles/globalStyles";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <Global styles={globalStyles} />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}

export default App;
