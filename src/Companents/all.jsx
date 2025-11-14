import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const BOT_TOKEN = "8565375529:AAGecSewxKBWrMBUYWwxEukIEuCch7Px5fw";
const CHAT_ID = "-1003257673634";

const faqs = [
    {
        question: "Как пройти регистрацию?",
        answer: "Перейти к регистрации",
        link: "/register",
    },
    {
        question: "Где посмотреть тарифы?",
        answer: "Открыть тарифы",
        link: "/pricing",
    },
    {
        question: "Как связаться с поддержкой?",
        answer: "Связаться с поддержкой",
        link: "/contact",
    },
];

function all() {
    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const certificatesRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const company = e.target.company.value;
        const message = e.target.message.value;

        const text = `
       📩 *Yangi xabar!*
       👤 *Ism:* ${name}
       📧 *Email:* ${email}
       🏢 *Kompaniya:* ${company}
       💬 *Xabar:* ${message}
        `;

        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: "Markdown",
                }),
            });
            alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
            e.target.reset();
        } catch (error) {
            console.error("Xatolik:", error);
            alert("❌ Xabar yuborishda xatolik yuz berdi!");
        }
    };

    const cardsData = [
        {
            title: "Карточка 1",
            icon: "gear",
            description: "Software development",
            cardText: "Web development (creation of websites, web applications)",
        },
        {
            title: "Карточка 2",
            icon: "gear",
            description: "Artificial intelligence and machine learning",
            cardText: "Development of intelligent systems and algorithms.",
        },
        {
            title: "Карточка 3",
            icon: "gear",
            description: "1C Products",
            cardText: "1C Products: Integrated Business Management Solutions",
        },
        {
            title: "Карточка 4",
            icon: "gear",
            description: "1C Bitrix",
            cardText: "1C-Bitrix: development, integration and configuration",
        },
        {
            title: "Карточка 5",
            icon: "gear",
            description: "Antiviruses",
            cardText: "Professional protection for your business and home",
        },
        {
            title: "Карточка 6",
            icon: "gear",
            description: "IT Services",
            cardText:
                "IT services: Setting up and maintaining servers, corporate networks, and Wi-Fi zones",
        },
        {
            title: "Карточка 7",
            icon: "gear",
            description: "Automation",
            cardText:
                "Business Process Automation: Optimization through Advanced Technologies",
        },
        {
            title: "Карточка 8",
            icon: "gear",
            description: "Biometric systems",
            cardText: "Biometric Systems and Artificial Intelligence",
        },
    ];

    return (
        <div>

            <header className="relative bg-[url('/baground/bgHope.png')] bg-cover bg-center h-screen ">

                <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  px-[20px] md:px-0  ${scrolled ? "bg-black/20 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
                    <div className="max-w-[1440px] mx-auto flex justify-between items-center py-3 lg:px-3 2xl:px-0  ">
                        <img src="/logo/tenzorsoft-logo.png" alt="logo" className="w-[94px] h-[60px]" />

                        <div className="flex gap-[56px] text-white items-center hidden md:flex">
                            <h1 className="cursor-pointer text-[18px]">Home</h1>

                            <button onClick={() => scrollToSection(aboutRef)} className="cursor-pointer text-[18px]">About Us</button>

                            <div className="flex gap-3">
                                <button onClick={() => scrollToSection(servicesRef)} className="cursor-pointer text-[18px]">Services</button>
                                <i className="bi bi-caret-down-fill text-[8px] mt-2"></i>
                            </div>

                            <div className="flex gap-3">
                                <button onClick={() => scrollToSection(portfolioRef)} className="cursor-pointer text-[18px]">Portfolio</button>
                                <i className="bi bi-caret-down-fill text-[8px] mt-2"></i>
                            </div>

                            <button onClick={() => scrollToSection(certificatesRef)} className="cursor-pointer text-[18px]">Certificates</button>

                            <button onClick={() => scrollToSection(contactRef)} className="cursor-pointer text-[18px]">Contact</button>
                        </div>

                        <div className="md:hidden flex gap-[30px] justify-center items-center">
                            <button className="bg-white text-black rounded-[8px] w-[37px] h-[29px] text-[18px] " >
                                En
                            </button>

                            <button className="text-white text-[24px] " onClick={() => setOpen(!open)}>
                                {open ? "X" : "☰"}
                            </button>
                        </div>
                    </div>

                    {open && (
                        <div className="md:hidden bg-black/60 backdrop-blur-lg text-white text-[18px] px-4 py-4 space-y-4 rounded-xl">
                            <a href="#about" onClick={() => setOpen(false)} className="block">About</a>
                            <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
                            <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
                        </div>
                    )}
                </nav>

                <section id="hero" className="flex items-center text-white h-screen pt-[100px] max-w-[1440px] mx-auto px-[20px] md:px-0 lg:px-3 2xl:px-0">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-semibold">IT solutions <br /> and technologies</h1>
                        <p className="text-[20px]">
                            We offer cutting-edge IT solutions and modern technologies that will <br />
                            help your business stay one step ahead of the competition.
                        </p>
                        <button className="bg-[#0349A7] text-white w-[147px] h-[52px] rounded-xl">Read More</button>
                    </div>
                </section>

            </header>


            <main className=" ">

                <section id="partners" className=" max-w-[1440px] mx-auto m-8">
                    partners
                </section>

                <section ref={aboutRef} id="AboutUs" className=" bg-gradient-to-b from-[#0348A408] to-white flex">
                    <div className="max-w-[1440px]  mx-auto space-y-[40px] md:space-y-[120px] my-[80px] px-[20px] md:px-0">
                        <div className="space-y-4 items-center justify-center flex flex-col text-center">
                            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[184px] md:w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
                                <i className="bi bi-buildings text-2xl"></i>
                                <h1 className="text-2xl">About Us</h1>
                            </button>
                            <h1 className=" font-semibold text-[28px] md:text-4xl">We Create Bunch Of <br />Enthusiastic & Creative Minds</h1>
                            <p className="text-xl">Tenzor Soft LLC is a leading software developer in Uzbekistan, operating <br />in the IT services market since 2008. For over 15 years,</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-[49px]">

                            <img src="/image/AboutUs.jpg" className="h-[335px] w-[335] md:h-[687px] md:w-[689px] rounded-2xl " />

                            <div className=" space-y-[20px]">
                                <div className="space-y-[12px]">
                                    <h1 className="font-medium text-center text-4xl">Why Choose Us?</h1>
                                    <p className="text-lg">With over 15 years of experience in the IT industry, we've established <br className="hidden md:block"/> ourselves as a trusted partner for businesses seeking innovative solutions. <br className="hidden md:block" /> Our team of experts brings together diverse skills and perspectives to tackle <br className="hidden md:block" /> even the most complex challenges... </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[76px] justify-items-center md:justify-items-start">
                                    <div className=" space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className=" bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <i className="bi bi-phone  text-white w-[32px] h-[27px] "></i>
                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">Effective project <br /> management</h1>
                                            <p className="text-lg">Full support of projects using <br /> modern methodologies and</p>
                                        </div>
                                    </div>
                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className=" bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <i className="bi bi-phone  text-white "></i>
                                        </div>
                                        <h1 className="font-medium text-xl">Cross-platform and <br /> responsive design</h1>
                                        <p className="text-lg">We create designs that look <br /> flawless on any</p>
                                    </div>
                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className=" bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <i className="bi bi-phone  text-white "></i>
                                        </div>
                                        <h1 className="font-medium text-xl">Monitoring and time <br /> tracking</h1>
                                        <p className="text-lg">Accurate solutions for time <br /> tracking and productivity <br /> improvement</p>
                                    </div>
                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className=" bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <i className="bi bi-phone  text-white "></i>
                                        </div>
                                        <h1 className="font-medium text-xl">Creating innovative <br /> mobile applications</h1>
                                        <p className="text-lg">We develop custom mobile <br /> solutions that stand out in <br /> the market.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                <section ref={servicesRef} id="Services" className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[70px] my-[20px] ">
                    <div className="space-y-4 items-center justify-center flex flex-col text-center">
                        <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[184px] md:w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
                            <i className="bi bi-buildings text-2xl"></i>
                            <h1 className="text-2xl">Services</h1>
                        </button>
                        <p className="text-xl">Tenzor Soft LLC is a leading software developer in Uzbekistan, operating <br />in the IT services market since 2008. For over 15 years,</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {cardsData.map((card, index) => (
                            <div key={index} className="relative flex flex-col h-[160px] w-[345px] md:h-[285px] p-[16px] md:p-6 rounded-2xl border border-white shadow-xl shadow-gray-200   space-y-1 hover:bg-[#F3F8FF]">
                               <div className="flex gap-4 items-center">
                                 <span className="flex items-center shrink-0 justify-center w-[60px] h-[60px] rounded-full bg-[#0349A7]">
                                    <i className={`bi bi-${card.icon} text-white text-[32px]`}></i>
                                </span>
                                <div className=" font-semibold text-[20px]  text-[#1B2845] block lg:hidden">{card.description}</div>
                               </div>
                                <h1 className="mt-2 font-semibold text-2xl text-[#1B2845] hidden lg:block">{card.description}</h1>
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
                                <p className=" text-[16px] md:text-lg  text-[#8D8D8D]"> {card.cardText} </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* <section ref={portfolioRef} id="Porfolio" className=" bg-gradient-to-b from-[#0348A408] to-white   flex items-center">
                    <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center my-[70px] space-y-4">
                        <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px] h-[55px] text-center justify-center items-center">
                            <i className="bi bi-buildings text-2xl"></i>
                            <h1 className="text-2xl">Portfolio</h1>
                        </button>
                        <h1 className="font-semibold text-4xl  text-center">Explore Our Most <br /> Remarkable Projects.</h1>
                        <p className=" text-center text-xl">We craft customized solutions that empower both startups and <br /> established brands, driving success and delivering real impact.</p>
                        <div className="grid grid-cols-2 gap-5">

                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/LogistX.png" className="rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">LogistX</h1>
                                        <p className="text-[#8D8D8D] text-base">
                                            Yuklaringizni qayta ishlashga tayyor eng tajribali va ishonchli <br />
                                            haydovchilarimiz bilan tanishing
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>
                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/LogistX.png" className="rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">LogistX</h1>
                                        <p className="text-[#8D8D8D] text-base">
                                            Yuklaringizni qayta ishlashga tayyor eng tajribali va ishonchli <br />
                                            haydovchilarimiz bilan tanishing
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>
                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/LogistX.png" className="rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">LogistX</h1>
                                        <p className="text-[#8D8D8D] text-base">
                                            Yuklaringizni qayta ishlashga tayyor eng tajribali va ishonchli <br />
                                            haydovchilarimiz bilan tanishing
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>
                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/LogistX.png" className="rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">LogistX</h1>
                                        <p className="text-[#8D8D8D] text-base">
                                            Yuklaringizni qayta ishlashga tayyor eng tajribali va ishonchli <br />
                                            haydovchilarimiz bilan tanishing
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}

                {/* <section ref={certificatesRef} id="Certificats" className="max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-5 my-[70px]">
                    <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px] h-[55px] text-center justify-center items-center">
                        <i className="bi bi-buildings text-2xl"></i>
                        <h1 className="text-2xl">Certificats</h1>
                    </button>
                    <h1 className=" font-bold text-4xl text-center">Industry Recognition</h1>
                    <p className="text-center text-2xl">Our commitment to excellence is validated by industry-leading  <br />certifications and partnerships</p>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[467px] h-[370px]  hover:bg-[#F8FBFF]">
                            <div className=" space-y-5">
                                <div className=" flex justify-between">
                                    <div className=" bg-[#e0ecfb] w-[70px] h-[70px] flex items-center justify-center rounded-xl ">
                                        <img src="/logo/certificate.png" className="w-[24px] h-[28px]" />
                                    </div>
                                    <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[67px] h-[35px]">2023</div>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[28px]">AWS Advanced Partner</h1>
                                    <p className="text-lg text-[#8D8D8D]">Amazon Web Services</p>
                                </div>
                                <p className=" font-dmsans font-light italic text-[22px]">Cloud Solutions Architecture</p>
                                <div className="flex gap-2.5">
                                    <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                    <p className="text-[#8D8D8D] text-xl">Verified</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[467px] h-[370px]  hover:bg-[#F8FBFF]">
                            <div className=" space-y-5">
                                <div className=" flex justify-between">
                                    <div className=" bg-[#e0ecfb] w-[70px] h-[70px] flex items-center justify-center rounded-xl ">
                                        <img src="/logo/certificate.png" className="w-[24px] h-[28px]" />
                                    </div>
                                    <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[67px] h-[35px]">2023</div>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[28px]">AWS Advanced Partner</h1>
                                    <p className="text-lg text-[#8D8D8D]">Amazon Web Services</p>
                                </div>
                                <p className=" font-dmsans font-light italic text-[22px]">Cloud Solutions Architecture</p>
                                <div className="flex gap-2.5">
                                    <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                    <p className="text-[#8D8D8D] text-xl">Verified</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[467px] h-[370px]  hover:bg-[#F8FBFF]">
                            <div className=" space-y-5">
                                <div className=" flex justify-between">
                                    <div className=" bg-[#e0ecfb] w-[70px] h-[70px] flex items-center justify-center rounded-xl ">
                                        <img src="/logo/certificate.png" className="w-[24px] h-[28px]" />
                                    </div>
                                    <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[67px] h-[35px]">2023</div>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[28px]">AWS Advanced Partner</h1>
                                    <p className="text-lg text-[#8D8D8D]">Amazon Web Services</p>
                                </div>
                                <p className=" font-dmsans font-light italic text-[22px]">Cloud Solutions Architecture</p>
                                <div className="flex gap-2.5">
                                    <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                    <p className="text-[#8D8D8D] text-xl">Verified</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[467px] h-[370px]  hover:bg-[#F8FBFF]">
                            <div className=" space-y-5">
                                <div className=" flex justify-between">
                                    <div className=" bg-[#e0ecfb] w-[70px] h-[70px] flex items-center justify-center rounded-xl ">
                                        <img src="/logo/certificate.png" className="w-[24px] h-[28px]" />
                                    </div>
                                    <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[67px] h-[35px]">2023</div>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[28px]">AWS Advanced Partner</h1>
                                    <p className="text-lg text-[#8D8D8D]">Amazon Web Services</p>
                                </div>
                                <p className=" font-dmsans font-light italic text-[22px]">Cloud Solutions Architecture</p>
                                <div className="flex gap-2.5">
                                    <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                    <p className="text-[#8D8D8D] text-xl">Verified</p>
                                </div>
                            </div>
                        </div>
                     

                    </div>
                </section> */}

                {/* <section ref={contactRef} id="Contact" className="bg-gradient-to-b from-[#0348A408] to-white flex flex-col justify-center items-center">
                    <div className="max-w-[1440px] mx-auto items-center justify-center flex flex-col space-y-8 my-[70px] ">
                        <div className="space-y-4 items-center justify-center flex flex-col text-center">
                            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px] h-[55px] text-center justify-center items-center">
                                <i className="bi bi-buildings text-2xl"></i>
                                <h1 className="text-2xl">Contact</h1>
                            </button>
                            <h1 className="font-semibold text-4xl">Let's Start a Conversation</h1>
                            <p className="text-xl">
                                Have a project in mind? We'd love to hear from you. Send us a message <br />
                                and we'll respond as soon as possible.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-[710px] h-[666px] bg-white rounded-[24px] p-[36px] shadow-2xl shadow-gray-200 space-y-6">
                            <div className="flex gap-3">
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        className="w-[288px] h-[54px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xl mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        required
                                        className="w-[288px] h-[54px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xl mb-2" htmlFor="company">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Company name"
                                    className="w-[638px] h-[54px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-xl mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project"
                                    rows="4"
                                    required
                                    className="w-[638px] h-[242px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-[638px] h-[52px] bg-[#0349A7] border-2 border-[#0349A7] hover:text-[#0349A7] text-white py-2 px-4 rounded-lg hover:bg-white transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </section> */}

            </main>

            {/* <footer className="bg-[rgb(0,17,40)] text-white">
                <div className="max-w-[1440px] mx-auto flex flex-col py-[70px] space-y-[80px] ">
                    <div className="flex flex-col md:flex-row md:gap-[62px] md:justify-between md:items-start ">
                        <div className="flex flex-col space-y-[19px]">
                            <img src="/logo/tenzorsoft-logo.png" className="w-[94px] h-[60px]" />
                            <p className="text-xl ">Transforming businesses through <br /> innovative technology solutions <br /> since 2008.</p>
                            <div className="flex gap-[17px]">
                                <button className="w-[44px] h-[44px] bg-white rounded-[12px] text-center text-black">f</button>
                                <button className="w-[44px] h-[44px] bg-white rounded-[12px] text-center text-black">f</button>
                                <button className="w-[44px] h-[44px] bg-white rounded-[12px] text-center text-black">f</button>
                                <button className="w-[44px] h-[44px] bg-white rounded-[12px] text-center text-black">f</button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-[16px] text-[#8D8D8D] ">
                            <h1 className="text-xl font-semibold text-white">Template</h1>
                            <a>Home</a>
                            <a>About Us</a>
                            <a>Services</a>
                            <a>Portfolio</a>
                            <a>Certificates</a>
                            <a>Contact</a>
                        </div>
                        <div className="flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">Services</h1>
                            <a>Software development</a>
                            <a href="">1C Production</a>
                            <a href="">1С Bitrix</a>
                            <a href="">Antivirus</a>
                            <a href="">Automation</a>
                            <a href="">Biometric systems</a>
                            <a href="">IT Services</a>
                        </div>
                        <div className="flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">Contact</h1>
                            <p>Tashkent city Mirabad <br /> district st. Magtymguly</p>
                            <span>+998(75) 556-56-56</span>
                            <p>contact@techsolution.com</p>
                        </div>
                        <div className="flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">Subscribe From</h1>
                            <input type="text" id="name" placeholder="Enter Your Email..."
                                className="w-[326px] h-[48px] px-4 py-2 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="w-[326px] h-[52px] bg-[#0349A7] border border-[#0349A7] rounded-[12px] font-medium text-white text-lg">Subscribe</button>
                        </div>

                        <div className="max-w-2xl mx-auto p-4">
                            <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                                        <button className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none" onClick={() => toggleIndex(index)}>
                                            <span className="font-medium">{faq.question}</span>
                                            <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                                        </button>

                                     
                                        {openIndex === index && (
                                            <div className="px-4 pb-4 pt-2">
                                                <button onClick={() => navigate(faq.link)} 
                                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                                >
                                                    {faq.answer}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[40px] text-[#8D8D8D]">
                        <hr className="border-t border-[#8D8D8D80]" />
                        <div className="flex justify-between ">
                            <p>© 2024 TechSolutions. All rights reserved.</p>
                            <div className="flex gap-[60px]">
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer> */}

        </div>
    );
}

export default all;


{/* <div className="shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[467px] h-[370px]  hover:bg-[#F8FBFF]">
                            <div className=" space-y-5">
                                <div className=" flex justify-between">
                                    <div className=" bg-[#e0ecfb] w-[70px] h-[70px] flex items-center justify-center rounded-xl ">
                                        <img src="/logo/certificate.png" className="w-[24px] h-[28px]" />
                                    </div>
                                    <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[67px] h-[35px]">2023</div>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[28px]">AWS Advanced Partner</h1>
                                    <p className="text-lg text-[#8D8D8D]">Amazon Web Services</p>
                                </div>
                                <p className=" font-dmsans font-light italic text-[22px]">Cloud Solutions Architecture</p>
                                <div className="flex gap-2.5">
                                    <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                    <p className="text-[#8D8D8D] text-xl">Verified</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[467px] h-[370px]  hover:bg-[#F8FBFF]">
                            <div className=" space-y-5">
                                <div className=" flex justify-between">
                                    <div className=" bg-[#e0ecfb] w-[70px] h-[70px] flex items-center justify-center rounded-xl ">
                                        <img src="/logo/certificate.png" className="w-[24px] h-[28px]" />
                                    </div>
                                    <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[67px] h-[35px]">2023</div>
                                </div>
                                <div>
                                    <h1 className="font-medium text-[28px]">AWS Advanced Partner</h1>
                                    <p className="text-lg text-[#8D8D8D]">Amazon Web Services</p>
                                </div>
                                <p className=" font-dmsans font-light italic text-[22px]">Cloud Solutions Architecture</p>
                                <div className="flex gap-2.5">
                                    <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                    <p className="text-[#8D8D8D] text-xl">Verified</p>
                                </div>
                            </div>
                        </div> */}