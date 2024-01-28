import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/')
    }

    return (
        <div>
            <img width={250} height={200} src={"./images/time.png"} alt="image" />
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <a target='_blank' href="https://majangstories.blogspot.com/p/sitemap.html">
                Our Blog
            </a>
            <button style={{ background: '#088F8F', color: 'white' }} onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Home