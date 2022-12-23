export function About() {
  return (
    <section
      id="about"
      className="px-4 pt-40 pb-28 md:px-4 xl:px-0 grid justify-center mb-32 lg:max-w-6xl lg:mx-auto"
    >
      <h2 className="mb-12 pb-1 text-xl md:text-2xl lg:text-3xl pl-4 border-l-4 border-slate-500">
        Mi nombre es{" "}
        <span className="font-bold text-slate-500">Jimmy Loloy Laurencio</span>
      </h2>

      <p className="text-justify font-sans2 lg:text-lg">
        Cuento con experiencia en la creación de aplicaciones web del lado del
        cliente usando ReactJS y VueJS, usando TailwindCSS, Ant Design, ChakraUI
        entre otras, para creación de interfaces de usuario. Entusiasta del
        Backend con conocimientos en diseño de APIs. Organizador de una
        comunidad de tecnología, con capacidades de comunicación, liderazgo y
        trabajo en equipo.
      </p>

      <a
        href="https://drive.google.com/file/d/1l7VO_ZnW7n1CCmPRifm3M9fV-1oy1mB0/view?usp=sharing"
        target="_blank"
        className="capitalize text-start mt-6 py-2 px-4 bg-blue-500 text-white text-sm md:text-base lg:text-lg font-sans2 rounded-lg w-fit"
      >
        view resume
      </a>
    </section>
  );
}
