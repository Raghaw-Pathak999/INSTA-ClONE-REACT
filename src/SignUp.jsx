import { useState } from "react";
import "./SignUp.css"

export function SignUp({ }) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function InstagramLogo({ src }) {
        return <img className="logo" src={src} alt="Instagram Logo" />;
      }

      const instagramLogoSrc = "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png";

    return (
        <>
            <div className="signUpContainer">

                <InstagramLogo src={instagramLogoSrc} />

                <form className="fromClass" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } />
                    </div>

                    <div className="form-group">
                        <label>Bio:</label>
                        <input type="text" value={bio} onChange={(e)=> setBio(e.target.value) } />
                    </div>

                    <button type="submit">SignUp</button>

                </form>

            </div>
        </>
    )
}

