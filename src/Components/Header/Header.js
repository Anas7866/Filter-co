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
                    <div className='col-md-12  padding_left_right_header '>
                        <div className='row'>
                            <div className='col-md-2 m-auto'>
                                <img className='img-fluid logo_font_txt' src='/imagess/logo.jpg' />
                            </div>
                            <div className='col-md-10  text-end'>
                                <div className={`d-flex justify-content-end py-4 `} >
                                    <span className='pt-1' ><Link className='text_dec_stop_Text borderbottom_activee' >Home</Link></span>
                                    <span className='ps-5 pt-1' onClick={() => { onNavigate('products') }} ><Link className='text_dec_stop_Text ' >Products</Link></span>
                                    <span className='ps-5 pt-1' onClick={() => onNavigate('aboutus')}><Link className='text_dec_stop_Text ' >About Us</Link></span>

                                    {/* <span className='ps-5 pt-1' ><Link className='text_dec_stop_Text' >Resources</Link></span> */}


                                    {/* <span className='ps-5' onClick={() => onNavigate('portfolio')}>Portofolio</span> */}
                                    <span className='ps-5 pt-1' onClick={() => onNavigate('contactusLast')}><Link className='text_dec_stop_Text' to="/">Contact US</Link></span>
                                    <span className='ps-5'><button onClick={() => onNavigate('contactus')} className='btn btn-warning orange_button_color'>Request A Quote</button></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='display_mobile'>
                <div className='col-md-12 header_background_orange'></div>
                <div className='col-md-12 py-2 background_blue ps-3 pe-3'>
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
                        <div className='col-md-12 px-4'>
                            <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">Home</Link></h5>
                            <h5 className='py-3' onClick={() => onNavigate('aboutus')}><Link className='text_dec_stop' to="/">About Us</Link></h5>
                            <h5 className='py-3' onClick={() => { TogglerNew(); onNavigate('products') }}><Link className='text_dec_stop' to="/">Products</Link></h5>
                            {/* <h5 className='py-3' onClick={TogglerNew}><Link className='text_dec_stop' to="/">Resources</Link></h5> */}
                            <h5 className='py-3' ><Link className='text_dec_stop' to="/">Services</Link></h5>
                            <h5 className='py-3' onClick={() => onNavigate('contactusLast')} ><Link className='text_dec_stop' to="/">Contact Us</Link></h5>
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