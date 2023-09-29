import Button from '~/components/atoms/Button'


function InfoSection(){
    return (
        <section className='flex flex-col md:flex-row w-full' id="features">
            <div className="md:w-1/2  py-28  bg-main-pattern bg-cover px-12 md:px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Track. Analyze. Progress.</h2>
                <p className="max-w-prose leading-7">Built-in tools to help you maximize your winning trades and decrease your losing ones. Build up a proven history of wins to help you break out to the next level.</p>
            </div>

            <div className=" md:w-1/2 py-28 sm:grid-cols-2 md:gap-8 bg-[var(--dark-1)] bg-cover px-12 md:px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Redefining the stock journal.</h2>
                <p className="mb-8 leading-7">Practice makes perfect, and Trade Tracker improves your steady progress with intuitive features.</p>
                <Button to="why-trade-tracker">See Metrics →</Button>
            </div>
        </section>
    )
}

export default InfoSection