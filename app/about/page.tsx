"use client"
import AboutSection from "@/components/sections/about-us";
import SectionHeader from "@/components/sections/headerSection";
import MessageFromCEO from "@/components/sections/MessageFromCEO";
import { TeamSectionAnimated } from "@/components/sections/teamMembers";
import { teamMembers } from "@/lib/consts";
import SectionWithLineDecorator from "@/sections/sectionWithLineDecorator";
import { useEffect, useRef } from "react";

export default function About() {

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
           
          },
          { threshold: 0.1 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => observer.disconnect();
      }, []);
  return (
    <>
          <SectionWithLineDecorator sectionRef={sectionRef} backgroundColor="white">
            <AboutSection textheading="text-white" textcontent="text-gray-300" backgroundColor="bg-[#0A1236]/95" />
            <TeamSectionAnimated members={teamMembers} />
            <MessageFromCEO />
          </SectionWithLineDecorator>
     </>
  );
}