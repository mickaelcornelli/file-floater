import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Bienvenue sur File Floater. <br /> <br />
            Partagez du contenus de façon sécurisée, à tout moment et où que
            vous soyez
          </h1>
          <p className="pb-20">
            Partagez et conservez à l'abri tout ce qui compte pour vous et votre
            famille. Sauvegardez des fichiers dans le cloud, partagez des photos
            et des vidéos, et bien plus encore.
          </p>

          <Link
            href="/dashboard"
            className="flex p-5 bg-blue-500 cursor-pointer w-fit"
          >
            Essayez gratuitement !
            <ArrowRight className="ml-5" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            type="video/mp4"
            >
            </source>
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">
        Service 100% gratuit. Disponible 24h/24 7j/7
      </p>
      <p className="text-center font-light p-2">
        Avec File Floater, vous profitez d’une suite complète d’outils conçus
        pour vous aider à créer, partager, gérer et suivre des contenus plus
        efficacement. De plus, vous bénéficiez d’un espace de stockage cloud
        fiable.
      </p>
    </main>
  );
}
