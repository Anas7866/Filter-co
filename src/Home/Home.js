import React, { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header/Header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiDeliveryTruck } from 'react-icons/ci';
import { PiFactoryLight, PiFactoryThin, PiHandSoap, PiNuclearPlant, PiNuclearPlantLight, PiTractor, PiTractorLight } from 'react-icons/pi';
import { LiaDrumSteelpanSolid } from 'react-icons/lia';
import { MdMail, MdOutlineEmojiTransportation, MdOutlineStar } from 'react-icons/md';
import { GiCargoShip, GiChemicalDrop, GiDeliveryDrone, GiGlassShot, GiNewspaper, GiNuclearWaste } from 'react-icons/gi';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BiLabel } from 'react-icons/bi';
import { IoDocumentsOutline, IoMail, IoPlay } from 'react-icons/io5';
import Footer from '../Components/Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from "aos";
import { ImInsertTemplate } from 'react-icons/im';
import { TbBuildingFactory, TbPerfume } from 'react-icons/tb';
import { FaArrowRightLong, FaArrowUpLong, FaTruckFast, FaTruckPlane } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaAngleDoubleUp, FaArrowRight, FaCheck, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { TiPin } from 'react-icons/ti';
import Fade from 'react-bootstrap/Fade';
import { Collapse } from 'react-bootstrap';


function Home() {
    const [activetabs, setActivetabs] = useState(0)
    const [toggler, setToggler] = useState(false)
    const Navigate = useNavigate();
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
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


    const aboutuss = useRef(null);
    const contactusss = useRef(null);
    const productsref = useRef(null);

    const handleScrollToSection = (section) => {
        if (section === 'aboutus') {
            aboutuss.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        } else if (section === 'contactus') {
            contactusss.current?.scrollIntoView({ behavior: 'smooth' });
            TogglerNew();
        } else if (section === 'products') {
            productsref.current?.scrollIntoView({ behavior: 'smooth' });
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
        <div className='col-md-12 overflow_stop '>
            <div className='col-md-12 webb_red_bg py-1 universal_padding_allp text-end display_pc'>
                <span><a className='text_dec_stop' href="tel:966537089515" ><b><FaPhoneAlt /> +966537089515</b></a></span>
                <span className='ps-5'><a className='text_dec_stop' href="mailto:filtercity@outlook.sa" ><b><MdMail /> filtercity@outlook.sa</b></a></span>
            </div>
            <div className='col-md-12 webb_red_bg py-1 text-center display_mobile'>
                <span><a className='text_dec_stop' href="tel:966537089515" ><b><FaPhoneAlt /> +966537089515</b></a></span>
                <span className='ps-3'><a className='text_dec_stop' href="mailto:filtercity@outlook.sa" ><b><MdMail /> filtercity@outlook.sa</b></a></span>
            </div>
            <Header onNavigate={handleScrollToSection} TogglerNew={TogglerNew} toggler={toggler} />
            {showButton && (
                <div className='col-md-12 button_srcondary_position text-end px-3'>
                    <button className='btn btn-secondary backtotopbutton' onClick={scrollToTop}>
                        <FaArrowUpLong />
                    </button>
                </div>)

            }

            <div className='col-md-12 button_srcondary_position111 text-end px-3'>
                <a className='text_dec_stop' href="https://wa.me/966537089515" >

                    <button className='btn btn-secondary backtotopbutton' onClick={scrollToTop}>
                        <FaWhatsapp />
                    </button>
                </a>
            </div>

            <div className='col-md-12 button_srcondary_position112 text-end px-3'>
                <a className='text_dec_stop' href="tel:966537089515" >

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

                <div className='col-md-12 display_pc'>

                    <div className='col-md-12 background_for_image_h ' >

                        <div className='display_pc' >
                            <video loop autoPlay muted className="vedioPlayer">
                                <source
                                    src="/video/newmain.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className='col-md-12 image_adjust_on_vide'>
                            <div className='row  '>
                                <div className='col-md-6 '>
                                    <div className='col-md-12 text_for_head1' >
                                        <p className='m-0 p-0 industry_text_pp'>Filter City </p>
                                        <p className='m-0 p-0 industry_text_pp1'>City Of Filteration </p>
                                        <p className='m-0 p-0 industry_text_pp2'>Where Power Meets Purity </p>
                                        <p className='m-0 p-0 color_of_text_sub1 pt-3'>Filter City is a leading supplier specializing in all types of heavy machinery filters, providing high-quality solutions for industries such as construction, mining, agriculture, and transportation. With an extensive range of filters for machinery including excavators, bulldozers, cranes, and more, we ensure optimal performance and durability for your equipment.</p>
                                    </div>
                                </div>
                                <div className='col-md-6 m-auto text-center'>
                                    <div className='row pb-md-0 pb-5'>
                                        <div className='col-md-6'></div>
                                        {/* <div className='col-md-6 pt-5'>
                                            <div className='col-md-12 bg-white py-5 mt-5 px-5'>
                                                <div className='col-md-12'>
                                                    <PiFactoryLight className='factory_icon' />
                                                    <p className='m-0 p-0 mission_text'>Our Mission</p>
                                                    <p className='m-0 p-0 pt-2 utlizing_font'>Where Power Meets Purity</p>
                                                    <p className='m-0 p-0 pt-2 explore_text'>Explore <span className='ms-1'><FaArrowRightLong /></span></p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className='col-md-12 background_for_image_h universal_padding_allp pt-5 display_mobile' >

                    <div className='row pt-md-5 '>
                        <div className='col-md-6 '>
                            <div className='col-md-12 text_for_head1' >
                                <p className='m-0 p-0 industry_text_pp'>Filter City </p>
                                <p className='m-0 p-0 color_of_text_sub1 pt-3'>Filter City is a leading supplier specializing in all types of heavy machinery filters, providing high-quality solutions for industries such as construction, mining, agriculture, and transportation. With an extensive range of filters for machinery including excavators, bulldozers, cranes, and more, we ensure optimal performance and durability for your equipment.</p>
                                {/* <div className='row pt-5'>
                                    <div className='col-md-6 '>
                                        <span className='btn btn-light btn-lg button_cutome1 px-md-5 mt-3'>
                                            <b>Shop Now</b>
                                        </span>
                                    </div>
                                    <div className='col-md-6 '>
                                        <span></span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-md-6 m-auto text-center'>
                            <div className='row pb-md-0 pb-5'>
                                <div className='col-md-6'></div>
                                <div className='col-md-6 pt-5'>
                                    <div className='col-md-12 bg-white py-5 mt-5 px-5'>
                                        <div className='col-md-12'>
                                            <PiFactoryLight className='factory_icon' />
                                            <p className='m-0 p-0 mission_text'>Our Mission</p>
                                            <p className='m-0 p-0 pt-2 utlizing_font'>Where Power Meets Purity</p>
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
                <div className='col-md-12  main_shadow_card '>
                    <div className='row'>
                        <div className='col-md border_right_11 py-4 '>
                            <div className='col-md-12 ps-3 py-2'>
                                <img className='img-fluid w-100 image_hei_ww_adj' src='/images/imgnew/Air1.png' />
                                <p className='m-0 p-0 env_text mt-3'>Air Filters</p>
                                <p className='m-0 p-0 env_text_sub pt-3' onClick={() => setOpen1(!open1)}>
                                    Our air filters are designed to maximize airflow while effectively trapping dust, dirt, and other .
                                    <Collapse in={open1}>
                                        <div id="example-collapse-text" className="env_text_sub">
                                            contaminants  By ensuring that only clean air enters your machinery, these filters play a vital role in boosting engine performance and extending the lifespan of your equipment..
                                        </div>
                                    </Collapse>
                                </p>
                                <p className='m-0 pt-2 arroe_colorcc' onClick={() => setOpen1(!open1)}><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md border_right_11 py-4 '>
                            <img className='img-fluid w-100 image_hei_ww_adj' src='/images/imgnew/OilF1.png' />
                            <div className='col-md-12 ps-3 py-2'>
                                <p className='m-0 p-0 env_text mt-3'>Oil Filters</p>
                                <p className='m-0 p-0 env_text_sub pt-3' onClick={() => setOpen2(!open2)}>
                                    Our oil filters are engineered to provide superior filtration for your machinery, effectively capturing.
                                </p>
                                <Collapse in={open2}>
                                    <div id="example-collapse-text" className="env_text_sub">
                                        contaminants and ensuring that only clean oil circulates through the engine. This critical component not only protects your equipment from wear and tear but also enhances overall performance and longevity.
                                    </div>
                                </Collapse>
                                <p className='m-0 pt-2 arroe_colorcc' onClick={() => setOpen2(!open2)}><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md border_right_11 py-4 '>
                            <div className='pe-2'>
                                <img className='img-fluid w-100 image_hei_ww_adj' src='/images/imgnew/Fuel1.png' />
                            </div>
                            <div className='col-md-12 ps-3 py-2 '>
                                <p className='m-0 p-0 env_text mt-3'>Fuel Filters</p>
                                <p className='m-0 p-0 env_text_sub pt-3' onClick={() => setOpen3(!open3)}>
                                    Our fuel filters are meticulously designed to ensure the purity of fuel entering your engine.
                                </p>
                                <Collapse in={open3}>
                                    <div id="example-collapse-text" className="env_text_sub">
                                        By effectively trapping impurities and contaminants, these filters enhance fuel efficiency and performance, ultimately contributing to the longevity of your equipment.
                                    </div>
                                </Collapse>
                                <p className='m-0 pt-2 arroe_colorcc' onClick={() => setOpen3(!open3)}><FaArrowRight /></p>
                            </div>
                        </div>
                        {/* <div className='col-md-3 border_right_simple  py-4 '>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Hydraulic Filters</p>
                                <p className='m-0 p-0 env_text_sub pt-3'>
                                    Our hydraulic filters are expertly designed to ensure the cleanliness and efficiency of hydraulic systems. By effectively removing contaminants from hydraulic fluids, these filters enhance equipment performance and reliability, minimizing the risk of costly breakdowns
                                </p>
                                <p className='m-0 pt-2 arroe_colorcc'><FaArrowRight /></p>
                            </div>
                        </div> */}

                    </div>
                </div>
                <div className='col-md-12 main_shadow_card mt-3 '>
                    <div className='row'>
                        <div className='col-md border_right_11 py-4 '>
                            <div className='pe-2 ps-3'>
                                <img className='img-fluid w-100 image_hei_ww_adj' src='/images/imgnew/Hyd1.png' />
                            </div>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Hydraulic Filters</p>
                                <p className='m-0 p-0 env_text_sub pt-3' onClick={() => setOpen4(!open4)}>
                                    Our hydraulic filters are expertly designed to ensure the cleanliness and efficiency of hydraulic.
                                </p>
                                <Collapse in={open4}>
                                    <div id="example-collapse-text" className="env_text_sub">
                                        systems. By effectively removing contaminants from hydraulic fluids, these filters enhance equipment performance and reliability, minimizing the risk of costly breakdowns.
                                    </div>
                                </Collapse>
                                <p className='m-0 pt-2 arroe_colorcc ' onClick={() => setOpen4(!open4)}><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md border_right_11 py-4 '>
                            <div className='pe-2 ps-3 '>
                                <img className='img-fluid w-100 image_hei_ww_adj' src='/images/imgnew/Sap1.png' />
                                {/* <img className='img-fluid w-100 image_hei_ww_adj' src='/imagess/5.jpg' /> */}
                            </div>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Separators</p>
                                <p className='m-0 p-0 env_text_sub pt-3' onClick={() => setOpen5(!open5)}>
                                    Our separators are engineered to effectively separate contaminants from fluids, ensuring.
                                </p>
                                <Collapse in={open5}>
                                    <div id="example-collapse-text" className="env_text_sub">
                                        the purity and performance of your machinery. These high-efficiency devices play a crucial role in prolonging the life of your equipment by maintaining optimal operational conditions.
                                    </div>
                                </Collapse>
                                <p className='m-0 pt-2 arroe_colorcc' onClick={() => setOpen5(!open5)}><FaArrowRight /></p>
                            </div>
                        </div>
                        <div className='col-md border_right_11 py-4 '>
                            <div className='pe-2 ps-3 '>
                                <img className='img-fluid w-100 image_hei_ww_adj' src='/images/imgnew/OilB1.png' />
                                {/* <img className='img-fluid w-100 image_hei_ww_adj' src='/imagess/5.jpg' /> */}
                            </div>
                            <div className='col-md-12 ps-4 py-2'>
                                <p className='m-0 p-0 env_text'>Oil Baths</p>
                                <p className='m-0 p-0 env_text_sub pt-3' onClick={() => setOpen6(!open6)}>
                                    Our oil baths are designed to provide superior filtration and lubrication, ensuring that your.
                                </p>
                                <Collapse in={open6}>
                                    <div id="example-collapse-text" className="env_text_sub">
                                        machinery operates at peak performance while minimizing wear and tear. They are essential for maintaining the longevity of your equipment, especially in harsh working conditions.
                                    </div>
                                </Collapse>
                                <p className='m-0 pt-2 arroe_colorcc' onClick={() => setOpen6(!open6)}><FaArrowRight /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Section 3 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only padding_start_for_special_heading' ref={productsref}>
                <p className='m-0 p-0 little_orange_text'>Manufacture A Varuety Of Hight Quality Products</p>
                <p className='m-0 p-0 font_big_heading'>
                    Providing A Variety of Hight <br />Quality Filters
                </p>
            </div>
            <div className='col-md-12 padding_top_bottom_left_right_only pt-md-5 mt-md-4 pb-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='col-md-12 mt-3'>
                            <p className='m-0 p-0 env_text'>
                                Filter City is a premier supplier of high-performance filtration products in Saudi Arabia, offering a comprehensive range of filters from the world is most trusted and market-leading brands. We specialize in delivering top-quality filtration solutions for heavy machinery across various industries, including construction, mining, agriculture, and transportation. Our extensive portfolio features filters from globally recognized brands such as:
                            </p>
                            <div className='col-md-12 pt-2'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <ul className='ps-md-3 mb-md-auto mb-0'>
                                            <li><b>Fleet Guard</b></li>
                                            <li><b>Donaldson</b></li>
                                            <li><b>MANN Filters</b></li>
                                            <li><b>Caterpillar</b></li>
                                            <li><b>Hengst Filters</b></li>
                                        </ul>
                                    </div>
                                    <div className='col-md-6'>
                                        <ul className='ps-md-1'>
                                            <li><b>Parker Filtration</b></li>
                                            <li><b>Perkins</b></li>
                                            <li><b>Hyundai</b></li>
                                            <li><b>Bobcat</b></li>
                                            <li><b>JCB</b></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className='m-0 p-0 env_text_sub'>
                                At Filter City, we understand the importance of keeping your machinery running efficiently, which is why we offer only the highest quality filters that ensure optimal performance and longevity. Our products are designed to protect your equipment from contaminants, reduce maintenance costs, and minimize downtime, allowing you to focus on what matters most—maximizing productivity. With a customer-centric approach, we are committed to providing exceptional service, fast delivery, and reliable filtration solutions to meet all your machinery needs.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-5 display_pc px-5 m-auto' >
                        {/* <div className='col-md-12 position_relative_bb'>
                            <div className='col-md-12 position_box1 '>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-md-11 box1_background'>
                                    </div>
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
                        </div> */}
                        <Carousel

                            responsive={responsive}
                            draggable={true}
                            swipeable={true}
                            autoPlay={true}             // <-- Enable auto swipe
                            autoPlaySpeed={4000}        // <-- Speed of auto swipe
                            infinite={true}             // <-- Loop the carousel
                            customTransition="all 1s"   // <-- Smooth transition
                            transitionDuration={2000}

                        >
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/1.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/2.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/3.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/4.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/5.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/6.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/7.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/8.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/9.png' />
                            </div>
                            <div>
                                <img className='img-fluid w-100' src='/images/slides/slides/10.png' />
                            </div>
                        </Carousel>
                    </div>
                    <div className='col-md-3'>
                        <div className='row mt-3'>
                            <div className='col-md-1'>
                                <GoDotFill className='icon_orangee_dot' />
                            </div>
                            <div className='col-md-11'>
                                <p className='m-0 p-0 font_listing_qq'>Quality</p>
                                <p className='m-0 p-0 env_text_sub pt-2'>
                                    Our filters effectively capture contaminants, including dirt, dust, metal particles, and other impurities, preventing premature wear and costly breakdowns. With high-efficiency filtration media, we ensure excellent dirt-holding capacity while maintaining optimal airflow and fluid flow.
                                </p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-1'>
                                <GoDotFill className='icon_orangee_dot' />
                            </div>
                            <div className='col-md-11'>
                                <p className='m-0 p-0 font_listing_qq'>Heavy-Duty Durability</p>
                                <p className='m-0 p-0 env_text_sub pt-2'>
                                    Designed for the most demanding environments, our filters feature:
                                    <div className='col-md-12'>
                                        <ul className='ps-md-1'>
                                            <li><b className='text-black'>Reinforced</b> casings for high-pressure resistance</li>
                                            <li><b className='text-black'>Strong seals</b> to prevent leaks</li>
                                            <li><b className='text-black'>High-temperature</b> tolerance for extreme operating conditions.</li>
                                        </ul>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-1'>
                                <GoDotFill className='icon_orangee_dot' />
                            </div>
                            <div className='col-md-11'>
                                <p className='m-0 p-0 font_listing_qq'>Advanced Filtration Technology</p>
                                <p className='m-0 p-0 env_text_sub pt-2'>
                                    Our filters integrate the latest <b className='text-black'>Nano-fiber filtration technology</b>, providing superior dirt-holding capacity while maintaining optimal airflow and fluid dynamics. This ensures the highest level of <b className='text-black'>contaminant capture efficiency</b>, extending engine and hydraulic system life.
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
                            {/* <p className='m-0 p-0 little_orange_text'>Manufacture A Varuety Of Hight Quality Products</p> */}
                            <p className='m-0 p-0 font_big_heading_sub'>
                                Precision Crafted Excellence: Manufacturing a Diverse Range of High-Quality Spare Parts
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <p className='m-0 p-0 env_text_sub'>
                                Our spare parts are sourced from top manufacturers, ensuring that you receive durable and reliable components to maintain your machinery's performance. With a wide selection available, we cater to various models and brands, guaranteeing that you can find the right parts for your needs.
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
                            <div className='col-md-4 border_right_12 py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    {/* <PiFactoryLight className='font_s3_pp' /> */}
                                    <img className='img-fluid' src='/images/bob.png' />
                                    <p className='m-0 p-0 env_text padding_1'>BOBCAT</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        Filter City is proud to supply Bobcat Parts, providing top-quality filters and spare parts designed specifically for Bobcat machinery. Our filters ensure the highest level of performance, durability, and efficiency, enabling operators to maximize their equipment's capabilities in demanding environments. With a commitment to excellence, we guarantee that our Bobcat Parts filters meet the rigorous standards expected by industry professionals.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>
                            <div className='col-md-4 border_right_12 py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <img className='img-fluid' src='/images/JCB.png' />
                                    {/* <PiFactoryLight className='font_s3_pp' /> */}
                                    <p className='m-0 p-0 env_text padding_2'>JCB</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        Our JCB spare parts are crafted to meet the highest industry standards, ensuring optimal compatibility and performance for your machinery. With a comprehensive range of components available, you can rely on us to provide the quality you need to keep your JCB equipment running smoothly.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>
                            <div className='col-md-4 border_right_11 pe-4 py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <img className='img-fluid' src='/images/kub.png' />
                                    {/* <PiFactoryLight className='font_s3_pp' /> */}
                                    <p className='m-0 p-0 env_text padding_3'>Kubota</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        Our Kubota spare parts are built to meet the highest standards of quality and performance, ensuring that your Kubota machinery operates smoothly and efficiently. With a comprehensive selection available, we provide the right components to keep your equipment in top condition, enabling you to tackle any job with confidence
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div>
                            {/* <div className='col-md-3  py-4 '>
                                <div className='col-md-12 ps-4 py-2'>
                                    <PiFactoryLight className='font_s3_pp' />
                                    <p className='m-0 p-0 env_text'>Envirnomental Sensitivity</p>
                                    <p className='m-0 p-0 env_text_sub pt-3'>
                                        The world of international supply chains involve a myriad of unknown risks and challenging regulations.
                                    </p>
                                    <p className='m-0 pt-4 arroe_colorcc'><span className='readmore_text'>Read More</span> <FaArrowRight /></p>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>

            {/* Section 6 --------------------------------------- */}
            <div className='col-md-12 ' ref={aboutuss}>
                <div className='row'>
                    <div className='col-md-6 background_orange_11 padding_top_bottom_left_1 py-5'>
                        <div className='col-md-12 pe-md-5 py-5'>
                            <p className='m-0 p-0 little_orange_text text-light'>A Leading Heavy Machinery Filters Manufacturing Company,
                                Serving Since 1992.
                            </p>
                            <p className='m-0 p-0 pt-2 font_big_heading_sub text-light'>
                                Filter City Trading Company– The Largest Manufacturer of Heavy Machinery Filters & Components
                            </p>
                            <p className='m-0 p-0 env_text_sub pt-4 text-light' >
                                Filter City, formerly known as WESTERN AL-NOOR , is a leading manufacturer and supplier of high-quality filtration solutions for heavy machinery and industrial equipment. With years of expertise and a strong reputation in the industry, we specialize in producing a comprehensive range of oil, air, and fuel filters, as well as separators, filter housings, filter head pumps, oil baths, and mountings.<br />
                                Our products are engineered to meet the highest performance standards, ensuring superior filtration efficiency and durability for various heavy-duty applications. We cater to a diverse range of industries, including construction, agriculture, mining, and transportation, providing reliable solutions for brands such as JCB and Bobcat.<br />
                                At Filter City, we are committed to delivering innovation, quality, and customer satisfaction. Whether you need standard filtration products or custom-engineered solutions, we are your trusted partner in ensuring optimal performance and longevity for your machinery.

                            </p>
                            <div className='col-md-12 mt-5'>
                                <p className='m-0 p-0 little_orange_text text-light'>
                                    <i className='text-light'><TiPin />   Your One-Stop Destination for Heavy Machinery Filtration & Spare Parts</i>
                                </p>
                                <p className='m-0 p-0 little_orange_tex1t pt-3 text-light'>
                                    For inquiries or to explore our product range, contact us today!
                                </p>
                                {/* <div className='row'>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 background_gray_22  py-5'>
                        <img className='img-fluid' src='/images/imgnew/square.jpeg'/>
                    </div>
                </div>
            </div>


            {/* Section 7 --------------------------------------- */}
            <div className='col-md-12  padding_top_bottom_left_right_only background_s5555 py-3'>
                <div className='py-5'>
                    {/* <div className='col-md-12 text-center'>
                        <p className='m-0 p-0 little_orange_text'>Recent Works</p>
                        <p className='m-0 p-0 font_big_heading_sub'>
                            Featured Projects
                        </p>
                        <img className='img-fluid width_of_line' src='/imagess/line.png' />
                    </div> */}
                </div>
                <div className='col-md-12 mb-5 pb-4'>
                    <div className='row'>
                        <div className='col-md-3 p-4'>
                            <div className='col-md-12 bg-white'>
                                <img className='img-fluid' src='/images/w1.jpg' />
                            </div>
                        </div>
                        <div className='col-md-3 p-4'>
                            <div className='col-md-12 bg-white'>
                                <img className='img-fluid' src='/images/w2.jpg' />

                            </div>
                        </div>
                        <div className='col-md-3 p-4'>
                            <div className='col-md-12 bg-white'>
                                <img className='img-fluid' src='/images/w3.jpg' />

                            </div>
                        </div>
                        <div className='col-md-3 p-4'>
                            <div className='col-md-12 bg-white'>
                                <img className='img-fluid' src='/images/w4.jpg' />

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
                            <p className='m-0 p-0 little_orange_text '>Manufacture supplying a wide range of hight-quality filters and spare parts. </p>
                            <p className='m-0 p-0 font_big_heading_sub text-light'>
                                Filter City Trading Company - A Trusted Name in Heavy Machinery Parts Since 1992.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <p className='m-0 p-0 env_text_sub text-light pt-4 mt-2'>
                                At Filter City Trading Company. we specialize in providing top-grade filters and spare parts for heavy machinery accross varios industries. With decades of experience, we've build a reputation for reliability, quality and expert service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 padding_bottom_black_section '>
                    <div className='row'>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1 col-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11 col-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>Quality Control System</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            Every product undergoes strict quality checks to ensure peak performance and durability under demanding conditions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1 col-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11 col-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>Highly Professional Staff</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            Our knowledgeable team is always ready to assist with the expert guidance and support tailored to your machinery needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1 col-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11 col-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>100% Satisfaction Guarantee</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            We stand behind every part we supply - your satisfaction is our priority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='col-md-12 background_hover_black'>
                                <div className='row mt-3'>
                                    <div className='col-md-1 col-1'>
                                        <FaCheck className='icon_orangee_dot text-light' />
                                    </div>
                                    <div className='col-md-11 col-11'>
                                        <p className='m-0 p-0 font_listing_qq text-light'>Accurate Testing Processes</p>
                                        <p className='m-0 p-0 env_text_sub pt-2'>
                                            All filters an parts are tested to meet or exceed industry standards, ensuring maximum efficiency and reliability.
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
                                    A Leading Industrial & Manufacturing Company, Since 1992.
                                </p>
                                <p className='m-0 p-0 env_text_sub text-light pt-2 mt-2'>
                                    FilterCity Trading company specializes in supplying high-quality heavy machinery filters and spare parts. With over two decades of experience, we've become a trusted name in the filtertion industrial sector. Our commitment to quality, reliability and customer satisfaction has helped us servce a diverse range of industries efficiently.
                                </p>
                                {/* <div className='col-md-12 position_bottom_1 '>
                                    <span className='btn btn-light btn-lg  button_cutome_black px-md-5 mt-3 w-100'>
                                        <b>Download 2025 Brochure</b>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-md-8 py-5 px-md-5 bg-white' ref={contactusss}>
                            <div className='col-md-12'>
                                <p className='m-0 p-0 font_big_heading_sub_new '>
                                    Contact Us
                                </p>
                                <p className='m-0 p-0 env_text_sub pt-1 mt-2'>
                                    Looking for durable filters or reliable spare parts for your machinery? Get in touchh with us today.
                                </p>
                                <div className='col-md-12 mt-md-4 mt-4 pt-md-3 pt-0'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Name' />
                                        </div>
                                        <div className='col-md-6 mt-md-0 mt-4'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className='row mt-md-4 mt-4 pt-md-3 pt-0'>
                                        <div className='col-md-6'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Phone' />
                                        </div>
                                        <div className='col-md-6 mt-md-0 mt-4'>
                                            <input className='form-control form-control-lg fomr_input_dd' placeholder='Industry' />
                                        </div>
                                    </div>
                                    <div className='row mt-md-4 mt-3 pt-3'>
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
                        We will get back to you within 24 hours, or call us <span className='env_text_sub_orange'>+966 53 708 9515</span>
                    </p>
                </div>

            </div>


            {/* Section 10 --------------------------------------- */}
            {/* <div className='col-md-12 padding_top_bottom_left_right_only pb-md-5 pb-4 mt-md-0 mt-5'>
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
                        <div className='col-md-6 mt-md-0 mt-5'>
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
            </div> */}
            <div className='col-md-12 pb-5 pt-4'>
                <hr />
            </div>
            <div className='col-md-12 padding_top_bottom_left_right_only pb-5'>
                <div className='flex_universal'>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/bob.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/Cat.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/cumm.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/don.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/doos.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/fleet.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/Artboard 15.png' />
                    </div>
                </div>
                <div className='flex_universal'>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/jcb.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/kub.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/mann.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/mitsu.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/per.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/wix.png' />
                    </div>
                    <div>
                        <img className='img-fluid image_sizing_logos' src='/imagess/hen.png' />
                    </div>
                </div>
            </div>


            {/* Section 11 --------------------------------------- */}
            <div className='col-md-12 '>
                {/* <div className='row'>
                    <div className='col-md-8 background_lg'>
                        <div className='row'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6'>
                                <div className='col-md-12 margin_right_neggg background_orange_11 px-4 py-5'>
                                    <p className='m-0 p-0 little_orange_text  text-light'>Manufacture A Varuety Of Hight Quality Products</p>
                                    <p className='m-0 p-0 font_big_heading_sub_light text-light'>
                                        A Leading Industrial & Manufacturing Company, Serving Since 1997.1
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
                    <div className='col-md-4 background_g display_pc'></div>
                </div> */}
                <div className='col-md-12'>
                    <img className='img-fluid w-100'  src='/images/banner9.jpeg' />
                </div>
            </div>

            {/* Section 12 --------------------------------------- */}
            <div className='col-md-12 padding_top_bottom_left_right_only background_s3 pb-5 pt-4'>
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
                                {/* <div className='col-md-12 img_gray'></div> */}
                                <img className='img-fluid border_for_img' src='/images/b1.png' />
                                {/* <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                {/* <div className='col-md-12 img_gray1'></div> */}
                                <img className='img-fluid border_for_img' src='/images/b2.png' />
                                {/* <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-md-4 p-4'>
                            <div className='col-md-12 bg-white'>
                                {/* <div className='col-md-12 img_gray2'></div> */}
                                <img className='img-fluid border_for_img' src='/images/b3.png' />
                                {/* <div className='px-3 py-3'>
                                    <p className='m-0 p-0 font_floride'>Florid Chemical Factory</p>
                                    <p className='m-0 p-0 mt-1 little_orange_text'>Chemicals, Oil and gas</p>
                                    <p className='m-0 p-0 env_text_sub mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p className='m-0 pt-3 arroe_colorcc'><span className='readmore_text'>Explore Case Study</span> <FaArrowRight /></p>
                                </div> */}
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