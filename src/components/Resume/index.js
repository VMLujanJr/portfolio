import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import ResumePDF from '../../assets/images/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = ({ onClose }) => {
    return (
        <section id='resume' className='min-h-screen flex justify-center items-center bg-c-tblack absolute w-full'>
            <div id='resumeContainer' className='bg-c-blue px-5 flex flex-col justify-center items-center max-w-screen-lg'>
                <button type='button' onClick={ onClose } className='bg-c-yellow flex justify-end my-5 w-full'>
                    ❌
                </button>
                <h3 id='title' className='text-7xl flex justify-center'>Resume</h3>
                <Document file={ResumePDF} className='w-full'>
                    <Page pageNumber={1} />
                </Document>
                <div className='bg-c-yellow my-5 p-2 rounded-md'>
                    <a href='https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view?usp=sharing' target='_blank'>View PDF</a>
                </div>
            </div>
        </section>
    );
};

export default Resume;