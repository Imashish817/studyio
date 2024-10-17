
// import img from "next/img";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../elements/useoutsideclick.ts";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
  <div className="max-w-5xl mx-auto px-8">
      <p className="text-center font-bold text-2xl text-black m-4">
      Meet Our Team
      </p>    
    </div>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white  sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`img-${active.title}-${id}`}>
              <img
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-700 text-base">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 text-base">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dak:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col  hover:bg-neutral-50  rounded-xl cursor-pointer w-full">
          <div className="flex gap-4 flex-col  w-full">
            <motion.div layoutId={`img-${card.title}-${id}`}>
              <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full  rounded-lg object-cover object-top" />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800  text-center md:text-left text-base">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 text-center md:text-left text-base">
                {card.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "CEO",
    title: "Chirag Mehta",
    src: "https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/Chirag.webp?alt=media",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        (<p>Chirag Mehta is an enthusiastic and highly organized leader with over 11 years of experience in
            the education industry. As the CEO of Study Culture, he is dedicated to advancing the
            international education landscape by leveraging his deep understanding of global educational
            systems, processes, student and institutional needs.
           
                  </p>)
      );
    },
  },
  {
    description: "Director",
    title: "Sanjay Batra",
    src: "https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/SanjayBatra.jpg?alt=media&token=7080f643-4348-4887-9f14-e80c2bfe6918",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        (<p>Mr. Sanjay Batra is an accomplished entrepreneur with over 30 years of experience spanning various industries, including retail, technology, real estate, and consultancy. His diverse business portfolio reflects his exceptional abilities in strategic planning, financial management, and operational leadership. Known for his visionary approach, Mr. Batra has successfully founded and led numerous ventures, transforming them into thriving enterprises
                  </p>)
      );
    },
  },
  {
    description: "Head - Career Counselling",
    title: "Dr. Monika Bargujjar",
    src: "https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/Monika.JPG?alt=media&",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        (<p>Dr. Monika Bargujjar is the Head of Career Counselling at Study Culture, bringing extensive
            knowledge and expertise in psychology to help students navigate their career paths. With a PhD
            in Applied Psychology, she has a strong foundation in understanding human behavior,
            complemented by her experience teaching graduate and postgraduate students.
                  </p>)
      );
    },
  },

  {
    description: "Head - Services & Marketing",
    title: "Ashima Vij",
    src: "https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/Ashima%20Vij.jpg?alt=media",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        (<p>Ashima Vij is the Head of Services & Marketing at Study Culture, bringing over 10 years of
            diverse experience across various industries, including more than 4 years in the education
            sector. She holds a Master’s degree in Commerce, which equips her with strong analytical and
            strategic skills essential for navigating the complexities of service delivery and marketing in a
            competitive environment.
                  </p>)
      );
    },
  },
  {
    description: "Head - ELT and Operations",
    title: "Priya Kumra",
    src: "https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/Priya-2.jpg?alt=media",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        (<p>Priya Kumra serves as the Head of English Language Training (ELT) and Operations at Study
        Culture, bringing a wealth of experience and expertise as an IELTS trainer. With an MBA in
        Finance and Marketing and a BA in Economics (Honours), Priya combines her strong academic
        foundation with a genuine passion for empowering students to achieve their language
        proficiency goals.
                  </p>)
      );
    },
  },
];
