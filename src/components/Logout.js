import { signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase.js";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate(); // useNavigateは関数コンポーネント内でのみ呼び出す
    const logout = () => {
        //ログアウト
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        });
    };

    return (
        <div>
            <p>ログアウトする</p>
            <button onClick={logout}>ログアウト</button>
        </div>
    );
};

export default Logout;