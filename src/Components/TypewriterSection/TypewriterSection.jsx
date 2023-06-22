import Typewriter from "typewriter-effect";

export default function TypewriterSection(props) {
  return (
    <section className="bg-[#B5C7A5] mb-[2vh] flex justify-center text-[#A62B00] text-center font-normal text-[1.5rem] leading-[120%] py-[1.5vh] ssm:text-[2rem] md:py-[2vh] md:text-[2.5rem]  lg:py-[3vh] lg:text-[3rem]  xl:py-[4vh] xl:text-[3.2rem] ">
        <h1>{props.FirstText}</h1>
        <h3>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: props.SecondText,
              delay: 250,
            }}
          />
        </h3>
      </section>
  )
}

