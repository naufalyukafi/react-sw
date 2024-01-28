import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const onLogin = () => {
        navigate('/home')
    }
    return (
        <div>
            <div>
                <button style={{ background: '#088F8F', color: 'white' }} onClick={onLogin}>Signin Test</button>
            </div>
        </div>
    )
}

export default Login