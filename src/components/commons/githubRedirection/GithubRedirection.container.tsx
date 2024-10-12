import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GithubRedirectionPresenter from "./GithubRedirection.presenter";
import { POST_GITHUB_ACCESS_TOKEN_URI } from "./GithubRedirection.queries";

export default function GithubRedirectionContainer() {
    const router = useRouter();
    const params = useSearchParams();
    const _code = params.get("code");

    useEffect(() => {
        const githubRedirectData = async () => {
            if (_code) {
                try {
                    await POST_GITHUB_ACCESS_TOKEN_URI(_code);

                    router.push("/chat");
                } catch (error) {
                    console.error(
                        "Error ocurred in KakaoRedirectionContainer",
                        error
                    );
                }
            }
        };

        githubRedirectData();
    }, [_code]);

    return (
        <>
            <GithubRedirectionPresenter />
        </>
    );
}
