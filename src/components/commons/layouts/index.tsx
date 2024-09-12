import { ReactNode } from "react";
import Header from "./header";

type LayoutsProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutsProps) {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
}
