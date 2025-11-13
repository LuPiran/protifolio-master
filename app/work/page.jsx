"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
    {
        num: '01',
        category: 'Mobile App Flutter',
        title: 'Social Media App',
        description: 'This is a social media application developed in Flutter that allows users to create accounts, make posts, like and comment on friends posts, follow friends, edit profile and customize the app theme (light or dark). The project uses the BloC/Cubit architecture to manage state and Firebase for authentication and data storage.',
        stack: [{ name: "Flutter" }, { name: "Firebase" }, { name: "Bloc/Cubit" },],
        image: "/assets/works/app_social.png",
        github: "https://github.com/LuPiran/clone_instagram"
    },
    {
        num: '02',
        category: 'Mobile App Flutter',
        title: 'Greengrocer App',
        description: 'This is a mobile application developed in Flutter that simulates a virtual greengrocer. It offers a complete shopping experience, with screens for product display, details, cart, orders and user information.',
        stack: [{ name: "Flutter" }],
        image: "/assets/works/greengrocer.png",
        github: "https://github.com/LuPiran/greengrocer"
    },
    {
        num: '03',
        category: 'Mobile App SwiftUI',
        title: 'Tinder Clone App',
        description: 'This is a Tinder-inspired application, developed with SwiftUI, that allows users to explore profiles, view details, edit their own profile and manage their information. The project was created to enhance skills in declarative interface development and SwiftUI practices.',
        stack: [{ name: "SwiftUI" },],
        image: "/assets/works/TinderApp.png",
        github: "https://github.com/LuPiran/TinderApp"
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/*outline num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*Category*/}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/*description*/}
                            <p className="text-white/60">{project.description}</p>
                            {/*stack*/}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/*border*/}
                            <div className="border border-white/20"></div>
                            {/*button*/}
                            <div className="flex items-center gap-4">
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Project Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*slider*/}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/*overlay*/}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/*image*/}
                                            <div className="relative w-full h-full">
                                                <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/*slider buttons*/}
                            <WorkSliderButton
                            containerSyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work