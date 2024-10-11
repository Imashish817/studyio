import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import priya from '../data/img/Priya.jpg'
import Ashima from '../data/img/Ashima Vij.jpg'
import Monika from '../data/img/Monika.JPG'
import ChiragMehta from '../data/img/ChiragMehta.JPG'
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <p className="text-center font-bold text-2xl text-black mt-4">
      Meet Our Team
      </p>
      <div className="flex flex-row-reverse">
      <HoverEffect items={projects} />
      </div>
     
    </div>
  );
}
export const projects = [
  {
    title: "Chirag Mehta",
    post: "CEO",
    description:
      `Chirag Mehta is an enthusiastic and highly organized leader with over 11 years of experience in the education industry. As the CEO of Study Culture, he is dedicated to advancing the international education landscape by leveraging his deep understanding of global educational
      systems, processes, student and institutional needs.`,
    img: ChiragMehta,
  },
  {
    title: "Dr. Monika Bargujjar",
    post: "Head of Career CounsellingEO",
    description:
      `Dr. Monika Bargujjar is the Head of Career Counselling at Study Culture, bringing extensive
      knowledge and expertise in psychology to help students navigate their career paths. With a PhD
      in Applied Psychology, she has a strong foundation in understanding human behavior,
      complemented by her experience teaching graduate and postgraduate students.`,
      img: Monika,
  },
  {
    title: "Ashima Vij",
    post: "Head of Services & Marketing",
    description:
      `Ashima Vij is the Head of Services & Marketing at Study Culture, bringing over 10 years of
      diverse experience across various industries, including more than 4 years in the education
      sector. She holds a Master’s degree in Commerce, which equips her with strong analytical and
      strategic skills essential for navigating the complexities of service delivery and marketing in a
      competitive environment.`,
      img: Ashima,
  },
  {
    title: "Priya Kumra",
    post: "Head of ELT and Operations",
    description:
      `Priya Kumra serves as the Head of English Language Training (ELT) and Operations at Study
      Culture, bringing a wealth of experience and expertise as an IELTS trainer. With an MBA in
      Finance and Marketing and a BA in Economics (Honours), Priya combines her strong academic
      foundation with a genuine passion for empowering students to achieve their language
      proficiency goals.`,
      img: priya,
  },
 
];
