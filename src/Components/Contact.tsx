import BlurText from "./ui/shadcn-io/blur-text";


function Contact() {
  return (
    <div className="flex flex-col justify-start items-center mt-[10vh] w-[100%] h-[69vh] bg-gradient-to-t from-[#2C3E50] to-[#1B2631]">
        <BlurText
            text="Contact Me"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold"
            />
        <p className="mt-[10vh]">You can reach me through the following platforms:</p>
        <div className="w-[50%] flex justify-around items-center mt-[10vh]">
            <a className="w-[10vh] aspect-square" href="https://github.com/MarcoDava"><img className="w-[10vh] aspect-square" src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub Icon"></img></a>
            <a className="w-[10vh] aspect-square" href="https://www.linkedin.com/in/marcodava/"><img className="w-[10vh] aspect-square"  src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn Icon"></img></a>
            <a className="w-[10vh] aspect-square" href="mailto:marco.a.dava@gmail.com"><img className="w-[10vh] aspect-square" src="https://img.icons8.com/ios_filled/512/FFFFFF/gmail-new.png" alt="Gmail Icon"></img></a>
        </div>
    </div>
  );
}

export default Contact;
