
import ResumePdf from "@/assets/MarcoSoftDevResume.pdf";

function ResumeEmbed() {
  return (
    <div className="w-[100vw] min-h-[90vh] mt-[5vh] mb-[5vh] mx-auto resume-embed-container flex flex-col items-center">
      <div className="w-[90vw] max-w-4xl h-[80vh] border-[1vh] rounded-[1vh] border-[#A5C8D6] overflow-hidden">
        <object
          data={ResumePdf}
          type="application/pdf"
          className="w-full h-full"
          aria-label="Marco Dava Resume PDF"
        >
          <p className="p-4 text-sm">
            Your browser could not display the embedded PDF.
            {" "}
            <a href={ResumePdf} className="underline text-[#A5C8D6]">
              Click here to open or download the resume.
            </a>
          </p>
        </object>
      </div>
      <a
        href={ResumePdf}
        download
        className="mt-4 text-sm text-[#A5C8D6] underline"
      >
        Download PDF
      </a>
    </div>
  );
}

export default ResumeEmbed;
