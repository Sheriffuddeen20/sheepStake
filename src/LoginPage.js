import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () =>{
    const userRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        userRef.current.focus()

    }, [])

   const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user, pwd)
    setUser('')
    setPwd('')
    setSuccess(true)
   }

    return(
        <>
        {
                success ?
                <section className="div">
                    <h1>
                        you are logged in !
                    </h1>
                    <br />
                    <p> 
                        <Link to="/" className="link">Go to Home</Link>
                    </p>
                </section>
                :
                <div className="div">
            
            <form onSubmit={handleSubmit}>
                <div>
                <div className="user">
                    <label>
                        username:
                    </label>
                    <br />
                    <input 
                    className="input"
                    type="text"
                    required
                    id="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    ref={userRef}
                    autoComplete="off"
                    />
                </div>
                    <div className="user">
                    <label>
                        password:
                    </label>
                    <br />
                    <input 
                    className="input"
                    type="password"
                    required
                    id="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    />
                    </div>
                </div>
                <button type="submit" className="button"> Sign In </button>
            </form>

            <p className="link"> Need an Account ?
            <br />
                <span>
                    <Link to="/login" className="link">Sign Up</Link>
                </span>
            </p>
        </div>

            }
        </>
        
    )
}
export default LoginPage