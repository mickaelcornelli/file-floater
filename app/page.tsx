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
            ></source>
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

      <div className="pricing-plan p-4 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Choisissez votre plan
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Plan Basique */}
          <div className="plan bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex-1 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Basique</h3>
            <ul className="mb-6 text-gray-800">
              {/* Détails du plan */}
              <li className="mb-6 text-gray-800 font-bold">
                Une solution idéale pour les usages personnels
              </li>
              <li>✅ Performance Standard</li>
              <li>✅ Espace de stockage en ligne limité à 1GO</li>
              <li>✅ Envoi jusqu'à 2 GB</li>
              <li className="font-bold mt-6">€10/mois</li>
            </ul>
            <button className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-colors">
              Essayer
            </button>
          </div>

          {/* Plan Business */}
          <div className="plan bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex-1 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Business</h3>
            <ul className="mb-6 text-gray-800">
              {/* Détails du plan */}
              <li className="mb-6 text-gray-800 font-bold">
                Augmentez votre niveau avec plus de puissance et des
                fonctionnalités améliorées
              </li>
              <li>✅ Performance amélioré</li>
              <li>✅ Pas de taille de limite de transfert</li>
              <li>✅ Stockage illimité</li>
              <li className="font-bold mt-6">€20/mois</li>
            </ul>
            <button className="w-full bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition-colors">
              S'abonner
            </button>
          </div>

          {/* Plan Premium */}
          <div className="plan bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex-1 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Premium</h3>
            <ul className="mb-6 text-gray-800">
              {/* Détails du plan */}
              <li className="mb-6 text-gray-800 font-bold">
                Profitez de performances optimisées et de ressources illimités
              </li>
              <li>✅ Performance Maximale (Jusqu'à 10x)</li>
              <li>✅ Caractéristique 3</li>
              <li className="font-bold mt-6">€30/mois</li>
            </ul>
            <button className="w-full bg-[#7145f5] text-white rounded-md p-2 hover:bg-[#2f1c6a] transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
