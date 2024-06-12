import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../landingPage/Landing.css'
import ToggleButton from "../../components/toggleButton";
import Nav from "../../components/nav/Nav.tsx";

// @ts-ignore
//import images from "../../assets/constants/image.js";

function Landing(){

    return(
        <>

            {/* ------ Navigation Component -------*/}
            <Nav/>

            <div className="position-absolute h-full w-full top-0 bg-custom-gradient ">
                <div className="flex justify-content-center align-items-center">
                    <div className=" position-absolute bg-customGreen w-[215px] top-0 left-0 right-0 h-full mx-auto" ></div>


                    <p className="absolute  xl:mt-96 lg:mt-96 md:mt-96 sm:mt-96  mainTextCss   font-rajdhani font-bold text-[53px] leading-[1.2] text-center   max-[1033px]:text-[45px] max-[881px]:text-[40px] max-[798px]:text-[35px] max-[437px]:text-[35px] max-[639px]:mt-[24rem]">Shop top <span className="mainTextInSubTxtCss">smartphones</span>, unbeatable deals! <br/> Upgrade your tech today online.</p>


                    <h5 className=" subContentCss font-darker_grotesque font-normal text-[20px] leading-[27.12px] text-center mb-[-37rem] z-50 max-[479px]:text-[15px] max-[440px]:text-[15px] max-[450px]:text-[15px] max-[359px]:text-[13px] max-[324px]:text-[13px] max-[450px]:mt-[5rem]" >Unlock boundless possibilities with our curated collection of mobile <br/>
                            phones! From flagship powerhouses to budget-friendly <br/>
                            gems, find the  perfect device to fit your lifestyle</h5>
                    

                </div>

                {/*---------------------  Toggle Button ------------------------*/}

                <section className="toggleBtnGroup position-absolute right-0 top-[70px]">
                    <ToggleButton btnName="Cart" icon="fa fa-shopping-cart"/>
                    <ToggleButton btnName="Favourite" icon="far fa-heart"/>
                    <ToggleButton btnName="Dark Mood" icon="far fa-moon fa-lg"/>
                </section>


                {/*---------------------  Search Bar ------------------------*/}

                <div className="mt-96">

                    <div className="form-group flex justify-center">
                        <div className="search-container relative flex items-center w-1/2 mx-auto">
                            <i className="fas fa-search search-icon absolute left-3 text-gray-500"></i>
                            <input type="text" className="form-control pl-10 pr-32 h-[57px] rounded-[12px] bg-[#D9D9D9] font-darker_grotesque" id="custSearchTxt" placeholder="Search your product here..."/>
                            <button className="search-button absolute right-2 bg-[#6D6D6D] text-white h-[47px] w-[121px] rounded-[12px] font-poppins" id="searchButton">Search</button>
                        </div>
                    </div>


                </div>




                {/*-----------------------------------------------------------------------*/}


                {/*<section className="d-flex justify-content-center align-items-center mt-52" id="imageWheel">*/}
                {/*    <div className="imageWheelContainer ">*/}
                {/*        <img src={images.Watch} alt="Watch" className="img-fluid watchImageWheel" />*/}
                {/*        <img src={images.Chair} alt="Chair" className="img-fluid chairImageWheel" />*/}
                {/*        <img src={images.Tv} alt="TV" className="img-fluid tvImageWheel" />*/}
                {/*        <img src={images.Phone} alt="Phone" className="img-fluid phoneImageWheel" />*/}
                {/*        <img src={images.HeadSet} alt="Headset" className="img-fluid headSetImageWheel" />*/}
                {/*    </div>*/}
                {/*</section>*/}



            </div>
        </>
    )
}

export default Landing