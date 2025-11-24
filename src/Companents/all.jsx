import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Partners from "./partners";

const BOT_TOKEN = "8565375529:AAGecSewxKBWrMBUYWwxEukIEuCch7Px5fw";
const CHAT_ID = "-1003257673634";

function all() {
    const [openId, setOpenId] = useState(null);

    const certificates = [
        {
            id: 0,
            icon: "/logo/certificate.png",
            badge: "certificateSection.cards.0.year",
            title: "certificateSection.cards.0.title",
            subtitle: "certificateSection.cards.0.subtitle",
            focus: "certificateSection.cards.0.focus",
            status: "certificateSection.cards.0.status",
            modalImage: "/image/itpark.jpeg",
            modalTitle: "IT Park",
        },
        {
            id: 1,
            icon: "/logo/certificate.png",
            badge: "certificateSection.cards.1.year",
            title: "certificateSection.cards.1.title",
            subtitle: "certificateSection.cards.1.subtitle",
            focus: "certificateSection.cards.1.focus",
            status: "certificateSection.cards.1.status",
            modalImage: "/image//itparkt.jpg",
            modalTitle: "IT Park",
        },
        {
            id: 2,
            icon: "/logo/certificate.png",
            badge: "certificateSection.cards.2.year",
            title: "certificateSection.cards.2.title",
            subtitle: "certificateSection.cards.2.subtitle",
            focus: "certificateSection.cards.2.focus",
            status: "certificateSection.cards.2.status",
            modalImage: "/image/frontend.jpeg",
            modalTitle: "Frontend Bootcamp",
        },
    ];

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const certificatesRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    // footer
    const faqs = [
        {
            question: t("faq.item1.question"),
            answers: [
                { text: t("faq.item1.home"), ref: homeRef },
                { text: t("faq.item1.about"), ref: aboutRef },
                { text: t("faq.item1.services"), link: "/dashboard" },
                { text: t("faq.item1.portfolio"), link: "/dashboard" },
                { text: t("faq.item1.certificates"), ref: certificatesRef },
                { text: t("faq.item1.contact"), ref: contactRef },
            ]
        },
        {
            question: t("faq.item2.question"),
            answers: [
                { text: t("faq.item2.software"), link: "/home" },
                { text: t("faq.item2.1cProduction"), link: "/register" },
                { text: t("faq.item2.bitrix"), link: "/dashboard" },
                { text: t("faq.item2.antivirus"), link: "/dashboard" },
                { text: t("faq.item2.automation"), link: "/dashboard" },
                { text: t("faq.item2.biometric"), link: "/dashboard" },
                { text: t("faq.item2.itservices"), link: "/dashboard" },
            ]
        },
        {
            question: t("faq.item3.question"),
            answers: [
                { text: t("faq.item3.address") },
                { text: t("faq.item3.phone") },
                { text: t("faq.item3.email") },
            ]
        }
    ];

    const scrollTo = (ref) => {
        setOpen(false);
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };



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

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
    };

    //  отправка к телеграму 
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
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.0.title"),
            cardText: t("servicesSection.cards.0.body"),
        },
        {
            title: "Карточка 2",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.1.title"),
            cardText: t("servicesSection.cards.1.body"),
        },
        {
            title: "Карточка 3",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.2.title"),
            cardText: t("servicesSection.cards.2.body"),
        },
        {
            title: "Карточка 4",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.3.title"),
            cardText: t("servicesSection.cards.3.body"),
        },
        {
            title: "Карточка 5",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.4.title"),
            cardText: t("servicesSection.cards.4.body"),
        },
        {
            title: "Карточка 6",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.5.title"),
            cardText: t("servicesSection.cards.5.body"),
        },
        {
            title: "Карточка 7",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.6.title"),
            cardText: t("servicesSection.cards.6.body"),
        },
        {
            title: "Карточка 8",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.7.title"),
            cardText: t("servicesSection.cards.7.body"),
        },
    ];

    return (
        <div>
            <header className="relative bg-[url('/baground/Hopebg.svg')] bg-cover bg-center h-screen ">

                <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  px-[20px] md:px-0  ${scrolled ? "bg-black/20 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>

                    <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-3 2xl:px-0">
                        <img src="/logo/tenzorsoft-logo.png" alt="logo" className="w-[94px] h-[60px]" />

                        <div className="flex  gap-[58px] items-center">
                            <div className="flex md:gap-[40px] xl:gap-[56px] text-white items-center hidden lg:flex">
                                {[
                                    { label: t("navbar.home"), ref: homeRef },
                                    { label: t("navbar.about"), ref: aboutRef },
                                    { label: t("navbar.services"), ref: servicesRef },
                                    { label: t("navbar.portfolio"), ref: portfolioRef },
                                    { label: t("navbar.certificates"), ref: certificatesRef },
                                    { label: t("navbar.contact"), ref: contactRef },
                                ].map((item, index) => (
                                    <button key={index} onClick={() => scrollToSection(item.ref)} className="relative text-[18px] cursor-pointer px-1after:content-[''] after:block after:h-[2px] after:w-full after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100">
                                        {item.label}
                                    </button>
                                ))}
                            </div>


                            <div className="flex gap-6 items-center">
                                <LanguageSelector />
                                <div className=" lg:hidden flex gap-[30px] justify-center items-center ">
                                    <button className="text-white text-[24px]  " onClick={() => setOpen(!open)}>
                                        {open ? "X" : "☰"}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {open && (
                        <div className="lg:hidden bg-black/60 backdrop-blur-lg text-white text-[18px] px-4 py-4 space-y-4 rounded-xl mx-2">
                            <button onClick={() => scrollTo(homeRef)} className="block">{t("navbar.home")}</button>
                            <button onClick={() => scrollTo(aboutRef)} className="block">{t("navbar.about")}</button>
                            <button onClick={() => scrollTo(servicesRef)} className="block">{t("navbar.services")}</button>
                            <button onClick={() => scrollTo(portfolioRef)} className="block">{t("navbar.portfolio")}</button>
                            <button onClick={() => scrollTo(certificatesRef)} className="block">{t("navbar.certificates")}</button>
                            <button onClick={() => scrollTo(contactRef)} className="block">{t("navbar.contact")}</button>
                        </div>
                    )}
                </nav>

                <section id="hero" ref={homeRef} className="flex items-center text-white h-screen pt-[100px] max-w-[1440px] mx-auto px-[20px] md:px-2 lg:px-3 2xl:px-0">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl  font-semibold">  <Trans i18nKey="hero.title" /> </h1>
                        <p className="text-[20px] md:text-[25px]"> <Trans i18nKey="hero.description" /> </p>
                        <button className="hover:border-2 hover:border-[#0349A7] bg-[#0349A7] hover:bg-white hover:text-[#0349A7] text-white w-[147px] h-[52px] rounded-xl text-lg">{t("hero.cta")}</button>
                    </div>
                </section>

            </header>

            <main className=" ">

                <section id="partners" className="  my-12">
                    <Partners />
                </section>

                <section ref={aboutRef} id="AboutUs" className=" bg-gradient-to-b from-[#0348A408] to-white flex">
                    <div className="max-w-[1440px]  mx-auto space-y-[40px] md:space-y-[120px] my-[80px] px-[20px] md:px-2 lg:px-3 2xl:px-0">
                        <div className="space-y-4 items-center justify-center flex flex-col text-center">
                            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                                <img src="/logo/aboutUs.png" className="w-[24px]" />
                                <h1 className="text-2xl"> {t("aboutSection.badge")}</h1>
                            </button>
                            <h1 className=" font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">{t("aboutSection.title")}</h1>
                            <p className="text-xl w-[335px] md:w-[600px] lg:w-[800px]">{t("aboutSection.subtitle")}</p>
                        </div>

                        <div className="flex flex-col xl:flex-row items-center justify-center gap-[49px]">

                            <img src="/image/AboutUs.jpg" className="h-[335px] md:h-[687px] w-[335px] md:w-[680px] lg:w-[600px] 2xl:w-[690px] rounded-2xl " />

                            <div className="space-y-[20px]">

                                <div className="space-y-[12px]">
                                    <h1 className="font-medium text-center text-4xl">
                                        {t("aboutSection.whyTitle")}
                                    </h1>

                                    <p className="text-lg text-center w-[335px] sm:w-[360px] md:w-[580px] 2xl:w-[693px]"> {t("aboutSection.whyDescription")}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[50px] justify-items-center md:justify-items-start">

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]  w-[260px]">
                                            <h1 className="font-medium text-xl">
                                                {t("aboutSection.features.0.title")}
                                            </h1>
                                            <p className="text-lg">
                                                {t("aboutSection.features.0.body")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                                        <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services4.png" className="w-[32px] h-[27px]" />

                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">
                                                <Trans i18nKey="aboutSection.features.1.title">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </h1>
                                            <p className="text-lg">
                                                <Trans i18nKey="aboutSection.features.1.body">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                                        <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services2.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">
                                                <Trans i18nKey="aboutSection.features.2.title">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </h1>
                                            <p className="text-lg">
                                                <Trans i18nKey="aboutSection.features.2.body">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                                        <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services3.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">
                                                <Trans i18nKey="aboutSection.features.3.title">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </h1>
                                            <p className="text-lg">
                                                <Trans i18nKey="aboutSection.features.3.body">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section ref={servicesRef} id="Services" className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[70px] my-[20px] ">
                    <div className="space-y-4 items-center justify-center flex flex-col text-center">
                        <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[184px] md:w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
                            <i className="bi bi-gear text-2xl"></i>
                            <h1 className="text-2xl">{t("servicesSection.badge")}</h1>
                        </button>
                        <p className="font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">{t("servicesSection.description")} </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                        {cardsData.map((card, index) => (
                            <div key={index} className="relative flex flex-col h-[175px] w-[345px] md:h-[285px] p-[16px] md:p-6 rounded-2xl border border-white shadow-xl shadow-gray-200   space-y-1 hover:bg-[#F3F8FF]">
                                <div className="flex gap-4 items-center">
                                    <span className="flex items-center shrink-0 justify-center w-[60px] h-[60px] rounded-full bg-[#0349A7]">
                                        <img src={card.icon} className="w-[34px]" />
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

                <section ref={portfolioRef} id="Porfolio" className=" bg-gradient-to-b from-[#0348A408] to-white  mt-[66px] flex items-center">
                    <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center my-[20px] md:my-[70px] space-y-2 md:space-y-4 px-[20px] md:px-2 lg:px-3 2xl:px-0">
                        <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
                            <img src="/logo/uil.png" className="w-[20px]" />
                            <h1 className="text-2xl">{t("portfolioSection.badge")}</h1>
                        </button>
                        <h1 className="font-semibold text-[24px] md:text-4xl  text-center  md:w-[440px]">{t("portfolioSection.title")}</h1>
                        <p className=" text-center text-[16px] md:text-xl w-[335px] md:w-[700px]">{t("portfolioSection.description")}</p>
                        <button className="rounded-lg bg-[#0349A7] hover:bg-white hover:border-2 hover:border-[#0349A7] hover:text-[#0349A7] text-white flex gap-3 w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center">
                            <h1 className="text-[16px]">{t("portfolioSection.cta")}</h1>
                        </button>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/LogistX.png" className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">{t("portfolioSection.projects.0.title")}</h1>
                                        <p className="text-[#8D8D8D] text-base">{t("portfolioSection.projects.0.body")}</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden ">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/BepulGPS.png" className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">{t("portfolioSection.projects.1.title")}</h1>
                                        <p className="text-[#8D8D8D] text-base">{t("portfolioSection.projects.1.body")}</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                            <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden hidden lg:block">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/Xmed.png" className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-2xl">{t("portfolioSection.projects.2.title")}</h1>
                                        <p className="text-[#8D8D8D] text-base">{t("portfolioSection.projects.2.body")}</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section ref={certificatesRef} id="Certificats" className="max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-3.5 md:space-y-5 my-[70px] px-[20px] md:px-2 lg:px-3 2xl:px-0">
                    <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px]  h-[50px] md:h-[55px] text-center justify-center items-center">
                        <img src="/logo/phcertificate.png" className="w-[20px]" />
                        <h1 className="text-2xl">{t("certificateSection.badge")}</h1>
                    </button>
                    <h1 className=" font-bold text-[24px] md:text-4xl text-center">{t("certificateSection.title")}</h1>
                    <p className="text-center text-[16px] md:text-xl w-[295px] md:w-[690px] ">{t("certificateSection.description")}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {certificates.map((card) => (
                            <div key={card.id}>
                                <div onClick={() => setOpenId(card.id)} className="cursor-pointer shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[335px] h-[320px] xl:w-[415px] xl:h-[370px] hover:bg-[#F8FBFF]" >
                                    <div className="space-y-[20px] md:space-y-5">
                                        <div className="flex justify-between">
                                            <div className="bg-[#e0ecfb] w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] flex items-center justify-center rounded-xl">
                                                <img src={card.icon} className="w-[24px] h-[28px]" />
                                            </div>
                                            <div className="flex items-center justify-center rounded-full px-3 bg-[#0853C4] text-white text-sm w-[68px] xl:w-[67px] h-[28px] xl:h-[35px]">
                                                {t(card.badge)}
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className="font-medium text-[20px] xl:text-[28px]">
                                                {t(card.title)}
                                            </h1>
                                            <p className="text-[16px] xl:text-lg text-[#8D8D8D]">
                                                {t(card.subtitle)}
                                            </p>
                                        </div>

                                        <p className="font-dmsans font-light italic text-[16px] xl:text-[22px]">
                                            {t(card.focus)}
                                        </p>

                                        <div className="flex gap-2.5">
                                            <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                            <p className="text-[#8D8D8D] text-[16px] xl:text-xl">{t(card.status)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal */}
                                {openId === card.id && (
                                    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="bg-white p-2 md:p-4 rounded-xl relative flex flex-col">
                                            <div className="flex justify-between items-center mb-2 px-4">
                                                <h1 className="font-bold text-xl">{card.modalTitle}</h1>
                                                <button
                                                    onClick={() => setOpenId(null)}
                                                    className="text-sm hover:text-gray-500 border border-black hover:border-gray-500 py-0.5 rounded-full px-1.5 flex items-center justify-center"
                                                >
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>

                                            <img
                                                src={card.modalImage}
                                                className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] object-contain rounded-lg"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </section>

                <section ref={contactRef} id="Contact" className="bg-gradient-to-b from-[#0348A408] to-white flex flex-col justify-center items-center">
                    <div className="max-w-[1440px] mx-auto items-center justify-center flex flex-col space-y-7   my-[70px] px-[20px] md:px-2 lg:px-3 2xl:px-0 ">
                        <div className="space-y-2 md:space-y-4 items-center justify-center flex flex-col text-center">
                            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[184px] md:w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
                                <img src="/logo/contact.png" className="w-[20px]" />
                                <h1 className="text-2xl">{t("contactSection.badge")}</h1>
                            </button>
                            <h1 className="font-semibold text-[24px] md:text-4xl">{t("contactSection.title")}</h1>
                            <p className="text-[16px] md:text-xl w-[295px] md:w-[690px]">{t("contactSection.description")}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-[335px] md:w-[710px] bg-white rounded-[24px] p-[15px] md:p-[36px] shadow-2xl shadow-gray-200 space-y-6">
                            <div className="flex flex-col gap-3 md:flex-row">
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="name">
                                        {t("contactSection.form.nameLabel")}
                                    </label>
                                    <input type="text" id="name" name="name" placeholder={t("contactSection.form.namePlaceholder")} required className="w-[288px] h-[48px] md:h-[54px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>

                                <div>
                                    <label className="block text-xl mb-2" htmlFor="email">
                                        {t("contactSection.form.emailLabel")}
                                    </label>
                                    <input type="email" id="email" name="email" placeholder="example@mail.com" required className="w-[288px] h-[48px] md:h-[54px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xl mb-2" htmlFor="company">
                                    {t("contactSection.form.companyLabel")}
                                </label>
                                <input type="text" id="company" name="company" placeholder={t("contactSection.form.companyPlaceholder")} className="w-[303px] md:w-[638px] h-[48px] md:h-[54px]  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>

                            <div>
                                <label className="block text-xl mb-2" htmlFor="message">
                                    {t("contactSection.form.messageLabel")}
                                </label>
                                <textarea id="message" name="message" placeholder={t("contactSection.form.messagePlaceholder")} rows="4" required className="w-[303px] md:w-[638px] h-[242px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" ></textarea>
                            </div>

                            <button type="submit" className="w-[303px] md:w-[638px] h-[52px] bg-[#0349A7] border-2 border-[#0349A7] hover:text-[#0349A7] text-white py-2 px-4 rounded-lg hover:bg-white transition-colors" >
                                {t("contactSection.submit")}
                            </button>
                        </form>
                    </div>
                </section>

            </main>

            <footer className="bg-[rgb(0,17,40)]  text-white">
                <div className="max-w-[1440px] mx-auto flex flex-col py-[70px] space-y-[80px]  px-[20px] md:px-4 lg:px-3 2xl:px-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between md:items-start gap-3 space-y-6">
                        <div className="flex flex-col space-y-[19px]">
                            <img src="/logo/tenzorsoft-logo.png" className="w-[94px] h-[60px]" />
                            <p className="text-xl md:w-[270px] lg:w-[290px] xl:w-[341px]">{t("footer.tagline")}</p>
                            <div className="flex gap-[17px]">

                                <a href="https://www.youtube.com/@TENZORSOFT-ITCOMPANY" target="_blank" rel="noopener noreferrer" >
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/Facebook.png" className="w-[10px]" />
                                    </button>
                                </a>

                                <a href="https://www.instagram.com/tenzor_soft/" target="_blank" rel="noopener noreferrer" >
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/instagram.png" className="w-[22px]" />
                                    </button>
                                </a>

                                <a href="https://t.me/tenzor_soft" target="_blank" rel="noopener noreferrer" >
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/telegram.png" className="w-[22px]" />
                                    </button>
                                </a>

                                <a href="https://www.linkedin.com/in/tenzor-soft-396297329/" target="_blank" rel="noopener noreferrer">
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/linkedin.png" className="w-[22px]" />
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col space-y-[16px] text-[#8D8D8D] ">
                            <h1 className="text-xl font-semibold text-white">
                                {t("footer.columns.template.title")}
                            </h1>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(homeRef)}>
                              {t("footer.columns.template.home")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(aboutRef)} >
                                {t("footer.columns.template.about")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(servicesRef)} >
                                {t("footer.columns.template.services")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(portfolioRef)} >
                                {t("footer.columns.template.portfolio")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(certificatesRef)} >
                                {t("footer.columns.template.certificates")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(contactRef)} >
                                {t("footer.columns.template.contact")}
                            </a>
                        </div>

                        <div className="hidden lg:flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">{t("footer.columns.services.title")}</h1>
                            <a href="" className="hover:text-white">{t("footer.columns.services.software")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.1cProduction")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.bitrix")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.antivirus")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.automation")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.biometric")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.itservices")}</a>
                        </div>

                        <div className="hidden lg:flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">
                                {t("footer.columns.contact.title")}
                            </h1>
                            <p className="hover:text-white">Tashkent city Mirabad <br /> district st. Magtymguly</p>
                            <span className="hover:text-white">+998 95 460 10 10</span>
                            <p className="hover:text-white">info@tenzorsoft.com</p>
                        </div>

                        <div className="space-y-3">
                            {/* фак */}
                            <div className="block lg:hidden w-full">
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 shadow-sm">
                                            <button className="text-left px-1 py-3 flex justify-between items-center w-full  md:w-[420px]" onClick={() => toggleIndex(index)} >
                                                <span className="font-medium">{faq.question}</span>
                                                <span className="text-xl">
                                                    {openIndex === index
                                                        ? <i className="bi bi-chevron-up"></i>
                                                        : <i className="bi bi-chevron-down"></i>}
                                                </span>
                                            </button>

                                            {openIndex === index && (
                                                <div className="px-4 pb-4 pt-2 space-y-2">
                                                    {faq.answers.map((ans, i) => (
                                                        <button key={i} onClick={() => {
                                                            navigate(ans?.link || "/");
                                                            ans.ref?.current?.scrollIntoView({ behavior: "smooth" });
                                                        }} className="flex flex-col text-white py-2 text-start">
                                                            {ans.text}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* сабскрай */}
                            <div className="flex flex-col space-y-[16px] text-[#8D8D8D]">
                                <h1 className="text-xl font-semibold text-white">
                                    {t("footer.subscribeHeading")}
                                </h1>
                                <input type="text" id="name" placeholder={t("footer.subscribePlaceholder")} className="md:w-[420px] lg:w-[200px] xl:w-[320px] h-[48px] px-4 py-2 border border-[#8D8D8D] rounded-lg" />
                                <button className="md:w-[420px] lg:w-[200px] xl:w-[320px] h-[52px] hover:bg-white hover:text-[#0349A7] bg-[#0349A7] hover:border-2 hover:border-[#0349A7] rounded-[12px] font-medium text-white text-lg">
                                    {t("footer.subscribeCta")}
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="space-y-3 md:space-y-[40px] text-[#8D8D8D]">
                        <hr className="border-t border-[#8D8D8D80]" />
                        <div className="flex flex-col justify-between md:flex-row space-y-4 md:space-y-0 text-center">
                            <p className="">{t("footer.rights")}</p>

                        </div>
                    </div>
                </div>

            </footer>

        </div>
    );
}

export default all;
