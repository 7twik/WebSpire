import React,{ useRef, useState, useEffect } from "react";

import Post from "./components/Post";
import Tilt from 'react-parallax-tilt';
//import AuthContext from "./context/AuthProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Axios from "./api/axios"
// import ReactDOM from 'react-dom';
const LOGIN_URL = '/Auth';

const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        
        // const newUser={
        //     Username: user,
        //     Password: pwd
        // }
        //axios.get("/found").then(res => setNotes(res.data));
        
//         let request = new Request('http://localhost:5000/api/found', {
//     headers: new Headers({
//         'Content-Type': 'text/json' 
//     }),
//     method: 'GET'
// });


        // fetch("/api/found")
        // .then(res => {
        //     console.log(res);
        //     res.json();})
        // .then(jsonRes => setNotes(jsonRes));

        // fetch(request).then((response) => {
        //     console.log(response);
        //     response.json().then((data) => {
        //         console.log(data);
        //     });
        // });
        axios.get("/found").then(res => setNotes(res.data));
        
        console.log(notes);
        notes.forEach((notes)=>{
            const st=notes.Username;
            const tt=notes.Password;
            const pst={
                Username: st,
                Password: tt
            };
            console.log(st);
            if (user===st)
            {
                if (pwd===tt)
                {
                    Axios.post(LOGIN_URL,pst);
                    setSuccess(true);

                }
                else if (pwd!==tt)
                {
                    setErrMsg("Wrong Password for this username");
                    return 0;
                }
                userRef.current.focus();
            }
            else if(user!==st)
            {
                setErrMsg("Either username or password is wrong.");
            }
        })
    }


    return (
        <>
            {success ? (
                <div>
                    <Post />
                </div>
            ) : (
                <Tilt
                className="tilt"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={0.999}
          gyroscope={true}
                >
                <section className="App sec mcard"> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className='polo'>
                        <label htmlFor="username">Username:</label>
                        <input
                            className='kolo'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className='kolo'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        
                        <button className='butto kolo neon'>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/Register">Sign Up</a>
                        </span>
                    </p>
                </section>
                </Tilt>
            )}
        </>
    )
}

export default Login;