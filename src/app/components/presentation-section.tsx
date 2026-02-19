export function PresentationSection() {
  return (
    <section className="flex flex-col flex-1 gap-8 items-center mt-20">
      <div className="flex flex-col max-w-157.5 items-center gap-6">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="profile-1.png" alt="Danilo Cucharro Photo" />
        <div className="w-full">
          <h1 className="font-bold text-white text-4xl text-wrap text-center">
            Welcome, {"I'm"} Danilo Cucharro a Full Stack Developer
          </h1>
        </div>
        <div className="w-full flex justify-center gap-9"></div>
      </div>
    </section>
  );
}
