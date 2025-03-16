import React, { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header/Header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiDeliveryTruck } from 'react-icons/ci';
import { PiFactoryLight, PiFactoryThin, PiHandSoap, PiNuclearPlant, PiNuclearPlantLight, PiTractor, PiTractorLight } from 'react-icons/pi';
import { LiaDrumSteelpanSolid } from 'react-icons/lia';
import { MdOutlineEmojiTransportation, MdOutlineStar } from 'react-icons/md';
import { GiCargoShip, GiChemicalDrop, GiDeliveryDrone, GiGlassShot, GiNewspaper, GiNuclearWaste } from 'react-icons/gi';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BiLabel } from 'react-icons/bi';
import { IoDocumentsOutline, IoPlay } from 'react-icons/io5';
import Footer from '../Components/Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from "aos";
import { ImInsertTemplate } from 'react-icons/im';
import { TbBuildingFactory, TbPerfume } from 'react-icons/tb';
import { FaArrowRightLong, FaArrowUpLong, FaTruckFast, FaTruckPlane } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaAngleDoubleUp, FaArrowRight, FaCheck } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';


function Home() {
    const [activetabs, setActivetabs] = useState(0)
    const [toggler, setToggler] = useState(false)
    const Navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [showButton, setShowButton] = useState(false);

    // Handle the scroll event to track the scroll position
    const handleScroll = () => {
        const scrollPosition = window.scrollY; // Get the current scroll position
        const windowHeight = window.innerHeight; // Get the window's height
        const documentHeight = document.documentElement.scrollHeight; // Get the total document height

        // Show the button when the user scrolls past 10% of the page
        if (scrollPosition / (documentHeight - windowHeight) > 0.1) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Scroll to the top of the page when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Add event listener for scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const responsive_2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const TogglerNew = () => {
        setToggler(!toggler)
    }

    const words = [
        "Your Reliable Source for Premium Chemicals—Let’s Talk Solutions!",
        "We are One Stop Shop for all your Chemical needs!",
        "Time to Level Up—Get in Touch and Experience Top-Quality Chemicals!",
        "Your Perfect Chemical Solution is Just a Click Away—Get in Touch Today!",
        "Ready to Rock Your Industry? Contact Us Today and Let’s Get Started!",
        "Your Growth Starts Here—Send Us Your RFQ and Watch Your Business Thrive!",
        "Let’s Supercharge Your Supply Chain—Request Your Quote NOW!"
    ];


    useEffect(() => {
        AOS.init(); // Initialize AOS animations
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000); // Change text every 3 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        AOS.refresh(); // Refresh AOS animations after index changes
    }, [currentIndex]);


    const servicesRef = useRef(null);
    const productsRef = useRef(null);
    const contactRef = useRef(null);

    const handleScrollToSection = (section) => {
        if (section === 'services') {
            servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        } else if (section === 'portfolio') {
            productsRef.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        }
        else if (section === 'contact') {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        }
    };

    const Readmorebutton = () => {
        Navigate("/About-us")
    }

    const productsbutton = () => {
        Navigate("/products")
    }

    const contactlink = () => {
        Navigate("/contact-us")
    }
    const servicelink = () => {
        Navigate("/services")
    }


    return (
        <div className='col-md-12 overflow_stop display_pc'>
            <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />
            {showButton && (
                <div className='col-md-12 button_srcondary_position text-end px-3'>
                    <button className='btn btn-secondary backtotopbutton' onClick={scrollToTop}>
                        <FaArrowUpLong />
                    </button>
                </div>)

            }

            <div className='col-md-12 button_srcondary_position111 text-end px-3'>
                <a className='text_dec_stop' >

                    <button className='btn btn-secondary backtotopbutton' onClick={scrollToTop}>
                        <IoMdCall />
                    </button>
                </a>
            </div>
            {/* Section 1 ------------------------------------------------------- */}
            <div className='col-md-12 '>
                {/* <div className='display_pc' >
                    <video loop autoPlay muted className="vedioPlayer">
                        <source
                            src="/video/abc.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div> */}
                {/* <div className='col-md-12 position_for_mobile '

                >
                    <h1 className='col-md-12 text-center  m-0 color_white_text '
                        key={currentIndex}
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        data-aos-delay="100"
                    >
                        <b>
                           
                            {words[currentIndex]}
                        </b>
                    </h1>
                    <div className='col-md-12 text-center pt-5'>
                        <span  className='btn btn-light btn-lg button_cutome1 px-md-5 mt-3'>
                            <b> Our Products</b>
                        </span>
                        <span onClick={contactlink} className='btn btn-light btn-lg button_cutome px-md-5 mt-3 ms-4'>
                            <b>  Contact Us</b>
                        </span>
                    </div>
                </div> */}

                <div className='col-md-12 background_for_image_h universal_padding_allp' >
                    <div className='row pt-5 '>
                        <div className='col-md-6 '>
                            <div className='col-md-12 text_for_head1' >
                                <p className='m-0 p-0 industry_text_pp'>Industry<br /> Solutions!</p>
                                <p className='m-0 p-0 color_of_text_sub1 pt-3'>Filter City is a leading supplier specializing in all types of heavy machinery filters, providing high-quality solutions for industries such as construction, mining, agriculture, and transportation. With an extensive range of filters for machinery including excavators, bulldozers, cranes, and more, we ensure optimal performance and durability for your equipment.</p>
                                <div className='row pt-5'>
                                    <div className='col-md-6 '>
                                        <span className='btn btn-light btn-lg button_cutome1 px-md-5 mt-3'>
                                            <b> Our Services</b>
                                        </span>
                                    </div>
                                    <div className='col-md-6 '>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 m-auto text-center'>
                            <div className='row'>
                                <div className='col-md-6'></div>
                                <div className='col-md-6 pt-5'>
                                    <div className='col-md-12 bg-white py-5 mt-5 px-5'>
                                        <div className='col-md-12'>
                                            <PiFactoryLight className='factory_icon' />
                                            <p className='m-0 p-0 mission_text'>Our Mission</p>
                                            <p className='m-0 p-0 pt-2 utlizing_font'>Utilising latest processing solutions, and decades of work experience.</p>
                                            <p className='m-0 p-0 pt-2 explore_text'>Explore <span className='ms-1'><FaArrowRightLong /></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
            {/* Section 2 ----------------------------------------------------------- */}

            <div className='col-md-12 padding_top_bottom_left_right_only  mb-5 pb-5'>
                <div className='col-md-12 main_shadow_card '>
                    <div className='row'>
                        <div className='col-md-3 border_right_11 py-4 '>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                <p className='m-0 p-0 env_text_sub pt-3'>
                                    The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                </p>
                                <p className='m-0 pt-2 arroe_colorcc'><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md-3 border_right_11 py-4 '>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                <p className='m-0 p-0 env_text_sub pt-3'>
                                    The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                </p>
                                <p className='m-0 pt-2 arroe_colorcc'><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md-3 border_right_11 py-4 '>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                <p className='m-0 p-0 env_text_sub pt-3'>
                                    The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                </p>
                                <p className='m-0 pt-2 arroe_colorcc'><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md-3 border_right_simple  py-4 '>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                <p className='m-0 p-0 env_text_sub pt-3'>
                                    The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                </p>
                                <p className='m-0 pt-2 arroe_colorcc'><FaArrowRight /></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* Section 3 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only padding_start_for_special_heading'>
                <p className='m-0 p-0 little_orange_text'>Manufacture A Varuety Of Hight Quality Products</p>
                <p className='m-0 p-0 font_big_heading'>
                    A Leading Industrial & Manufacturing<br /> Company, Serving Since 1997.
                </p>
            </div>
            <div className='col-md-12 padding_top_bottom_left_right_only pt-5 mt-4 pb-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='col-md-12 mt-3'>
                            <p className='m-0 p-0 env_text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className='m-0 p-0 env_text_sub pt-4'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className='m-0 p-0 env_text_sub_ceo pt-4'>
                                CEO & FOUNDER
                            </p>
                        </div>
                    </div>
                    <div className='col-md-5 px-5'>
                        <div className='col-md-12 position_relative_bb'>
                            <div className='col-md-12 position_box1 '>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-md-11 box1_background'></div>
                                </div>
                            </div>
                            <div className='col-md-12 position_box2 '>
                                <div className='row'>
                                    <div className='col-md-4 box2_background'></div>
                                    <div className='col-md-8'></div>
                                </div>
                            </div>
                            <div className='col-md-12 position_box3 '>
                                <div className='row'>
                                    <div className='col-md-4 box3_background'>
                                        <p className='m-0 p-0  ps-4 pt-4 font_styling_vv'> <IoPlay /> Watch Video!</p>
                                    </div>
                                    <div className='col-md-8'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='row mt-3'>
                            <div className='col-md-1'>
                                <GoDotFill className='icon_orangee_dot' />
                            </div>
                            <div className='col-md-11'>
                                <p className='m-0 p-0 font_listing_qq'>Quality</p>
                                <p className='m-0 p-0 env_text_sub pt-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-1'>
                                <GoDotFill className='icon_orangee_dot' />
                            </div>
                            <div className='col-md-11'>
                                <p className='m-0 p-0 font_listing_qq'>Reliability</p>
                                <p className='m-0 p-0 env_text_sub pt-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-1'>
                                <GoDotFill className='icon_orangee_dot' />
                            </div>
                            <div className='col-md-11'>
                                <p className='m-0 p-0 font_listing_qq'>Innovations</p>
                                <p className='m-0 p-0 env_text_sub pt-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Section 5 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only background_s3 mt-4 py-5'>
                <div className='col-md-12 mt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='m-0 p-0 little_orange_text'>Manufacture A Varuety Of Hight Quality Products</p>
                            <p className='m-0 p-0 font_big_heading_sub'>
                                A Leading Industrial & Manufacturing Company, Serving Since 1997.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <p className='m-0 p-0 env_text_sub'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className='col-md-12 pt-2'>
                                <span className='btn btn-light btn-lg button_cutome_orange px-md-5 mt-3'>
                                    <b>Schedule An Appointment</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 mt-5 pt-4  mb-5 '>
                    <div className='col-md-12 bg-white '>
                        <div className='row'>
                            <div className='col-md-3 border_right_11 py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <PiFactoryLight className='font_s3_pp' />
                                    <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>
                            <div className='col-md-3 border_right_11 py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <PiFactoryLight className='font_s3_pp' />
                                    <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>
                            <div className='col-md-3 border_right_11 py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <PiFactoryLight className='font_s3_pp' />
                                    <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>
                            <div className='col-md-3  py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <PiFactoryLight className='font_s3_pp' />
                                    <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Section 6 --------------------------------------- */}
            <div className='col-md-12 '>
                <div className='row'>
                    <div className='col-md-6 background_orange_11 padding_top_bottom_left_1 py-5'>
                        <div className='col-md-12 pe-5 py-5'>
                            <p className='m-0 p-0 little_orange_text text-light'>Manufacture A Varuety Of Hight Quality Products</p>
                            <p className='m-0 p-0 pt-2 font_big_heading_sub text-light'>
                                A Leading Industrial & Manufacturing Company, Serving Since 1997.
                            </p>
                            <p className='m-0 p-0 env_text_sub pt-4 text-light' >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className='col-md-12 mt-5'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='col-md-12'>
                                            <PiFactoryThin className='factory_thin' />
                                            <p className='m-0 p-0 font_size_card_sin'>Envirnomental Sensitivity </p>

                                            <div className='line_ww mt-3'></div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='col-md-12'>
                                            <PiFactoryThin className='factory_thin' />
                                            <p className='m-0 p-0 font_size_card_sin'>Envirnomental Sensitivity </p>

                                            <div className='line_ww mt-3'></div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='col-md-12'>
                                            <PiFactoryThin className='factory_thin' />
                                            <p className='m-0 p-0 font_size_card_sin'>Envirnomental Sensitivity </p>

                                            <div className='line_ww mt-3'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 background_gray_22 padding_top_bottom_right_1 py-5'></div>
                </div>
            </div>


            {/* Section 7 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only background_s3 py-5'>
                <div className='py-5'>
                    <div className='col-md-12 text-center'>
                        <p className='m-0 p-0 little_orange_text'>Recent Works</p>
                        <p className='m-0 p-0 font_big_heading_sub'>
                            Featured Projects
                        </p>
                        <img className='img-fluid width_of_line' src='/imagess/line.png' />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                <div className='col-md-12 img_gray'></div>
                                <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                <div className='col-md-12 img_gray'></div>
                                <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                <div className='col-md-12 img_gray'></div>
                                <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Section 8 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only background_s3_orange py-5'>
                <div className='col-md-12 mt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='m-0 p-0 little_orange_text '>Manufacture A Varuety Of Hight Quality Products</p>
                            <p className='m-0 p-0 font_big_heading_sub text-light'>
                                A Leading Industrial & Manufacturing Company, Serving Since 1997.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <p className='m-0 p-0 env_text_sub text-light pt-4 mt-2'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 padding_bottom_black_section '>
                    <div className='row'>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>Quality Control System</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>Highly Professional Staff</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>100% Satisfaction Guarantee</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>Accurate Testing Processes</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section 9 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only margin_top_neg_bottom'>
                <div className='col-md-12 main_shadow_card'>
                    <div className='row'>
                        <div className='col-md-4 px-5 background_orange_11 py-5 '>
                            <div className='position_relative_bb_new'>
                                <p className='m-0 p-0 font_big_heading_sub_new text-light'>
                                    A Leading Industrial & Manufacturing Company, Serving Since 1997.
                                </p>
                                <p className='m-0 p-0 env_text_sub text-light pt-2 mt-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <div className='col-md-12 position_bottom_1'>
                                    <span className='btn btn-light btn-lg button_cutome_black px-md-5 mt-3 w-100'>
                                        <b>Download 2025 Brochure</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8 py-5 px-5 bg-white'>
                            <div className='col-md-12'>
                                <p className='m-0 p-0 font_big_heading_sub_new '>
                                    Request A Quote
                                </p>
                                <p className='m-0 p-0 env_text_sub pt-1 mt-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <div className='col-md-12 mt-4 pt-3'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Name' />
                                        </div>
                                        <div className='col-md-6'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className='row mt-4 pt-3'>
                                        <div className='col-md-6'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Phone' />
                                        </div>
                                        <div className='col-md-6'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Industry' />
                                        </div>
                                    </div>
                                    <div className='row mt-4 pt-3'>
                                        <div className='col-md-12'>
                                            <textarea className='form-control form-control-lg fomr_input_dd' rows={5} placeholder='Message' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 mt-5'>
                                    <span className='btn btn-light btn-lg button_cutome_black px-md-5 mt-3'>
                                        <b> Submit Request</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 text-center'>
                    <p className='m-0 p-0 env_text_sub pt-4 mt-2'>
                        We will get back to you within 24 hours, or call us <span className='env_text_sub_orange'>+7786 65656 98989</span>
                    </p>
                </div>

            </div>


            {/* Section 10 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only pb-5'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='col-md-12'>
                                <div className='d-flex'>
                                    <div>
                                        <div className='orange_border_color'>
                                            <div className='img_single_gray'></div>
                                        </div>
                                        <div className='col-md-12 text-center pt-2'>
                                            <p className='m-0 p-0 font_stars_review_name'>
                                                Jhon Wick
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ps-3'>
                                        <p className='m-0 p-0 font_stars_review'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className='col-md-12 pt-2'>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='col-md-12'>
                                <div className='d-flex'>
                                    <div>
                                        <div className='orange_border_color'>
                                            <div className='img_single_gray'></div>
                                        </div>
                                        <div className='col-md-12 text-center pt-2'>
                                            <p className='m-0 p-0 font_stars_review_name'>
                                                Jhon Wick
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ps-3'>
                                        <p className='m-0 p-0 font_stars_review'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className='col-md-12 pt-2'>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                            <span><MdOutlineStar className='color_stars' /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 pb-5 pt-4'>
                <hr />
            </div>
            <div className='col-md-12 padding_top_bottom_left_right_only pb-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/images/capital2.png' />
                    </div>
                </div>
            </div>


            {/* Section 11 --------------------------------------- */}
            <div className='col-md-12 '>
                <div className='row'>
                    <div className='col-md-8 background_lg'>
                        <div className='row'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6'>
                                <div className='col-md-12 margin_right_neggg background_orange_11 px-4 py-5'>
                                    <p className='m-0 p-0 little_orange_text  text-light'>Manufacture A Varuety Of Hight Quality Products</p>
                                    <p className='m-0 p-0 font_big_heading_sub_light text-light'>
                                        A Leading Industrial & Manufacturing Company, Serving Since 1997.
                                    </p>
                                    <p className='m-0 p-0 env_text_sub_small text-light mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <span className='btn btn-light btn-lg button_cutome12 px-md-5 mt-3'>
                                        <b> Our Services</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 background_g'></div>
                </div>
            </div>

            {/* Section 12 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only background_s3 py-5'>
                <div className='py-5'>
                    <div className='col-md-12 text-center'>
                        <p className='m-0 p-0 little_orange_text'>Insight and Trends</p>
                        <p className='m-0 p-0 font_big_heading_sub'>
                            Recent Articles
                        </p>
                        <img className='img-fluid width_of_line' src='/imagess/line.png' />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                <div className='col-md-12 img_gray'></div>
                                <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                <div className='col-md-12 img_gray'></div>
                                <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                <div className='col-md-12 img_gray'></div>
                                <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Home