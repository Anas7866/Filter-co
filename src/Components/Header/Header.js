import React, { useState } from 'react'
import "../Header/Header.css"
import { IoLocationSharp, IoLogoLinkedin, IoMenu } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

const Header = ({ onNavigate, TogglerNew, toggler }) => {

    const location = useLocation();
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState('');
    const [ShowFlag, setShowFlag] = useState(false);

    const triggernewflag = () => {
        setShowFlag(!ShowFlag)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        TogglerNew(!toggler);
        setShow(true)
    };

    console.log("location", location?.pathname)
    console.log("toggler", toggler)

    const flags = {
        1: '/images/uk.svg',    // Image path for UK flag
        2: '/images/uk.svg',   // Image path for USA flag
        3: '/images/uk.svg' // Image path for France flag
    };

    const options = [
        {
            value: '1',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={flags[1]} alt="UK Flag" style={{ width: '20px', marginRight: '10px' }} />
                    United Kingdom
                </div>
            ),
        },
        {
            value: '2',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={flags[2]} alt="USA Flag" style={{ width: '20px', marginRight: '10px' }} />
                    United States
                </div>
            ),
        },
        {
            value: '3',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={flags[3]} alt="France Flag" style={{ width: '20px', marginRight: '10px' }} />
                    France
                </div>
            ),
        },
    ];

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <div className='display_pc'>
                <div className='col-md-12 '>
                    <div className='col-md-12 header_background_orange'>
                        <div className='row'>
                            <div className='col-md-6 m-auto padding_left_right_header2'>
                                <div className='d-flex'>
                                    <span><p className='m-0 p-0 color_of_phone'>(+966) 599189997</p></span>
                                    <span><p className='m-0 p-0 color_of_phone ps-3'>(+966) 581873727</p></span>
                                    <span><p className='m-0 p-0 color_of_phone ps-3'>(+966) 599445710</p></span>
                                </div>
                            </div>
                            <div className='col-md-6 pb-1 text-end padding_left_right_header2 color_of_icons'>
                                <span className='pe-2'><IoLogoLinkedin /></span>
                                <span className='pe-2'><FaInstagram /></span>
                                <span><FaFacebook /></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 py-2 padding_left_right_header '>
                        <div className='row'>
                            <div className='col-md-2'>
                                <img className='img-fluid logo_font_txt' src='/imagess/logo.jpg' />
                            </div>
                            <div className='col-md-8'>
                                <div className={`col-md-12 py-3 text-center `} >
                                    <span ><Link className='text_dec_stop_Text' to="/">Home</Link></span>
                                    <span className='ps-5'><Link className='text_dec_stop_Text' to="/">Products</Link></span>
                                    <span className='ps-5'><Link className='text_dec_stop_Text' to="/">About Us</Link></span>

                                    <span className='ps-5' ><Link className='text_dec_stop_Text' to="/">Resources</Link></span>


                                    {/* <span className='ps-5' onClick={() => onNavigate('portfolio')}>Portofolio</span> */}
                                    <span className='ps-5'><Link className='text_dec_stop_Text' to="/">Contact US</Link></span>
                                </div>
                            </div>
                            <div className='col-md-2 ps-md-5 m-auto'>
                                <div className='col-md-12 border_for_green' onClick={triggernewflag}>
                                    <div className='d-flex justify-content-center'>
                                        <img className='img-fluid flag_w_h mt-2' src='/images/usa-flag.png' /><p className='m-0 py-1'> English</p>
                                    </div>

                                </div>
                                {ShowFlag &&
                                    <div className='width_foe_dropdown mt-2 py-1' onClick={triggernewflag}>
                                        <div className='d-flex justify-content-center'>
                                            <img className='img-fluid flag_w_h mt-2' src='/images/saudia-flag.png' /><p className='m-0 py-1'> Arabic</p>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <img className='img-fluid flag_w_h mt-2' src='/images/french-flag.jpg' /><p className='m-0 py-1'> French</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='display_mobile'>
                <div className='col-md-12 header_background_orange'></div>
                <div className='col-md-12 py-2 background_blue px-2'>
                    <div className='row'>
                        <div className='col-6 py-2'>
                            <Link className='text_dec_stop' to="/">
                                <img className='img-fluid logo_font_txt' src='/imagess/logo.jpg' />
                            </Link>
                        </div>
                        <div className='col-6 m-auto text-end px-4' >
                            <span className='buger_menu' onClick={TogglerNew}>
                                {toggler ? <RxCross2 /> :
                                    <IoMenu />
                                }
                            </span>
                        </div>
                    </div>
                </div>
                {toggler === true ?
                    <div className='col-md-12 background_blue_position'>
                        {/* <div className='col-md-12 background_blue px-2'>
                            <div className='row'>
                                <div className='col-6 py-4'>
                                    <img className='img-fluid width_logo' src='/images/logo.png' />
                                </div>
                                <div className='col-6 m-auto text-end px-4' onClick={TogglerNew}>
                                    <span className='buger_menu'><RxCross2 /></span>
                                </div>
                            </div>
                        </div> */}
                        <div className='col-md-12 px-4'>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">Home</Link></h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">About Us</Link></h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">Products</Link></h5>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">Resources</Link></h5>
                            <h5 className='py-3' ><Link className='text_dec_stop' to="/">Services</Link></h5>

                            {/* <h5 className='py-3' onClick={() => { onNavigate('portfolio') }}>Portfolio</h5> */}
                            <h5 className='py-3' ><Link className='text_dec_stop' to="/">Contact Us</Link></h5>
                        </div>
                    </div>
                    : null}

                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='py-0'>
                        <div className='col-md-12'>
                            <div className='col-md-12  pb-2'>
                                <div className='row'>
                                    <div className='col-md-12   px-3 '>
                                        <div className='col-md-12 pt-4'>
                                            <input className='form-control form-control-lg border_for_lg' placeholder='Your Company Name' />
                                        </div>
                                        <div className='row '>
                                            <div className='col-md-6 pt-3 '>
                                                <input className='form-control form-control-lg border_for_lg' placeholder='Industry' />
                                            </div>
                                            <div className='col-md-6 pt-3'>
                                                <input className='form-control form-control-lg border_for_lg' placeholder='Your Name' />
                                            </div>
                                        </div>
                                        <div className='col-md-12 pt-3'>
                                            <input className='form-control form-control-lg border_for_lg' placeholder='Position' />
                                        </div>
                                        <div className='row '>
                                            <div className='col-md-6 pt-3 '>
                                                <input className='form-control form-control-lg border_for_lg' placeholder='Email Address' />
                                            </div>
                                            <div className='col-md-6 pt-3'>
                                                <input className='form-control form-control-lg border_for_lg' placeholder='Telephone No' />
                                            </div>
                                        </div>
                                        <div className='col-md-12 pt-3'>
                                            <textarea className='form-control form-control-lg border_for_lg' placeholder='Message' ></textarea>
                                        </div>
                                        <div className='col-md-12 mt-3 pb-5'>
                                            <span className='btn btn-light btn-lg button_cutome1 px-5 '>
                                                Submit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Header