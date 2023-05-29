import { useState } from "react"
import { useLogin } from "../hooks/useLogin"



const Login = () => {

    const [ email , setEmail ] = useState("") 
    const [ password , setPassword ] = useState("") 
    const {login , isLoading , error } = useLogin()


    const handleClick = async (e) => {
        e.preventDefault()

        await login(email,password)
    }


    return (
        <form className="login" onSubmit={handleClick}>
            <h3>Log In</h3>

            <label>Email address:</label>
            <input
                type="email"
                onChange={ (e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={ (e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled= {isLoading} > Log ig</button>
            {error && <div className="error">{error}</div>}
            
        </form>
    )
}

export default Login