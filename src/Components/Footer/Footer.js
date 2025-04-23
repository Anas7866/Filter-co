import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

function Footer() {
    return (
        <>
            <div className='col-md-12 background_footer padding_top_bottom_left_right_only py-5 '>
                <div className='col-md-12 py-4'>
                    <div className='row py-5'>
                        <div className='col-md-3 alignment1'>
                            <div className='col-md-12  '>
                                <div className='px-3 pb-3'>
                                    <div>
                                        <img className='img-fluid logo_font_txt' src='/imagess/logo.jpg' />
                                    </div>
                                    {/* <div>
                                        <p className='m-0 p-0 filtertext'>FILTER CITY TRADING CO.</p>
                                    </div> */}
                                </div>
                                <div className='col-md-12 px-3 dark_text'>

                                    <p className='m-0 p-0 text_footer_gray'>
                                        Filter City is a leading supplier specializing in all types of heavy machinery filters, providing high-quality solutions for industries such as construction, mining, agriculture, and transportation.
                                        <br /><br /><span className='icon_green_t '> <b>FILTER CITY</b></span> - Where Power Meets Purity
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 alignment2  px-md-5 px-4 py-0 pt-2'>
                            <p className='m-0 p-0 text-light pb-4 pt-2'><b>Contact Details</b></p>

                            <a className='text_dec_stop text_footer_gray ' > <p className='m-0 p-0 pt-1 '><FaWhatsapp className='icon_green_t' /> &nbsp;(+966) 599189997</p> </a>
                            {/* <a className='text_dec_stop ' href="tel:+966532776424"> <p className='m-0 p-0 pt-1 '><FaPhoneAlt className='icon_green_t' /> &nbsp;+966 53 277 6424</p> </a> */}
                            <a className='text_dec_stop text_footer_gray ' href="mailto:Filtercity@outlook.sa">   <p className='m-0 p-0 pt-2 '><IoMail className='icon_green_t' /> &nbsp;Filtercity@outlook.sa</p> </a>
                            <a className='text_dec_stop text_footer_gray ' target="_blank" href="https://www.google.com/maps/place/WESTERN+AL+NOOR+TRADING+EST+FILTER+CITY+CO/@21.4495865,39.1934368,13z/data=!4m6!3m5!1s0x15c3cef20d656d51:0xc6e0ec6e353a7a5f!8m2!3d21.4816554!4d39.2127528!16s%2Fg%2F11gfcypdjq?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">   <p className='m-0 p-0 pt-2 '><FaLocationDot className='icon_green_t' /> &nbsp;
                                OPPOSITE AL RAJHI BANK, Old Mecca Al Moukarramah Rd, Al-Nazlah Al-Yamaniyah, Jeddah 22332</p> </a>
                            {/* <div className='col-md-12 mt-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.6650494367223!2d39.2127528!3d21.481655399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cef20d656d51%3A0xc6e0ec6e353a7a5f!2sWESTERN%20AL%20NOOR%20TRADING%20EST%20FILTER%20CITY%20CO!5e0!3m2!1sen!2s!4v1745239929005!5m2!1sen!2s" style={{ width: "100%", border: "0" }} height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
                        </div>
                        <div className='col-md-3 alignment2  px-md-5 px-4 py-0 pt-2'>
                            <p className='m-0 p-0 text-light pb-4 pt-2'><b>Contact Details</b></p>

                            <a className='text_dec_stop text_footer_gray ' > <p className='m-0 p-0 pt-1 '><FaWhatsapp className='icon_green_t' /> &nbsp;(+966) 581873727</p> </a>
                            {/* <a className='text_dec_stop text_footer_gray ' href="tel:+966532776424"> <p className='m-0 p-0 pt-1 '><FaPhoneAlt className='icon_green_t' /> &nbsp;+966 53 277 6424</p> </a> */}
                            <a className='text_dec_stop text_footer_gray' href="mailto:Filtercity@outlook.sa">   <p className='m-0 p-0 pt-2 '><IoMail className='icon_green_t' /> &nbsp;Filtercity@outlook.sa</p> </a>
                            <a className='text_dec_stop text_footer_gray' target="_blank" href="https://www.google.com/maps/place/FILTER+CITY+%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AA%D8%B1+%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9%E2%80%AD/@21.4495865,39.1934368,13z/data=!4m6!3m5!1s0x15c3cb001b750501:0xb269df897478fc6d!8m2!3d21.4173679!4d39.2538899!16s%2Fg%2F11lp2t1vpc?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">   <p className='m-0 p-0 pt-2 '><FaLocationDot className='icon_green_t' /> &nbsp;
                                مركز البسامي, أبو العناء اليمامي, Al Jawharah, Jeddah 22433.
                            </p> </a>
                            {/* <div className='col-md-12 mt-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.303822433494!2d39.2538836!3d21.417299800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cb001b750501%3A0xb269df897478fc6d!2zRklMVEVSIENJVFkg2LTYsdmD2Kkg2YXYr9mK2YbYqSDYp9mE2YHZhNin2KrYsSDZhNmE2KrYrNin2LHYqQ!5e0!3m2!1sen!2s!4v1745240530906!5m2!1sen!2s" style={{ width: "100%", border: "0" }} height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
                        </div>
                        <div className='col-md-3 alignment2  px-md-5 px-4 py-0 pt-2'>
                            <p className='m-0 p-0 text-light pb-4 pt-2'><b>Contact Details</b></p>

                            <a className='text_dec_stop text_footer_gray ' > <p className='m-0 p-0 pt-1 '><FaWhatsapp className='icon_green_t' /> &nbsp;(+966) 599445710</p> </a>
                            {/* <a className='text_dec_stop text_footer_gray ' href="tel:+966532776424"> <p className='m-0 p-0 pt-1 '><FaPhoneAlt className='icon_green_t' /> &nbsp;+966 53 277 6424</p> </a> */}
                            <a className='text_dec_stop text_footer_gray' href="mailto:Filtercity@outlook.sa">   <p className='m-0 p-0 pt-2 '><IoMail className='icon_green_t' /> &nbsp;Filtercity@outlook.sa</p> </a>
                            <a className='text_dec_stop text_footer_gray' target="_blank" href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AA%D8%B1+%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9%E2%80%AD/@21.4495865,39.1934368,13z/data=!4m6!3m5!1s0x15c3cf227be4e993:0xc407748ff46fb4b7!8m2!3d21.4229958!4d39.2565208!16s%2Fg%2F11c5wmg98h?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">   <p className='m-0 p-0 pt-2 '><FaLocationDot className='icon_green_t' /> &nbsp;
                                1-  المعارض السيارات) مقابل تقدير الشاحنات مركز سعد الخماش معرض رقم 1 و 2, Al Jawharah، شارع عبد الله بن معمر التميمي رضي الله عنه حي, Jeddah 22337
                            </p> </a>

                            {/* <div className='col-md-12 mt-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.1589665337356!2d39.25652079999999!3d21.4229958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf227be4e993%3A0xc407748ff46fb4b7!2z2LTYsdmD2Kkg2YXYr9mK2YbYqSDYp9mE2YHZhNin2KrYsSDZhNmE2KrYrNin2LHYqQ!5e0!3m2!1sen!2s!4v1745240643462!5m2!1sen!2s" style={{ width: "100%", border: "0" }} height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
                        </div>

                        {/* <div className='col-md-3 alignment3 pt-2  px-0'>
                        <p className='m-0 p-0 text-light pb-4 '><b>Follow</b></p>
                        <span className='widdth_height_bg '>
                            <FaLinkedin />
                        </span>
                        <span className='widdth_height_bg ms-2'>
                            <FaFacebookF />
                        </span>
                        <span className='widdth_height_bg ms-2'>
                            <FaXTwitter />
                        </span>
                        <span className='widdth_height_bg ms-2'>
                            <a className='text_dec_stop ' href="https://wa.me/+966532776424" target='_blank'>
                                <FaWhatsapp />
                            </a>
                        </span>
                    </div> */}
                    </div>
                </div>
            </div >
            <div className='col-md-12 background_ff padding_top_bottom_left_right_only text_footer_gray py-4'>
                <div className='row'>
                    <div className='col-md-6 col-8 text-start'>
                        <p className='m-0 p-0 py-1'>&copy;2025 FILTER CITY TRADING</p>
                    </div>
                    <div className='col-md-6 col-4 text-end m-auto'>
                        <span>
                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.facebook.com/FILTERCITY.TRADING/" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        </span>

                        <span className='ps-3'>
                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.instagram.com/filter_city_fc/?igsh=bmt0emgwMzZ5NmJ1#" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </span>

                        <span className='ps-3'>
                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.instagram.com/filter_city_fc/?igsh=bmt0emgwMzZ5NmJ1#" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </span>
                        {/* <span className='ps-3'><FaXTwitter /></span> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer