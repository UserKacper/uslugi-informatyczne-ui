import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:grid md:grid-cols-2 h-screen">
      <section className="bg-neutral-300 flex justify-center">
        <div className="self-center p-3 md:p-8">
          <h1 className="pb-10 font-bold text-2xl">Usługi Programistyczne</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minus eaque labore adipisci rerum eius nisi iure ratione maiores? Labore, voluptatum sit. Hic labore reprehenderit corrupti maiores est autem sit!
        </div>
      </section>

      <section className="bg-neutral-200 flex justify-center">
        <div className="self-center">
          <Image src={""} alt="3d image" width={200} height={200} />
        </div>
      </section>
    </main>
  )
};