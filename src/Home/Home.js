import React, { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header/Header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiDeliveryTruck } from 'react-icons/ci';
import { PiHandSoap, PiNuclearPlant, PiNuclearPlantLight, PiTractor, PiTractorLight } from 'react-icons/pi';
import { LiaDrumSteelpanSolid } from 'react-icons/lia';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { GiCargoShip, GiChemicalDrop, GiDeliveryDrone, GiGlassShot, GiNewspaper, GiNuclearWaste } from 'react-icons/gi';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BiLabel } from 'react-icons/bi';
import { IoDocumentsOutline } from 'react-icons/io5';
import Footer from '../Components/Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from "aos";
import { ImInsertTemplate } from 'react-icons/im';
import { TbPerfume } from 'react-icons/tb';
import { FaArrowUpLong, FaTruckFast, FaTruckPlane } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';


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
        <div className='col-md-12 overflow_stop'>
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

                <div className='col-md-12 background_for_image_h'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8 text-center'>
                            <div className='col-md-12 text_for_head1' >
                                <h1>Welcome to Filter City Trading Co.</h1>
                                <p className='m-0 p-0 color_of_text_sub'>Where Power Meets Purity</p>
                                <p className='m-0 p-0 color_of_text_sub1 pt-3'>Filter City is a leading supplier specializing in all types of heavy machinery filters, providing high-quality solutions for industries such as construction, mining, agriculture, and transportation. With an extensive range of filters for machinery including excavators, bulldozers, cranes, and more, we ensure optimal performance and durability for your equipment.</p>
                                <div className='col-md-12 pt-5'>
                                    <span  className='btn btn-light btn-lg button_cutome1 px-md-5 mt-3'>
                                        <b> Shop</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'></div>
                    </div>

                </div>


            </div>
            {/* Section 2 ----------------------------------------------------------- */}

            <div className='col-md-12 padding_top_bottom_left_right'>
                <div className='row'>
                    <div className='col-md-12 text-center m-auto'>
                        <h2><b>Quality Filters for <span className='color_towerld'>Every Need</span></b></h2>
                        <p className='m-0 p-0 font_main_subheading'>Precision-engineered filters designed for optimal performance.</p>
                        {/* <p className='font_for_p'>
                            We are a leading Saudi distributor of industrial and specialty chemicals, to serve the chemical needs of the process industry. We continuously endeavor to develop reliable sources for the supply of chemicals with which we can serve our customers.
                        </p> */}
                        {/* <p className='font_for_p'>
                            Being a trusted distributors, we represent renowned global manufacturers, outspreading their reach and ensuring local industry have access to their products. We create the bond between the global producers and local end-users, by supplying a huge range of chemicals to the Gulf markets.
                        </p>
                        <p className='font_for_p'>
                            <b><i>"We are One Stop Shop for all your Chemical needs!"</i></b>
                        </p>
                        <span onClick={Readmorebutton} className='btn btn-light btn-lg button_cutome_black px-5 mt-3 mb-md-0 mb-4'>
                            Read More
                        </span> */}
                        <div className='col-md-12 mt-5 text-start '>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img1.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Air Filters</p>
                                            <p>Our air filters are designed to maximize airflow while effectively trapping dust, dirt, and other contaminants. By ensuring that only clean air enters your machinery, these filters play a vital role in boosting engine performance and extending the lifespan of your<br /> equipment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-md-0 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img2.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Oil Filters</p>
                                            <p>Our oil filters are engineered to provide superior filtration for your machinery, effectively capturing contaminants and ensuring that only clean oil circulates through the engine. This critical component not only protects your equipment from wear and tear but also enhances overall performance and longevity.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-md-0 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img3.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Fuel Filters</p>
                                            <p>Our fuel filters are meticulously designed to ensure the purity of fuel entering your engine. By effectively trapping impurities and contaminants, these filters enhance fuel efficiency and performance, ultimately contributing to the longevity of your<br /> equipment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img4.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Hydraulic Filters</p>
                                            <p>Our hydraulic filters are expertly designed to ensure the cleanliness and efficiency of hydraulic systems. By effectively removing contaminants from hydraulic fluids, these filters enhance equipment performance and reliability, minimizing the risk of costly breakdowns.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img5.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Oil Baths</p>
                                            <p>Our oil baths are designed to provide superior filtration and lubrication, ensuring that your machinery operates at peak performance while minimizing wear and tear. They are essential for maintaining the longevity of your equipment, especially in harsh working conditions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img6.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Saperators</p>
                                            <p>Our separators are engineered to effectively separate contaminants from fluids, ensuring the purity and performance of your machinery. These high-efficiency devices play a crucial role in prolonging the life of your equipment by maintaining optimal operational conditions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img6.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Filters ASSYEMBLY</p>
                                            <p>Our filters assembly is meticulously crafted to ensure seamless integration with your machinery, providing reliable performance and extended service life. Each assembly is designed for easy installation and maintenance, allowing you to keep your equipment running efficiently without unnecessary downtime.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-4'>
                                    <div className='col-md-12 border_of_cards '>
                                        <img className='img-fluid img_heights_of_cards' src='/imagess/img7.webp' />
                                        <div className='col-md-12 px-3 pt-3 pb-3'>
                                            <p className='m-0 p-0 filter_text pb-2'>Spare Parts</p>
                                            <p>Our spare parts are sourced from top manufacturers, ensuring that you receive durable and reliable components to maintain your machinery's performance. With a wide selection available, we cater to various models and brands, guaranteeing that you can find the right parts for your needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-6 m-md-auto   text-center'>
                        <img className='img-fluid border_for_image' src='/images/g13.jpg' />
                    </div> */}
                </div>
            </div>



            {/* Section 3 --------------------------------------- */}
            <div className='col-md-12 backgrou_blue_section3 py-3' ref={productsRef}>
                <div className='col-md-12 text-center pt-4'>
                    <h2 className='text-light'><b>Our Portofolio</b></h2>
                </div>

                <div className='col-md-12 padding_top_bottom_left_right_only mt-5'>
                    <div className='row pb-5'>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                {/* <img className='img-fluid' src='/images/s1.png' /> */}
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet1.png' />
                                <h5 className='pt-2'><b>FLEETGUARD</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    At Filter City, we understand that the demands of the fleet management industry require reliable and efficient filtration solutions. Our FLEETGUARD products are engineered to provide exceptional protection for engines and machinery, ensuring that your fleet runs smoothly and efficiently. With a focus on durability and performance, FLEETGUARD filters help minimize downtime and optimize the lifespan of your equipment.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet2.webp' />
                                <h5 className='pt-2'><b>DONALDSON</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    At Filter City, we recognize the unique challenges faced by the construction and mining industries. Our DONALDSON filters are specifically engineered to provide robust protection and enhance the performance of your heavy machinery. Designed with advanced filtration technology, these products ensure that your equipment operates efficiently and reliably in even the most demanding environments, minimizing maintenance costs and extending service life.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-md-auto mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet3.webp' />
                                <h5 className='pt-2'><b>SAKURA</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    SAKURA filters are engineered for high performance, ensuring that your heavy machinery operates at its best in various agricultural and construction applications. With a commitment to quality and reliability, these filters provide exceptional protection against contaminants, extending the life of your equipment and reducing maintenance costs. Trust SAKURA to deliver the filtration solutions you need for optimal efficiency.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet4.webp' />
                                <h5 className='pt-2'><b>MANN FILTERS</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    MANN FILTERS is a renowned name in the filtration industry, offering a wide range of high-quality products designed for heavy machinery. At Filter City, we are proud to supply Mann Filters, which are engineered for durability and efficiency. These filters are crafted to meet the rigorous demands of diverse applications, ensuring optimal performance and extended service life for your equipment.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet5.webp' />
                                <h5 className='pt-2'><b>PERKINS</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    Filter City is proud to supply a comprehensive range of filtration solutions through Parker, a name synonymous with innovation in the filtration industry. Parker filters are engineered to meet the demanding requirements of various applications, ensuring exceptional performance and reliability for your heavy machinery. With a commitment to excellence and durability, Parker's advanced filtration technologies help protect your equipment and maintain operational efficiency.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet7.webp' />
                                <h5 className='pt-2'><b>HYUNDAI</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    Filter City proudly offers top-tier filtration solutions through Hyundai, a global leader in heavy machinery. Known for their commitment to quality and advanced engineering, Hyundai filters are designed to optimize the performance of various construction and agricultural equipment. Our collaboration with Hyundai ensures that our clients receive reliable filtration products that enhance the longevity and efficiency of their machines.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet8.webp' />
                                <h5 className='pt-2'><b>HENGST</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    Filter City is pleased to provide a premium selection of filtration solutions through Hengst, a manufacturer renowned for its innovative approaches in the filtration sector. With a focus on quality and performance, Hengst filters are engineered to meet the rigorous demands of various machinery applications, ensuring that your equipment operates at peak efficiency. Our partnership with Hengst reflects our commitment to delivering only the best filtration products to our clients.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet9.webp' />
                                <h5 className='pt-2'><b>BOBCAT </b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    Filter City is proud to supply Bobcat Parts, providing top-quality filters and spareparts  designed specifically for Bobcat machinery. Our filters ensure the highest level of performance, durability, and efficiency, enabling operators to maximize their equipment's capabilities in demanding environments. With a commitment to excellence, we guarantee that our Bobcat Parts filters meet the rigorous standards expected by industry professionals.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet10.webp' />
                                <h5 className='pt-2'><b>JCB PARTS</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    Filter City is proud to provide high-quality filtration and spareparts solutions for JCB machinery. Our range of JCB Parts filters ensures optimal performance and reliability, allowing your equipment to operate efficiently in various challenging conditions. With a dedication to excellence, we ensure that our filters meet the rigorous standards set by industry professionals, enhancing the longevity and productivity of your JCB machines.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>

                        </div>
                        <div className='col-md-4 mt-4'>
                            <div className='col-md-12 padding_top_card'>
                                <img className='img-fluid img_heights_of_cards2' src='/imagess/fleet6.webp' />
                                <h5 className='pt-2'><b>PARKER</b></h5>
                                <p className='m-0 p-0 px-md-2 heightadjustment'>
                                    Filter City is proud to supply a comprehensive range of filtration solutions through Parker, a name synonymous with innovation in the filtration industry. Parker filters are engineered to meet the demanding requirements of various applications, ensuring exceptional performance and reliability for your heavy machinery. With a commitment to excellence and durability, Parker's advanced filtration technologies help protect your equipment and maintain operational efficiency.
                                </p>
                                <div className='col-md-12 pt-2 position_of_button'>
                                    <span  className='btn btn-light btn-lg button_cutome2 px-md-5 mt-3 py-1'>
                                        <b>Read more</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mt-4'>
                        </div>
                    </div>
                </div>
            </div>



            {/* Section 5 --------------------------------------- */}
            <div ref={contactRef} className='col-md-12'>
                <div className='col-md-12 text-center pt-5 mt-3 '>
                    <h2><b>Satisfied <span className='color_towerld'>Customers </span></b></h2>
                </div>
                <div className='col-md-12 padding_top_bottom_left_right_only mt-4 mb-5 pb-2'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-10'>
                            <div className='col-md-12 text-center'>
                                <p className='m-0 p-0 satisfied_cc'>
                                    At Filter City, we pride ourselves on the positive impact our filters have on our customers' operations. The testimonials we receive affirm our commitment to quality and reliability. We strive to exceed expectations and provide the best solutions for all heavy machinery needs.
                                </p>
                                <i ><p className='m-0 p-0  pt-3 real_sat'>Real stories from satisfied customers highlighting our commitment to quality.</p></i>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Home