import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../landingPage/Landing.css'
// import ToggleButton from "../../components/toggleButton";
import Nav from "../../components/nav/Nav.tsx";

// import images from "../../assets/constants/image.js";


function LandingPage(){

    return(
        <>

            {/* ------ Navigation Component -------*/}
            <Nav/>

            <div className="absolute h-[100%] w-full bg-custom-gradient top-[22px]">
                <div className="flex justify-content-center align-items-center">
                    <div className=" position-absolute bg-customGreen w-[200px] max-[339px]:w-[120px] top-0 left-0 right-0 h-full mx-auto" ></div>


                    <p className="absolute  xl:mt-80 lg:mt-80 md:mt-80 sm:mt-80  mainTextCss   font-rajdhani font-bold text-[53px] leading-[1.2] text-center   max-[1033px]:text-[45px] max-[881px]:text-[40px] max-[798px]:text-[35px] max-[437px]:text-[35px] max-[460px]:text-[32px] max-[335px]:text-[25px] max-[335px]:mt-80 max-[639px]:mt-80">Shop top <span className="mainTextInSubTxtCss">smartphones</span>, unbeatable deals! <br/> Upgrade your tech today online.</p>


                    {/*<h5 className=" subContentCss font-darker_grotesque font-normal text-[20px] leading-[22.12px] text-center mb-[-32rem] z-50 max-[479px]:text-[15px] max-[440px]:text-[15px] max-[450px]:text-[15px] max-[359px]:text-[13px] max-[324px]:text-[13px] max-[450px]:mt-[5rem]" >Unlock boundless possibilities with our curated collection of mobile <br/>*/}
                    {/*        phones! From flagship powerhouses to budget-friendly <br/>*/}
                    {/*        gems, find the  perfect device to fit your lifestyle</h5>*/}

                    <h5 className=" subContentCss font-darker_grotesque font-normal text-[20px] leading-[22.12px] text-center mb-[-32rem] z-50 max-[480px]:text-[15px] max-[295px]:text-[11px] max-[438px]:mt-5" >Unlock boundless possibilities with our curated collection of mobile <br/>
                        phones! From flagship powerhouses to budget-friendly <br/>
                        gems, find the  perfect device to fit your lifestyle</h5>


                </div>

                {/*---------------------  Toggle Button ------------------------*/}

                {/*<section className="toggleBtnGroup position-absolute right-0 top-[70px]">*/}
                {/*    <ToggleButton btnName="Cart" icon="fa fa-shopping-cart"/>*/}
                {/*    <ToggleButton btnName="Favourite" icon="far fa-heart"/>*/}
                {/*    <ToggleButton btnName="Dark Mood" icon="far fa-moon fa-lg"/>*/}
                {/*</section>*/}


                {/*---------------------  Search Bar ------------------------*/}

                <div className="mt-[20rem]">

                    <div className="form-group flex justify-center">
                        <div className="search-container relative flex items-center w-1/2 mx-auto">
                            <i className="fas fa-search search-icon absolute left-3 text-gray-500"></i>
                            <input type="text" className="form-control pl-10 pr-32 h-[40px] rounded-[12px] bg-[#D9D9D9] font-darker_grotesque" id="searchBar" placeholder="Search your product here..."/>
                            <button className="search-button absolute right-2 bg-[#6D6D6D] text-white h-[30px] w-[121px] rounded-[5px] font-poppins max-[644px]:w-[82px] max-[644px]:h-[30px] " id="searchButton">Search</button>
                        </div>
                    </div>


                </div>




                {/*-----------------------------------------------------------------------*/}

                {/*<section className="d-flex justify-content-center align-items-center z-[999999] mt-44" id="imageWheel">*/}
                {/*    <div className="relative z-[999999] h-0 w-full d-flex justify-content-center align-items-center">*/}
                {/*        <img src={images.Watch} alt="Watch" className="img-fluid   z-[999999] w-[330px]" />**/}
                {/*        /!*<img src={images.Chair} alt="Chair" className="img-fluid top-80  z-[999999] w-[250px]"/>*!/*/}
                {/*        /!*<img src={images.Tv} alt="TV" className="img-fluid top-80  z-[999999] w-[250px]" />*!/*/}
                {/*        /!*<img src={images.Phone} alt="Phone" className="img-fluid top-80  z-[999999] w-[250px]" />*!/*/}
                {/*        /!*<img src={images.HeadSet} alt="Headset" className="img-fluid mt-3  z-[999999] w-[250px]" />*!/*/}
                {/*    </div>*/}
                {/*</section>*/}




            </div>

        </>
    )
}

export default LandingPage;