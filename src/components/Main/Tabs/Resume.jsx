import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {

  return (
    <div id='resume'>
      <a href="/hemsCV2.pdf" download='nanna-cv.pdf'>Download here</a>
      <div id='resume-pdf'>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl="/hemsCV2.pdf"
          />
        </Worker>
      </div>
    </div>
  )
}

export default Resume