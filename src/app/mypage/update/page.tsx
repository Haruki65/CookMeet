'use client';

import GreenQuadButton from "@/components/ui/buttun/GreenQuadButtun";
import WhiteQuadButton from "@/components/ui/buttun/WhiteQuadButtun";
import PasswordInput from "@/components/ui/form/PasswordInput";
import TextInput from "@/components/ui/form/TextInput";
import { userAtom } from "@/states/store/authAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type FormError = {
    error: boolean;
    message: string;
}

const Page = () => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [emailError, setEmailError] = React.useState<FormError>({ error: false, message: '' });
    const [passwordError, setPasswordError] = React.useState<FormError>({ error: false, message: '' });
    const [serverError, setServerError] = React.useState<FormError>({ error: false, message: '' })

    const Router = useRouter();

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Router.replace("/");
    };

    return (
        <div className="flex">
            <div className="basis-1/2 pt-16 pl-16 pr-5">
                <hgroup>
                    <h2 className="text-4xl text-green-700 font-bold">Meet a new meal.</h2>
                    <p className="mt-10 text-green-700">登録情報変更</p>
                </hgroup>
                <form onSubmit={onSubmit} className="mt-10">
                    <div>
                        <div>
                            <fieldset>
                                <TextInput
                                    label="新しいメールアドレス"
                                    type="email"
                                    helperText={emailError.message}
                                    error={emailError.error}
                                    placeholder="例: sample@example.com"
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                            </fieldset>
                            <fieldset className="mt-5">
                                <PasswordInput
                                    label="新しいパスワード"
                                    helperText={passwordError.message}
                                    error={passwordError.error}
                                    value={password}
                                    onChange={handleChangePassword}
                                    placeholder="パスワードを入力してください"
                                />
                            </fieldset>
                            <fieldset className="mt-5">
                                <PasswordInput
                                    label="新しいパスワード（再入力）"
                                    helperText={passwordError.message}
                                    error={passwordError.error}
                                    value={password}
                                    onChange={handleChangePassword}
                                    placeholder="確認のためもう一度入力してください"
                                />
                            </fieldset>
                        </div>
                        <div className="mt-16">
                            <GreenQuadButton type="submit">変更完了</GreenQuadButton>
                        </div>
                    </div>
                </form>
            </div>
            <aside className="basis-1/2">
                <br></br><br></br><br></br>
                <Image src={"/images/meal.png"} alt="料理のイメージ画像" className="w-full object-center object-fill" width={100} height={100} />
            </aside>

        </div>
    );
};

export default Page;