import dark from "../assets/images/image-about-dark.jpg";
import light from "../assets/images/image-about-light.jpg";

const About = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col w-full font-body">
        <div>
          <img src={dark} alt="/" className="w-full" />
        </div>
        <div className="md:w-[40%] flex flex-col justify-center md:px-12 px-6 md:pt-8 py-8">
          <h1 className="text-2xl font-bold mb-2 uppercase tracking-widest ">
            About our furniture
          </h1>
          <p className="text-VeryDarkGray text-[13px]">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div>
          <img src={light} alt="/" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
