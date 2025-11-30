import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Partners from "./partners";
import { useNavigate } from "react-router-dom";
import { Certificates } from "./Certificates";

const BOT_TOKEN = "8529319150:AAH7QpRm1DBHoL9V8i6d69X3V9UNqsR7tAA";
const CHAT_ID = "-1003451614735";

function all() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [openId, setOpenId] = useState(null);



    //  отправка к телеграму 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const company = e.target.company.value;
        const message = e.target.message.value;
        const file = e.target.file.files[0]; // <-- файл

        const text = `
        📩 *Yangi xabar!*
        👤 *Ism:* ${name}
        📧 *Email:* ${email}
        🏢 *Kompaniya:* ${company}
        💬 *Xabar:* ${message}
        `;

        try {
            const formData = new FormData();
            formData.append("chat_id", CHAT_ID);
            formData.append("caption", text);
            formData.append("parse_mode", "Markdown");

            if (file) {
                formData.append("document", file); // <-- отправляем любой файл
            }

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
                method: "POST",
                body: formData,
            });

            alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
            e.target.reset();

        } catch (error) {
            console.error("Xatolik:", error);
            alert("❌ Xabar yuborishda xatolik yuz berdi!");
        }
    };

    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };


    // сервис сексция 
    const cardsData = [
        {
            title: "Карточка 1",
            icon: "/logo/Group.png",
            description: t("servicesSection.cards.0.title"),
            cardText: t("servicesSection.cards.0.body"),
        },
        {
            title: "Карточка 2",
            icon: "/logo/hugeicons.png",
            description: t("servicesSection.cards.1.title"),
            cardText: t("servicesSection.cards.1.body"),
        },
        {
            title: "Карточка 3",
            icon: "/logo/material-symbols_computer-outline-rounded.png",
            description: t("servicesSection.cards.2.title"),
            cardText: t("servicesSection.cards.2.body"),
        },
        {
            title: "Карточка 4",
            icon: "/logo/file-c.png",
            description: t("servicesSection.cards.3.title"),
            cardText: t("servicesSection.cards.3.body"),
        },
        {
            title: "Карточка 5",
            icon: "/logo/system-code.png",
            description: t("servicesSection.cards.4.title"),
            cardText: t("servicesSection.cards.4.body"),
        },
        {
            title: "Карточка 6",
            icon: "/logo/outline.png",
            description: t("servicesSection.cards.5.title"),
            cardText: t("servicesSection.cards.5.body"),
        },
        {
            title: "Карточка 7",
            icon: "/logo/tabler.png",
            description: t("servicesSection.cards.6.title"),
            cardText: t("servicesSection.cards.6.body"),
        },
        {
            title: "Карточка 8",
            icon: "/logo/monitor-mobile.png",
            description: t("servicesSection.cards.7.title"),
            cardText: t("servicesSection.cards.7.body"),
        },
    ];

    const { homeRef, aboutRef, certificatesRef, servicesRef, contactRef, portfolioRef } = useOutletContext();

    return (
        <div>

            <section id="hero" ref={homeRef} className="bg-[#163133] h-screen">

                <div className="relative flex flex-col md:flex-row justify-center md:justify-between space-y-9 items-start md:items-center h-full pt-[100px] max-w-[1440px] mx-auto px-[20px] md:px-2 lg:px-3 2xl:px-0 text-white bg-[url('/image/HopeImg.webp')] bg-cover bg-center bg-no-repeat md:bg-none before:absolute before:inset-0 before:bg-black/60 md:before:bg-transparent  before:z-0">
                    <div className="relative z-10 space-y-[16px] md:space-y-[36px] flex flex-col justify-center items-start">
                        <h1 className="text-[35px] md:[42px] xl:text-[49px] font-semibold w-[359px] md:w-[560px] xl:w-[690px]  leading-[1.1]">{t("hero.title")}</h1>
                        <p className="text-[20px] md:text-[24px] w-[355px] md:w-[610px] xl:w-[710px] leading-[1.2]"> {t("hero.description")}</p>
                        <button className="hover:border-2 hover:border-[#FAD28C] bg-[#FAD28C] hover:bg-white hover:text-[#FAD28C] text-black w-[147px] h-[52px] rounded-full text-[20px]">
                            {t("hero.cta")}
                        </button>
                        <div className="border-t border-[#FAD28C]/15 w-[335px] md:w-[600px] xl:w-[700px]"></div>

                        <div className="flex w-[350px] md:w-[400px] gap-[36px] text-[#FAD28C]">
                            <div className="space-y-[16px] flex flex-col justify-center items-center">
                                <p className="font-semibold md:text-[38px] text-[34px]">1000+</p>
                                <p className="md:text-[20px] text-[15px] leading-[1.1]">{t("hero.clients")}</p>
                            </div>

                            <div className="space-y-[16px] flex flex-col justify-center items-center">
                                <p className="font-semibold md:text-[38px] text-[34px]">99.9%</p>
                                <p className="md:text-[20px] text-[15px] leading-[1.1]">{t("hero.uptime")}</p>
                            </div>

                            <div className="space-y-[16px] flex flex-col justify-center items-center">
                                <p className="font-semibold xl:text-[38px] text-[34px]">24/7</p>
                                <p className="md:text-[20px] text-[15px] leading-[1.1]">{t("hero.support")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 md:relative md:w-[512px] md:h-[700px] rounded-2xl md:overflow-visible">

                        <img src="/image/HopeImg.webp" className="hidden md:block w-full h-full object-cover rounded-4xl" />

                        <div className="md:absolute md:left-[-60px] bottom-[60px] bg-white/5 backdrop-blur-md w-[166px] md:w-[214px] h-[147px] md:h-[222px] border border-[#E8E8E880] text-white p-4 rounded-xl flex items-center gap-3">
                            <div className="flex flex-col justify-between items-start h-full">
                                <div className="flex -space-x-2">
                                    <img src="/logo/part.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="/logo/parf.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="/logo/paro.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                                <div className="space-y-5">
                                    <p className="text-[31px] md:text-[49px] font-semibold">150+</p>
                                    <p className="md:text-[18px] w-[148px] font-medium">Business partners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <main className=" ">

                <section id="partners" className=" ">
                    <Partners />
                </section>

                <section ref={aboutRef} id="AboutUs" className="max-w-[1440px]  mx-auto space-y-[40px] my-[80px] px-[20px] md:px-2 lg:px-3 2xl:px-0 ">
                    <div className="space-y-4 items-center justify-center flex flex-col text-center">
                        <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                            <li className="text-2xl  ml-4 "> {t("aboutSection.badge")}</li>
                        </button>

                        <h1 className=" font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">{t("aboutSection.title")}</h1>
                        <p className="text-xl w-[335px] md:w-[600px] lg:w-[800px]">{t("aboutSection.subtitle")}</p>
                        {/* <Link to="/aboutus" className="rounded-full bg-[#FAD28C] hover:bg-white hover:border-2 hover:border-[#FAD28C] hover:text-[#FAD28C]  flex gap-3 w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                            {t("portfolioSection.cta")}
                        </Link> */}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] xl:gap-[49px]">

                        <div className="flex flex-col space-y-[30px] md:space-y-0 md:justify-between  md:h-[550px] w-[270px] md:w-[220px] xl:w-[260px]">
                            <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="hover:bg-[#fcf3e2] hover:rounded-2xl">
                                    <img src="/icn/eosicn.png" className="w-[54px] h-[54px]" />
                                </div>
                                <div className="space-y-[8px] ">
                                    <h1 className="font-medium text-xl">
                                        {t("aboutSection.features.0.title")}
                                    </h1>
                                    <p className="text-lg">
                                        {t("aboutSection.features.0.body")}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left w-[270px]  md:w-[220px] xl:w-[260px]">
                                <div className="hover:bg-[#fcf3e2] hover:rounded-2xl">
                                    <img src="/icn/monitorMobi.png" className="w-[54px] h-[54px]" />
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
                        </div>

                        <div className="overflow-hidden rounded-4xl group">
                            <img src="/image/AboutImg.webp" className="h-[335px] md:h-[587px] w-[335px] md:w-[444px] rounded-2xl transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="flex flex-col space-y-[30px] md:space-y-0 md:justify-between md:h-[550px]">
                            <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left   w-[270px] md:w-[220px] xl:w-[260px]">
                                <img src="/icn/calendarTime.png" className="w-[54px] h-[54px]" />
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

                            <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[270px] md:w-[220px] xl:w-[260px]">
                                <img src="/icn/mobileBrowser.png" className="w-[54px] h-[54px]" />
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
                </section>

                <section ref={servicesRef} id="Services" className=" bg-[#F2F2F2] py-2">
                    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[70px] my-[40px]  ">
                        <div className="space-y-4 items-center justify-center flex flex-col text-center ">
                            <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                                <li className="text-2xl  ml-4 "> {t("servicesSection.badge")}</li>
                            </button>
                            <p className="font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">{t("servicesSection.description")} </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                            {cardsData.map((card, index) => (
                                <div key={index} className="relative flex flex-col h-[175px] w-[345px] md:h-[285px] p-[16px] md:p-6 rounded-2xl bg-white border border-white shadow-xl shadow-gray-200 space-y-1 hover:bg-[#F3F8FF]" >
                                    <div className="absolute -left-[5px] top-[23px] w-[5px] h-[60px] bg-[#579094] rounded-l-2xl"></div>
                                    <div className="flex gap-4 items-center">
                                        <span className="flex items-center shrink-0 justify-center w-[60px] h-[60px] rounded-full bg-[#579094]">
                                            <img src={card.icon} className="w-[34px]" />
                                        </span>
                                        <div className="font-semibold text-[20px] text-[#1B2845] block lg:hidden"> {card.description}</div>
                                    </div>
                                    <h1 className="mt-2 font-semibold text-2xl text-[#1B2845] hidden lg:block">{card.description}</h1>
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
                                    <p className="text-[16px] md:text-lg text-[#8D8D8D]"> {card.cardText}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <section ref={portfolioRef} id="Porfolio" className="flex items-center">
                    <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center my-[20px] md:my-[70px] space-y-2 md:space-y-4 px-[10px] md:px-2 lg:px-3 2xl:px-0">
                        <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                            <li className="text-2xl  ml-4 ">{t("portfolioSection.badge")}</li>
                        </button>
                        <h1 className="font-semibold text-[24px] md:text-4xl  text-center  md:w-[440px]">{t("portfolioSection.title")}</h1>
                        <p className=" text-center text-[16px] md:text-xl w-[335px] md:w-[700px]">{t("portfolioSection.description")}</p>
                        {/* <Link to="/portfolio" className="rounded-full bg-[#FAD28C] hover:bg-white hover:border-2 hover:border-[#FAD28C] hover:text-[#FAD28C] flex w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                            {t("portfolioSection.cta")}
                        </Link> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            <div className="group w-[335px] xl:w-[467px] h-[614px]  xl:h-[858px] border border-gray-50 shadow-lg hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/portfolioone.png" className="w-[335px] xl:w-[427px] h-[480px] xl:h-[726px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-[24px]">
                                            {t("portfolioSection.projects.0.title")}
                                        </h1>
                                        <p className="text-[#D7D7D7] text-[20px]">
                                            Website
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                            <div className="group w-[335px] xl:w-[467px] h-[614px]  xl:h-[858px] border border-gray-50 shadow-lg hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/portfoliotwo.png" className="w-[427px] h-[480px] xl:h-[726px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-[24px]">
                                            {t("portfolioSection.projects.0.title")}
                                        </h1>
                                        <p className="text-[#D7D7D7] text-[20px]">
                                            Website
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                            <div className="group w-[335px] xl:w-[467px] h-[614px] xl:h-[858px] border border-gray-50 shadow-lg hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                                <div className="overflow-hidden rounded-xl">
                                    <img src="/image/portfoliothre.png" className="w-[427px] h-[480px] xl:h-[726px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex justify-between items-center m-2">
                                    <div className="flex flex-col items-start space-y-2">
                                        <h1 className="font-bold text-[24px]">
                                            {t("portfolioSection.projects.0.title")}
                                        </h1>
                                        <p className="text-[#D7D7D7] text-[20px]">
                                            Website
                                        </p>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section ref={contactRef} id="Contact" className="bg-[#F2F2F2] h-full flex flex-col justify-center items-center">
                    <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center justify-center md:justify-between md:w-full py-6 px-[4] space-y-[20px]">
                        <div className="flex flex-col justify-between space-y-[20px] h-full ">
                            <div className="space-y-[16px] flex flex-col items-center md:items-start">
                                <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                                    <li className="text-2xl  ml-4 ">{t("contactSection.badge")}</li>
                                </button>
                                <h1 className="font-semibold text-[24px] w-[350px] md:w-[650px] md:text-[49px] leading-[1.1] text-center md:text-start">  {t("contactSection.title")}</h1>
                                <p className="text-[16px] md:text-xl w-[295px] md:w-[660px] text-center md:text-start">{t("contactSection.description")}</p>
                            </div>

                            <div className="space-y-[16px] flex flex-col items-start justify-start">
                                <div className="bg-white w-[345px] md:w-[655px] h-[73px] rounded-[24px] flex justify-start items-center gap-[20px] px-4">
                                    <img src="/icn/location.png" className="w-[32px]" />
                                    <p className="text-[#8D8D8D] font-semibold text-[16px] md:text-[26px]">Tashkent city Mirabad district st. Magtymguly</p>
                                </div>
                                <div className="bg-white  w-[345px] md:w-[655px] h-[73px] rounded-[24px] flex justify-start items-center gap-[20px] px-4">
                                    <img src="/icn/phone.png" className="w-[32px]" />
                                    <p className="text-[#8D8D8D] font-semibold text-[16px] md:text-[26px]">+998(75) 556-56-56 +998(75) 556-56-56</p>
                                </div>
                                <div className="bg-white  w-[345px] md:w-[655px] h-[73px] rounded-[24px] flex justify-start items-center gap-[20px] px-4">
                                    <img src="/icn/email.png" className="w-[32px]" />
                                    <p className="text-[#8D8D8D] font-semibold text-[16px] md:text-[26px]">contact@techsolution.com</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="w-[335px] md:w-[700px] h-[620px] bg-white rounded-[24px] p-[20px] md:p-[36px] shadow-2xl shadow-gray-200 space-y-3">
                            <div className="flex flex-col gap-3 md:flex-row">
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="name">
                                        {t("contactSection.form.nameLabel")}
                                    </label>
                                    <input type="text" id="name" name="name" placeholder={t("contactSection.form.namePlaceholder")} required className="w-[303px] md:w-[311px] h-[48px] md:h-[45px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>

                                <div>
                                    <label className="block text-xl mb-2" htmlFor="email">
                                        {t("contactSection.form.emailLabel")}
                                    </label>
                                    <input type="email" id="email" name="email" placeholder="example@mail.com" required className="w-[303px] md:w-[311px] h-[48px] md:h-[45px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xl mb-2" htmlFor="company">
                                    {t("contactSection.form.companyLabel")}
                                </label>
                                <input type="text" id="company" name="company" placeholder={t("contactSection.form.companyPlaceholder")} className="w-[303px] md:w-[638px] h-[48px] md:h-[45px]  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>

                            <div>
                                <label className="block text-xl mb-2" htmlFor="message">
                                    {t("contactSection.form.messageLabel")}
                                </label>
                                <textarea id="message" name="message" placeholder={t("contactSection.form.messagePlaceholder")} rows="4" required className="w-[303px] md:w-[638px] h-[200px] md:h-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" ></textarea>
                            </div>

                            <div className="w-full">
                                <label className="flex items-center gap-3 border border-gray-300 p-2 rounded-lg cursor-pointer text-gray-700">
                                    <img src="/icn/upload.png" alt="logo" className="w-6 h-6" />
                                    <span className="truncate"> {fileName || "Выбрать файл"} </span>
                                    <input type="file" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>


                            <button type="submit" className="w-[303px] md:w-[638px] h-[52px] bg-[#579094] border-2 border-[#579094] hover:text-[#579094] text-white py-2 px-4 rounded-full hover:bg-white transition-colors" >
                                {t("contactSection.submit")}
                            </button>
                        </form>
                    </div>
                </section>

                <section ref={certificatesRef} id="Certificats" className="  space-y-[60px] md:space-y-5 my-[70px] px-[20px] md:px-2 lg:px-3 2xl:px-0">
                    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center  space-y-3.5 mb-[60px]">
                        <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                            <li className="text-2xl  ml-4 ">{t("certificateSection.badge")}</li>
                        </button>
                        <h1 className=" font-bold text-[24px] md:text-4xl text-center">{t("certificateSection.title")}</h1>
                        <p className="text-center text-[16px] md:text-xl w-[295px] md:w-[690px] ">{t("certificateSection.description")}</p>
                    </div>

                    <div>
                        <Certificates />
                    </div>
                </section>

            </main>
        </div>
    );
}

export default all;
