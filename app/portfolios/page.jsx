import PortfolioCard from "@/components/PortfolioCard"

export default function portfolios() {
    return (
        <>
            <div className="animate-fade-down animate-once">
                <h1 className="m-4 font-bold text-4xl text-center">Portfolios</h1>
                <div className="flex justify-center">
                    <div className="m-10 grid grid-cols-3 gap-20">
                        <PortfolioCard portfolioLink={"https://donothing.vercel.app"} portfolioImage={"/images/donothing_web.png"} portfolioTitle={"\"Do Nothing\" Game"} portfolioDesc={"Do Nothing Game is a game where you do not have to do anything, just sit and relax. The purpose of this game is to help people escape from Internet fever for a while using an interactive way."}></PortfolioCard>
                        <PortfolioCard portfolioLink={"https://hakimnazri.vercel.app"} portfolioImage={"/images/personal_website.png"} portfolioTitle={"Personal Website"} portfolioDesc={"This is my personal website. It contains my picture, biodata, portfolios of my projects, and my blogposts for various subjects. Everything related to software developments will be put here for documentation."}></PortfolioCard>
                        <PortfolioCard portfolioLink={"https://motionu.club"} portfolioImage={"/images/motionu_website.png"} portfolioTitle={"Motion-U Club Official Website"} portfolioDesc={"Motion-U Club is a technopreneurship club based in International Islamic University Malaysia. I created the website using NextJs, Tailwind and Contentful Headless CMS."}></PortfolioCard>
                    </div>
                </div>
            </div>
            
        </>
    )
}