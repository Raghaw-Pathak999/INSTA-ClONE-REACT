import { useState } from "react";
import "./SignIn.css"

export function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    function InstagramLogo({ src }) {
        return <img className="logo" src={src} alt="Instagram Logo" />;
      }

      const instagramLogoSrc = "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png";

    return(
        <>
            <div className="SingInContainer">

            <InstagramLogo src={instagramLogoSrc} />

                <form className="fromClass" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit">SignIn</button>

                </form>

            </div>
        </>
    )
}
