import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import ResumePDF from '../../assets/images/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Resume() {
    return (
        <section id='resume' className='min-h-screen justify-center items-center'>
                <div id='resumeContainer' className='bg-c-blue px-5'>
                    <button type='button' className='bg-c-yellow flex justify-end my-5 w-full'>
                        ❌
                    </button>
                    <h3 id='title' className='text-7xl flex justify-center'>Resume</h3>
                    <Document file={ResumePDF} className='w-full'>
                        <Page pageNumber={1} />
                    </Document>
                </div>
        </section>
    );
};

export default Resume;