import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import ResumePDF from '../../assets/images/resume.pdf';
// import ResumePDF from '../../assets/images/resume.pdf'

function Resume() {
    return (
        <section id='resume'>
            <Document file={ResumePDF} className='w-full'>
                <Page pageNumber={1} />
            </Document>
        </section>
    );
};

export default Resume;