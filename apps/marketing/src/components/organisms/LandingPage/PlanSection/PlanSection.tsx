import IconLineUp from '~/images/svgs/icon-line-up.svg'
import IconWrite from '~/images/svgs/icon-write.svg'
import IconRadar from '~/images/svgs/icon-radar.svg'
import IconCrown from '~/images/svgs/icon-crown.svg'
import IconBlocks from '~/images/svgs/icon-blocks.svg'
import IconDiamond from '~/images/svgs/icon-diamond.svg'
import IconPlay from '~/images/svgs/icon-play.svg'
import Button from '~/components/atoms/Button'


function PlanSection(){
    return (
        <section className="px-8 w-full lg:my-32">
            <div className="flex flex-col md:flex-row lg:mx-auto lg:max-w-6xl lg:my-32">
                <div className="space-y-5">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-950 drop-shadow-md mt-12">Ready to get started?</h2>
                    <p className="lg:max-w-prose leading-7">Practice makes perfect, and Trade Tracker improves your steady progress with intuitive features.</p>
                </div>

                <div className="flex flex-wrap md:grid justify-around md:w-3/4 grid-cols-2">
                    <div className="bg-slate-50 w-[90%] justify-self-end self-center my-8 lg:my-0 p-6 rounded-lg h-min-content">
                    <h3 className="text-3xl md:text-4xl">Free</h3>
                    <ul className="my-8 space-y-6">
                        <li>
                        <IconLineUp className="inline-block" width="2rem" height="2rem"/>
                        <p className="inline-block ml-3">1 portfolio</p>
                        </li>
                        <li>
                        <IconWrite className="inline-block" width="2rem" height="2rem"/>
                        <p className="inline-block ml-3">40 trades a month</p>
                        </li>
                        <li>
                        <IconRadar className="inline-block" width="2rem" height="2rem"/>
                        <p className="inline-block ml-3">Watchlist alerts</p>
                        </li>
                    </ul>
                    <Button to="/login" width="full">Sign up</Button>

                    </div>
                    <div className="custom-gradient w-full p-6 rounded-lg h-min-content">
                    <h3 className="text-3xl md:text-4xl text-slate-50 font-bold "><span className="border-b-2">Pro</span> <span className="font-normal text-2xl text-light-150 ">$20/mo</span></h3>
                    <ul className="my-8 space-y-6">
                        <li>
                        <IconCrown className="inline-block" width="2rem" height="2rem"/> 
                        <p className="inline-block ml-3 text-light-150"> All portfolios</p>
                        </li>
                        <li>
                        <IconBlocks className="inline-block" width="2rem" height="2rem"/> 
                        <p className="inline-block ml-3 text-light-150">Unlimited Trades</p>
                        </li>
                        <li>
                        <IconDiamond className="inline-block" width="2rem" height="2rem"/> 
                        <p className="inline-block ml-3 text-light-150">AI journal suggestions</p>
                        </li>
                        <li>
                        <IconPlay className="inline-block" width="2rem" height="2rem"/> 
                        <p className="inline-block ml-3 text-light-150">First for features & updates</p>
                        </li>
                    </ul>
                    <Button to="login" width="full">
                        Try for free
                    </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlanSection