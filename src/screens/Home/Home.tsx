import { useState } from "react";

const projects = [
    {
        id: "inti",
        image: "img/Inti.png",
        //image: "https://c.animaapp.com/1ISTNUBV/img/inti@2x.png",
        imageAlt: "Inti",
        year: "2026 - Presente",
        title: "ROBOT SOCIAL PARA EL ACOMPAÑAMIENTO HOSPITALARIO",
        role: "Investigadora Principal - Robótica, IA",
        description:
            "Proporciona interacción multimodal mediante el habla, movimiento y expresiones facial. Integración con IA para conversaciones",
        cardClass: "w-[393px]",
        imageClass:
            "absolute top-1 left-0 w-[373px] h-[361px] aspect-[1.03]",
        backgroundClass:
            "absolute top-[310px] left-[13px] w-[380px] h-[253px]",
        borderClass:
            "absolute top-0 left-[13px] w-[380px] h-[563px]",
        contentClass:
            "left-[25px] h-[198px] absolute top-[314px] w-[371px]",
        buttonClass: "absolute top-[512px] left-[246px]",
        roleClass: "ml-[0.8px] w-[338.21px] h-[22px] mt-[23px]",
        descriptionClass:
            "ml-[0.8px] w-[350.1px] h-[88px] mt-[13px]",
    },
    {
        id: "dotsense",
        image: "https://c.animaapp.com/1ISTNUBv/img/dotsense-1@2x.png",
        imageAlt: "Dotsense",
        year: "2025 - Presente",
        title: "DISPLAY BRAILLE REFRESCABLE",
        role: "Investigadora - Diseño 3D, Procesamiento",
        description:
            "Display Braille refrescable que realiza conversión de texto a braille. Soporta archivos .pdf, .png, .jpg",
        cardClass: "w-[380px] ml-11",
        imageClass:
            "absolute top-[19px] left-0 w-[380px] h-[295px] aspect-[1.29]",
        backgroundClass:
            "absolute top-[310px] left-0 w-[380px] h-[253px]",
        borderClass:
            "absolute top-0 left-0 w-[380px] h-[563px]",
        contentClass:
            "left-3 h-44 absolute top-[314px] w-[371px]",
        buttonClass: "absolute top-[512px] left-[233px]",
        roleClass: "ml-px w-[350px] h-[22px] mt-px",
        descriptionClass:
            "ml-[0.8px] w-[350.1px] h-[66px] mt-[35px]",
    },
    {
        id: "airy",
        image: "https://c.animaapp.com/1ISTNUBv/img/airy@2x.png",
        imageAlt: "Airy",
        year: "2025",
        title: "INTERFAZ NASAL PARA VENTILACIÓN MECÁNICA NO INVASIVA",
        role: "Investigadora Principal - Diseño e Impresión 3D",
        description:
            "Interfaces Nasales en tallas S, M, L para pacientes pediátricos.",
        cardClass: "w-[380px] ml-[38px]",
        imageClass:
            "absolute top-10 left-[3px] w-[372px] h-[270px] aspect-[1.38]",
        backgroundClass:
            "absolute top-[310px] left-0 w-[380px] h-[253px]",
        borderClass:
            "absolute top-0 left-0 w-[380px] h-[563px]",
        contentClass:
            "left-3 h-[169px] absolute top-[314px] w-[371px]",
        buttonClass: "absolute top-[512px] left-[233px]",
        roleClass:
            "ml-[0.8px] w-[338.21px] h-11 mt-[23px]",
        descriptionClass:
            "ml-px w-[350.1px] h-11 mt-1.5",
    },
];

const publications = [
    {
        title:
            "DotSense: A 3D-Printed Refreshable Text-to-Braille Translator Device",
        conference: "Conferencia: EMBC 2025",
        href: "https://ieeexplore.ieee.org/abstract/document/11253646/",
        wrapperClass: "ml-px w-[764px]",
        titleClass: "w-[760px]",
    },
    {
        title:
            "An Open Hardware Bioprinter Part I: A bioextruder with a peristaltic pump approach",
        conference: "Conferencia: Intercon 2023",
        href: "https://ieeexplore.ieee.org/abstract/document/10326095/",
        wrapperClass: "w-[882px]",
        titleClass: "w-[878px]",
    },
];

const recognitions = [
    {
        title:
            "IEEE Signal Processing Mentorship Academy (SigMA) Program 2026 - 2027",
        description:
            "Becada para desarrollar investigación subvencionada con mentor internacional para su publicación en IEEE ICASSP 2027",
        marginClass: "mt-[34px]",
    },
    {
        title:
            "Young Female* Researchers in Speech Workshop (YFRSW)",
        description:
            "Becada y reconocida como una joven investigadora en audio para presentar hallazgos en Workshop de INTERSPEECH 2026",
        marginClass: "mt-[30px]",
    },
];

export const Home = (): JSX.Element => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const scrollToProjects = (): void => {
        document
            .getElementById("proyectos")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const handleProjectDetails = (projectId: string): void => {
        setSelectedProject(projectId);
    };

    return (
        <main
            className="bg-white w-full min-w-[1440px] min-h-[4046px] flex flex-col"
            data-model-id="4028:7"
        >
            <header className="ml-[485px] w-[890px] mt-[104px] flex">
                <nav aria-label="Navegación principal" className="flex">
                    <a
                        className="flex items-center mt-[11px] w-[116px] h-[25px] [font-family: 'Outfit', Helvetica] font-bold text-[#17181a] text-xl tracking-[-0.40px] leading-[normal]"
                        href="#sobre-mi"
                    >
                        SOBRE MI
                    </a>

                    <a
                        className="flex items-center mt-[11px] w-[116px] h-[25px] ml-[26px] [font-family: 'Outfit', Helvetica] font-bold text-[#17181a] text-xl tracking-[-0.40px] leading-[normal]"
                        href="#educacion"
                    >
                        EDUCACIÓN
                    </a>

                    <a
                        className="flex items-center mt-[11px] w-[116px] h-[25px] ml-[26px] [font-family: 'Outfit', Helvetica] font-bold text-[#17181a] text-xl tracking-[-0.40px] leading-[normal]"
                        href="#proyectos"
                    >
                        PROYECTOS
                    </a>

                    <a
                        className="w-[127px] flex items-center mt-[11px] h-[25px] ml-[26px] [font-family: 'Outfit', Helvetica] font-bold text-[#17181a] text-xl tracking-[-0.40px] leading-[normal]"
                        href="#experiencia"
                    >
                        EXPERIENCIA
                    </a>

                    <a
                        className="justify-center w-[129px] text-center flex items-center mt-[11px] h-[25px] ml-[26px] [font-family: 'Outfit', Helvetica] font-bold text-[#17181a] text-xl tracking-[-0.40px] leading-[normal]"
                        href="#habilidades"
                    >
                        HABILIDADES
                    </a>

                    <a
                        className="w-[168px] h-12 relative ml-8"
                        href="mailto:ashleybravo@outlook.com"
                    >
                        <span className="top-0 w-[166px] h-12 bg-[#295eee] rounded-[52px] absolute left-0" />

                        <span className="absolute top-3 left-0 w-[166px] h-[25px] flex items-center justify-center [font-family: 'Outfit', Helvetica] font-normal text-white text-xl text-center tracking-[-0.40px] leading-[normal]">
                            CONTÁCTAME
                        </span>
                    </a>
                </nav>
            </header>

            <section
                id="sobre-mi"
                aria-labelledby="presentation-heading"
                className="ml-36 w-[578px] h-[444px] relative mt-[149px]"
            >
                <div className="absolute top-0 left-0 w-[548px] h-[324px] flex flex-col gap-[5px]">
                    <p className="w-[578px] h-[59px] [font-family: 'Open_Sans', Helvetica] font-semibold text-[#b7b5b8] text-2xl tracking-[0] leading-[54px] whitespace-nowrap">
                        INVESTIGADORA E INVENTORA
                    </p>

                    <h1
                        id="presentation-heading"
                        className="w-[563px] h-[97px] font-headline font-[number:var(--headline-font-weight)] text-transparent text-[length:var(--headline-font-size)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]"
                    >
                        <span className="text-[#17181a]">
                            Hola! Soy{" "}
                        </span>

                        <span className="text-[#6155f5]">
                            Ashley Bravo
                            <br />
                        </span>

                        <span className="text-black">
                            Ingeniera Biomédica
                        </span>
                    </h1>

                    <p className="w-[534px] h-[158px] opacity-60 [font-family: 'Outfit', Helvetica] font-light text-[#191b21] text-lg tracking-[0] leading-6">
                        Actualmente, me encuentro investigando modelos de
                        transcripción de audio basado en LLMs. Busco seguir
                        especializandome en área de la Inteligencia Artificial.
                        Tengo una formación y experiencia también en el Diseño
                        CAD y la Manufactura Aditiva.
                    </p>
                </div>

                <div className="absolute top-[309px] left-8 w-[151px] h-[53px]">
                    <button
                        aria-label="Ir a proyectos"
                        className="bg-[#295eee] absolute top-0 left-0 w-[149px] h-[53px] rounded-[52px] cursor-pointer"
                        onClick={scrollToProjects}
                        type="button"
                    >
                        <span className="absolute top-[17px] left-[30px] w-[89px] text-white text-sm text-center tracking-[-0.28px] leading-[normal]">
                            PROYECTOS
                        </span>
                    </button>
                </div>

                <div className="absolute top-[309px] left-[190px] w-[151px] h-[53px]">
                    <button
                        aria-label="Imprimir mi CV"
                        className="bg-[#e9ebef] absolute top-0 left-0 w-[149px] h-[53px] rounded-[52px] cursor-pointer"
                        onClick={() => window.print()}
                        type="button"
                    >
                        <span className="absolute top-[17px] left-[30px] w-[89px] text-[#17181a] text-sm text-center tracking-[-0.28px] leading-[normal]">
                            MI CV
                        </span>
                    </button>
                </div>

                <div className="absolute top-[390px] left-0 w-72 h-[54px] flex gap-6">
                    <a
                        aria-label="Perfil de Ashley Bravo en LinkedIn"
                        className="w-[54px] flex"
                        href="https://www.linkedin.com/in/ashleybravo/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <span className="w-[54px] h-[54px] flex bg-white rounded-[27px] border-2 border-solid border-[#295eee]">
                            <img
                                className="mt-4 w-[22px] h-[22px] ml-4"
                                alt=""
                                aria-hidden="true"
                                src="https://c.animaapp.com/1ISTNUBv/img/linkedin.svg"
                            />
                        </span>
                    </a>

                    <a
                        aria-label="Perfil de GitHub de Ashley Bravo"
                        className="w-[54px] h-[54px] flex bg-white rounded-[27px] border-2 border-solid border-[#295eee]"
                        href="https://github.com/sunset0917"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            className="mt-4 w-6 h-6 ml-[15px]"
                            alt=""
                            aria-hidden="true"
                            src="https://c.animaapp.com/1ISTNUBV/img/github.svg"
                        />
                    </a>

                    <a
                        aria-label="Enviar correo a Ashley Bravo"
                        className="w-[54px] h-[54px] flex bg-white rounded-[27px] border-2 border-solid border-[#295eee]"
                        href="mailto:ashley.bravo@pucp.edu.pe"
                    >
                        <img
                            className="mt-[15px] w-6 h-6 ml-[15px]"
                            alt=""
                            aria-hidden="true"
                            src="https://c.animaapp.com/1ISTNUBv/img/mail.svg"
                        />
                    </a>

                    <a
                        aria-label="Perfil de Ashley Bravo en Instagram"
                        className="w-[54px] h-[54px] flex bg-white rounded-[27px] border-2 border-solid border-[#295eee]"
                        href="https://www.instagram.com/ash.biocore/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            className="mt-4 w-[21px] h-[21px] ml-[17px]"
                            alt=""
                            aria-hidden="true"
                            src="https://c.animaapp.com/1ISTNUBv/img/instagram.svg"
                        />
                    </a>
                </div>
            </section>

            <section
                id="proyectos"
                aria-labelledby="projects-heading"
                className="ml-[138px] w-[1237px] h-[652px] mt-[67px] flex flex-col gap-[35px]"
            >
                <h2
                    id="projects-heading"
                    className="ml-[13px] w-[563px] h-[54px] font-headline font-[number:var(--headline-font-weight)] text-[#17181a] text-[length:var(--headline-font-size)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]"
                >
                    Proyectos
                </h2>

                <div className="flex items-start min-w-[1235px]">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            aria-labelledby={`${project.id}-title`}
                            className={`${project.cardClass} h-[563px] relative`}
                        >
                            <div className="w-[380px] absolute top-0 left-0 h-[563px]">
                                <img
                                    className={project.imageClass}
                                    alt={project.imageAlt}
                                    src={project.image}
                                />

                                <div
                                    className={`${project.backgroundClass} bg-white`}
                                    aria-hidden="true"
                                />

                                <div
                                    className={`${project.borderClass} rounded-[25px] border-4 border-solid border-[#e9ebef]`}
                                    aria-hidden="true"
                                />
                            </div>

                            <button
                                aria-expanded={
                                    selectedProject === project.id
                                }
                                aria-label={`Ver más sobre ${project.title}`}
                                className={`${project.buttonClass} w-[129px] h-9 cursor-pointer`}
                                onClick={() =>
                                    handleProjectDetails(project.id)
                                }
                                type="button"
                            >
                                <span className="top-0 w-[127px] h-9 bg-[#295eee] rounded-[52px] absolute left-0" />

                                <span className="absolute top-[9px] left-[19px] w-[89px] text-white text-sm text-center tracking-[-0.28px] leading-[normal]">
                                    VER MÁS
                                </span>
                            </button>

                            <div
                                className={`${project.contentClass} flex flex-col`}
                            >
                                <p className="w-[247.73px] h-[22px] [font-family: 'Outfit', Helvetica] font-normal text-[#b7b5b8] text-lg tracking-[0] leading-[22px] whitespace-nowrap">
                                    {project.year}
                                </p>

                                <h3
                                    id={`${project.id}-title`}
                                    className="w-[363px] h-[25px] mt-[5px] [font-family: 'Outfit', Helvetica] font-bold text-[#151e50] text-xl tracking-[0] leading-[22px]"
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className={`${project.roleClass} [font-family: 'Outfit', Helvetica] font-bold text-[#295eee] text-lg tracking-[0] leading-[22px]`}
                                >
                                    {project.role}
                                </p>

                                <p
                                    className={`${project.descriptionClass} opacity-60 [font-family: 'Outfit', Helvetica] font-normal text-[#191b21] text-lg tracking-[0] leading-[22px]`}
                                >
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section
                id="publicaciones"
                aria-labelledby="publications-heading"
                className="ml-[151px] w-[880px] h-56 mt-[125px] flex flex-col gap-[34px]"
            >
                <h2
                    id="publications-heading"
                    className="w-[563px] h-[54px] font-headline font-[number:var(--headline-font-weight)] text-[#17181a] text-[length:var(--headline-font-size)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]"
                >
                    Publicaciones
                </h2>

                {publications.map((publication) => (
                    <article
                        key={publication.href}
                        className={`${publication.wrapperClass} h-[51px] flex flex-col gap-1`}
                    >
                        <a
                            href={publication.href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <h3
                                className={`${publication.titleClass} h-[25px] [font-family: 'Outfit', Helvetica] font-bold text-[#151e50] text-[22px] tracking-[0] leading-[22px] underline whitespace-nowrap`}
                            >
                                {publication.title}
                            </h3>
                        </a>

                        <p className="w-[732px] h-[22px] [font-family: 'Outfit', Helvetica] font-bold text-[#295eee] text-lg tracking-[0] leading-[22px]">
                            {publication.conference}
                        </p>
                    </article>
                ))}
            </section>

            <section
                id="reconocimientos"
                aria-labelledby="recognitions-heading"
                className="ml-[151px] w-[1016px] h-[220px] mt-[61px] flex flex-col"
            >
                <h2
                    id="recognitions-heading"
                    className="w-[563px] h-[54px] font-headline font-[number:var(--headline-font-weight)] text-[#17181a] text-[length:var(--headline-font-size)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]"
                >
                    Reconocimientos
                </h2>

                {recognitions.map((recognition) => (
                    <article
                        key={recognition.title}
                        className={`ml-px w-[1017px] h-[51px] ${recognition.marginClass} flex flex-col gap-1`}
                    >
                        <h3 className="w-[787px] h-[25px] [font-family: 'Outfit', Helvetica] font-bold text-[#151e50] text-[22px] tracking-[0] leading-[22px] whitespace-nowrap">
                            {recognition.title}
                        </h3>

                        <p className="w-[1013px] h-[22px] [font-family: 'Outfit', Helvetica] font-bold text-[#295eee] text-lg tracking-[0] leading-[22px]">
                            {recognition.description}
                        </p>
                    </article>
                ))}
            </section>
        </main>
    );
};