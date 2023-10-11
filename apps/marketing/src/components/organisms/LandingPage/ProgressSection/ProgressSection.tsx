import Image from "next/image";
import ButtonLink from "~/components/atoms/ButtonLink";
// import PhoneView from '../images/phone-app-view.jpg'
import TotalPLImg from '../../../../images/total-pl.jpg';
import WinLoseImg from '../../../../images/win-lose-ratio.jpg'
import WinLoseValueImg from '../../../../images/win-lose-value.jpg'
import HoldtimeImg from '../../../../images/hold-time.jpg'



function ProgressSection(){
    return (
        <section className=" lg:px-0 bg-white w-full">
            <div className="flex flex-col my-40 md:flex-row mx-12 lg:max-w-6xl lg:my-32 lg:mx-36 xl:mx-auto">
            <div >
                <h3 className="text-2xl text-mail-teal">Level up</h3>
                <div >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-950 drop-shadow-md mb-4">Watch your progress</h2>
                <p className="lg:max-w-prose mb-8 leading-7">Gain consistency through data. View insights and performance of your trades over time. Unlock your highest level of performance now.</p>
                <ButtonLink to="/#why-trade-tracker" display="primary" variant={'main'}>See metric →</ButtonLink>
                </div>
            </div>

            {/* <Image 
                src={PhoneView}
                alt='Trade Tracker Phone App View'
            /> */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-10 md:mt-0 md:w-1/2 ">
                {/* <div className="bg-[#fafafa] shadow-xl rounded-lg md:w-[250px] h-[250px] justify-self-end p-6">
                    <p>total P/L</p>
                    <p>$3250</p>
                </div> */}

                <Image 
                    src={TotalPLImg}
                    alt='Total Profit and Loss example'
                    className="relative z-10 shadow-xl rounded-lg md:ml-4"
                />

                {/* <div className="bg-slate-400 shadow-xl rounded-lg md:w-[250px] h-[250px] justify-self-end p-6">
                <p>Win/Lose ratio</p>
                <p>40%</p>
                </div> */}

                <Image 
                    src={WinLoseImg}
                    alt='Win Lose ratio example'
                    className="relative z-10 shadow-xl rounded-lg md:ml-4"
                />

                {/* <div className="bg-slate-400 shadow-xl rounded-lg md:w-[250px] h-[250px] mt-4 p-6">
                <p>Average win value</p>
                <p>Average lose value</p>
                </div> */}

                <Image 
                    src={WinLoseValueImg}
                    alt='Win Lose ratio example'
                    className="relative z-10 shadow-xl rounded-lg"
                />

                {/* <div className="bg-slate-400 shadow-xl rounded-lg md:w-[250px] h-[250px] mt-4 p-6">
                <p>Average win hold time</p>
                <p>Average lose hold time</p>
                </div> */}

                <Image 
                    src={HoldtimeImg}
                    alt='Win Lose ratio example'
                    className="relative z-10 shadow-xl rounded-lg"
                />

            </div>
            </div>
        </section>
    )
}

export default ProgressSection