import Image from "next/image"

export default function PortfolioCard({portfolioLink, portfolioImage, portfolioTitle, portfolioDesc}) {
    return (
        <>
            <div className="max-w-md rounded-2xl border-gray-500 border-4 hover:opacity-80">
                <a href={portfolioLink}>
                    <Image src={portfolioImage} width={500} height={500} className="rounded-t-2xl"></Image>
                    <div className="p-3 bg-white text-black rounded-b-2xl">
                        <h3 className="font-semibold text-xl bg-gray-500 text-white inline-block p-2 px-3 rounded-3xl shadow-lg">{portfolioTitle}</h3>
                        <p className="mt-4">{portfolioDesc}</p>
                    </div>
                    </a>
            </div>          
        </>
    )
}