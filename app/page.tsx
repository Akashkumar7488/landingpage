import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://th.bing.com/th/id/R.c39e95e81fab1fafaf928a6d54927469?rik=6ZYVbd%2bRIZttwg&riu=http%3a%2f%2fak2.picdn.net%2fshutterstock%2fvideos%2f14159582%2fthumb%2f1.jpg&ehk=or8imY9y0R77BRxQWht7vukCBRuqzpBd0OiYRdjitqI%3d&risl=&pid=ImgRaw&r=0')"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything Possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">{" "} Web Develpoment</span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, porro!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Learn More
            </Link>
            <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
            My Projects
            </Link>
            <Link href="/contact-me" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
            Contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
            <Link href="/my-skills" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Learn More
            </Link>
            <Link href="/my-projects" className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            My Projects
            </Link>
            <Link href="/contact-me" className="rounded-[20px] bg-transparent border-white px-5 py-3 text-lg text-white max-w-[200px]">
            Contact me
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 z-[10]">
            <Image
            src='/Assets/horse.png'
            alt="horse"
            height={300}
            width={300}
            className="absolute right-55 top-40"
            />
            <Image src="/Assets/cliff.webp" alt="cliff" width={400} height={480}/>
          </div>
          <div className="absolute bottom-0 z-[5] w-full h-auto">
            <Image
            src="/Assets/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className="w-full h-full"
            />
          </div>
          <Image
            src='/Assets/stars.png'
            alt="stars"
            height={300}
            width={300}
            className="absolute top-10 left-0 z-[10]"
            />
    </main>
  );
}
