import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Partners from "./partners";
import { useNavigate } from "react-router-dom";



function all() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [openId, setOpenId] = useState(null);

    // кождая карточка сертификата 
    const certificates = [
        {
            id: 0,
            icon: "/logo/certificate.png",
            badge: "certificateSection.cards.0.year",
            title: "certificateSection.cards.0.title",
            subtitle: "certificateSection.cards.0.subtitle",
            focus: "certificateSection.cards.0.focus",
            status: "certificateSection.cards.0.status",
            modalImage: "/image/tenzor.jpg",
            modalTitle: "IT Park",
        },
        // {
        //     id: 1,
        //     icon: "/logo/certificate.png",
        //     badge: "certificateSection.cards.1.year",
        //     title: "certificateSection.cards.1.title",
        //     subtitle: "certificateSection.cards.1.subtitle",
        //     focus: "certificateSection.cards.1.focus",
        //     status: "certificateSection.cards.1.status",
        //     modalImage: "/image//itparkt.jpg",
        //     modalTitle: "IT Park",
        // },
        // {
        //     id: 2,
        //     icon: "/logo/certificate.png",
        //     badge: "certificateSection.cards.2.year",
        //     title: "certificateSection.cards.2.title",
        //     subtitle: "certificateSection.cards.2.subtitle",
        //     focus: "certificateSection.cards.2.focus",
        //     status: "certificateSection.cards.2.status",
        //     modalImage: "/image/frontend.jpeg",
        //     modalTitle: "Frontend Bootcamp",
        // },
    ];

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

    const { homeRef, aboutRef, certificatesRef, servicesRef, portfolioRef } = useOutletContext();


    return (
        <div>

            <header className="relative bg-[url('/baground/Hopebg.svg')] bg-cover bg-center h-screen ">
                <section id="hero" ref={homeRef} className="flex items-center text-white h-screen pt-[100px] max-w-[1440px] mx-auto px-[20px] md:px-2 lg:px-3 2xl:px-0">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl  font-semibold">  <Trans i18nKey="hero.title" /> </h1>
                        <p className="text-[20px] md:text-[25px]"> <Trans i18nKey="hero.description" /> </p>
                        <button className="hover:border-2 hover:border-[#006DFF] bg-[#006DFF] hover:bg-white hover:text-[#006DFF] text-white w-[147px] h-[52px] rounded-xl text-lg">{t("hero.cta")}</button>
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

                            <img src="/image/AboutUs.png" className="h-[335px] md:h-[687px] w-[335px] md:w-[680px] lg:w-[600px] 2xl:w-[690px] rounded-2xl " />

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
                                    <span className="flex items-center shrink-0 justify-center w-[60px] h-[60px] rounded-full bg-[#006DFF]">
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
                        <Link to="/portfolio" className="rounded-[12px] bg-[#006DFF] hover:bg-white hover:border-2 hover:border-[#5492E4] hover:text-[#5492E4] text-white flex gap-3 w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                            {t("portfolioSection.cta")}
                        </Link>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                            <a href="https://logistx.uz" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                                    <div className="overflow-hidden rounded-xl">
                                        <img src="/image/LogistX.png" className="w-[591px] sm:w-[681px] md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="flex justify-between items-center m-2">
                                        <div className="flex flex-col items-start space-y-2">
                                            <h1 className="font-bold text-2xl">
                                                {t("portfolioSection.projects.0.title")}
                                            </h1>
                                            <p className="text-[#8D8D8D] text-base">
                                                {t("portfolioSection.projects.0.body")}
                                            </p>
                                        </div>
                                        <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                                    </div>
                                </div>
                            </a>

                            <a href="https://bepulgps.uz" target="_blank" rel="noopener noreferrer" className="block">
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
                            </a>

                            <a href="https://xmed.uz/" target="_blank" rel="noopener noreferrer" className="block">
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
                            </a>
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
                    <div className="flex items-center justify-center">
                        {/*
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"> */}
                        {certificates.map((card) => (
                            <div key={card.id}>
                                <div onClick={() => setOpenId(card.id)} className="cursor-pointer shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[335px] h-[320px] xl:w-[415px] xl:h-[370px] hover:bg-[#F8FBFF]" >
                                    <div className="space-y-[20px] md:space-y-5">
                                        <div className="flex justify-between">
                                            <div className="bg-[#e0ecfb] w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] flex items-center justify-center rounded-xl">
                                                <img src={card.icon} className="w-[24px] h-[28px]" />
                                            </div>
                                            <div className="flex items-center justify-center rounded-full px-3 bg-[#006DFF] text-white text-sm w-[68px] xl:w-[67px] h-[28px] xl:h-[35px]">
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
                                    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="p-2 md:p-4 rounded-xl relative flex flex-col">
                                            <div className="flex justify-end items-end mb-2">

                                                <button onClick={() => setOpenId(null)} className="text-xl text-white hover:text-gray-500 border border-white hover:border-gray-500 py-0.5 rounded-full px-1.5 flex items-center justify-center" >
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>

                                            <img
                                                src={card.modalImage}
                                                className="w-[300px] md:w-[800px] h-[200px] md:h-[600px] object-contain rounded-lg"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </section>

            </main>

        </div>
    );
}

export default all;
