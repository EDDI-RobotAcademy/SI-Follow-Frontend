import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@/commons/styles/globalStyles/globalStyles";
import Layouts from "@/components/commons/layouts";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={globalStyles} />
            <Layouts>
                <Component {...pageProps} />
            </Layouts>
        </>
    );
}

export default App;
