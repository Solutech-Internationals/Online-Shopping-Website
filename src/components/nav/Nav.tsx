import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import images from '../../assets/constants/image.js';


function Nav(){
    //
    // const linkStyle = {
    //     fontFamily: 'Poppins, sans-serif',
    //     fontWeight: 400,
    //     fontSize: '18px',
    //     lineHeight: '27px',
    // };
    //
    // const menuItems = [
    //     "Home",
    //     "Products",
    //     "About Us",
    //     "Contact Us",
    //     "Register",
    //
    // ];

    return(
        <>
            <nav className="px-5 w-full h-[60px] bg-[#D9D9D9]  shadow-md flex justify-between items-center absolute z-[99999999999999999999]">
                {/* Logo */}
                <div className="logo flex items-center">
                    <img src={images.Logo} alt="logo" className="h-8 w-auto mr-2" />
                    <h1 className="text-lg font-semibold text-white" style={{ background: 'linear-gradient(to right, #b927fc 0%, #2c64fc 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LOGO</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center">
                    <li className="ml-6"><a href="#" className="text-black text-sm font-normal py-1 px-2n dev rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">Home</a></li>
                    <li className="ml-6"><a href="#" className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px] ">Products</a></li>
                    <li className="ml-6"><a href="#" className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">About Us</a></li>
                    <li className="ml-6"><a href="#" className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">Contact Us</a></li>
                    <li className="ml-6">
                        <select className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-yellow-100 bg-blue-600 transition duration-300 w-[100px] font-poppins">
                            <option value="">Register</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div className="hamburger md:hidden cursor-pointer">
                    <span className="line w-6 h-0.5 bg-black block mb-1"></span>
                    <span className="line w-6 h-0.5 bg-black block mb-1"></span>
                    <span className="line w-6 h-0.5 bg-black block mb-1"></span>
                </div>
            </nav>


        </>
    )
}
export default Nav