import ButtonLink from '~/components/atoms/ButtonLink'


function InfoSection(){
    return (
        <section className='flex flex-col md:flex-row w-full' id="features">
            <div className="md:w-1/2  py-28  bg-main-pattern bg-cover px-12 lg:px-28 text-slate-50">
                <div className="max-w-fit ml-auto">
                    <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Track. Analyze. Progress.</h2>
                    <p className="max-w-prose leading-7">Built-in tools to help you maximize your winning trades and decrease your losing ones. Build up a proven history of wins to help you break out to the next level.</p>
                </div>
            </div>

            <div className=" md:w-1/2 py-28 sm:grid-cols-2 md:gap-8 bg-[var(--dark-1)] bg-cover px-12 lg:px-28 text-slate-50">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Redefining the stock journal.</h2>
                <p className="mb-8 leading-7">Practice makes perfect. Our enhanced trading journal reveals insights into your personalized trading style - increasing consistency.</p>
                <ButtonLink to="/#why-trade-tracker" display="primary" variant={'main'} >See Metrics →</ButtonLink>
            </div>
        </section>
    )
}

export default InfoSection