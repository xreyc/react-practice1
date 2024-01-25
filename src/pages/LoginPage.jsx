import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState('segumareyco@gmail.com');
    const [password, setPassword] = useState('');

    const onChangeEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const onChangePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    const onClickButton = () => {
        setEmail("reniel.seguma@gmail.com");
    }

    return (
        <div>
            <div>{email}</div>
            <div>{password}</div>
            <div>
                <input placeholder="Email" value={email} onChange={(event) => onChangeEmailInput(event)}/>
            </div>
            <div>
                <input placeholder="Password" value={password} onChange={(event) => onChangePasswordInput(event)}/>
            </div>

            <div>
                <button onClick={() => onClickButton()}>Change Email</button>
            </div>
        </div>
    )
}

export default LoginPage;