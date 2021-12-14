import { Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <div className='bg-emerald-300'>
            <nav className='h-14 bg-emerald-300 container mx-auto flex items-center gap-5'>
                <Link to="/" className='bg-teal-50 rounded-md px-4 cursor-pointer'>Inicio</Link>
                <Link to="/voild-calculator" className='bg-teal-50 rounded-md px-4 cursor-pointer'>Voild Calculator</Link>
                <Link to="/advanced-guides" className='bg-teal-50 rounded-md px-4 cursor-pointer'>Advanced Guides</Link>
            </nav>
        </div>
    )
}

export default Navbar