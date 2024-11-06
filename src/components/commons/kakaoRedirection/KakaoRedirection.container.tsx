import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import KakaoRedirectionPresenter from "./KakaoRedirection.presenter";
import {
    POST_EMAIL_DUPLICATION_CHECK,
    POST_KAKAO_ACCESS_TOKEN_URI,
    POST_KAKAO_USER_INFO,
} from "./KakaoRedirection.queries";

export default function KakaoRedirectionContainer() {
    const router = useRouter();
    const params = useSearchParams();
    const _code = params.get("code");

    useEffect(() => {
        const kakaoRedirectData = async () => {
            if (_code) {
                try {
                    await POST_KAKAO_ACCESS_TOKEN_URI(_code);

                    const _userInfo = await POST_KAKAO_USER_INFO();
                    const _email = _userInfo?.kakao_account?.email;

                    const _isEmailDuplication =
                        await POST_EMAIL_DUPLICATION_CHECK(_email);

                    if (_isEmailDuplication) {
                        console.log("기존 가입 고객입니다.");

                        const accessToken = localStorage.getItem("accessToken");

                        // if (accessToken) {
                        //     await this.requestAddRedisAccessTokenToDjango({
                        //         email,
                        //         accessToken,
                        //     }); // Fix: Pass as object directly
                        // } else {
                        //     console.error("AccessToken is missing");
                        // }

                        router.push("/chat");
                    } else {
                        console.log("신규 가입 고객입니다.");
                        router.push("/chat");
                    }

                    console.log("_isEmailDuplication", _isEmailDuplication);
                } catch (error) {
                    console.error(
                        "Error ocurred in KakaoRedirectionContainer",
                        error
                    );
                }
            }
        };

        kakaoRedirectData();
    }, [_code]);

    return (
        <>
            <KakaoRedirectionPresenter />
        </>
    );
}
