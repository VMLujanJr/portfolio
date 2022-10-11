import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import ResumePDF from '../../assets/images/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = ({ onClose }) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };
    /* const screenSizes = [
        {
            mobile: 360
        },
        {
            tablet: 575
        },
        {
            laptop: 1024
        },
        {
            desktop: 1280
        }
    ]; */

    /* Booleans: true and false */
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 360)
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 575)
    const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280)
    const [whatScale, setWhatScale] = useState(null);
    
    /* const [pdfScale, setPdfScale] = useState(1); */
    const dynamicScaling = ({ whatScale }) => {
        if (isDesktop) {
            setWhatScale(2.0)
        }
        else if (isLaptop) {
            setWhatScale(1.5);
        }
        else if (isTablet) {
            setWhatScale(1.0);
        }
        else if (isMobile) {
            setWhatScale(0.5)
        }
    };

    console.log(dynamicScaling, "HEY LOOK HERE!");
    return (
        <section id='resume' className='z-50 flex justify-center items-center bg-c-tblack fixed top-0 right-0 bottom-0 left-0'>
            <div id='resumeContainer' className='bg-c-shade max-h-screen flex flex-col items-center'>
                <button
                    type='button'
                    onClick={onClose}
                    className='font-bold text-2xl text-c-black bg-c-yellow flex justify-end w-full hover:text-c-black active:text-c-red'>
                    <span className='bg-c-blue w-48 flex justify-start'>X</span>
                </button>
                <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} className={'custom-scroll'}>
                    <Page onLoadSuccess={dynamicScaling} pageNumber={pageNumber} />
                </Document>
                <p> Page {pageNumber} of {numPages} </p>
                <div className='bg-c-yellow hover:bg-c-gray hover:text-c-red my-5 p-2 rounded-md'>
                    <a href='https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view?usp=sharing' target='_blank' rel='noreferrer' className='font-Nanum'>View PDF</a>
                </div>
            </div>
        </section>
    );
};

export default Resume;