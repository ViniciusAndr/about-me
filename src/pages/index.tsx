
export default function Home() {


  return (
    <main className="flex w-full justify-center absolute mt-20 flex-col items-center">
      <div className="flex flex-col text-justify items-center">
        <div className="max-w-[25rem]">
          <h1 className="font-bold text-lg">Vinicius de Andrade</h1>
          <span>Fullstack Developer</span>
          <div className="mt-5">
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
          <div className="mt-10">
            <h1 className="text-lg decoration-2 underline underline-offset-4">Experience</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
