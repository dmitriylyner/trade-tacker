import Image from "next/image";
import ButtonLink from "~/components/atoms/ButtonLink";
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
                <ButtonLink to="/?join=true" display="primary" scroll={false} variant={'main'}>Get started →</ButtonLink>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-10 md:mt-0 md:w-1/2 ">
                <Image 
                    src={TotalPLImg}
                    alt='Total Profit and Loss example'
                    className="relative z-10 shadow-xl rounded-lg md:ml-4"
                />

                <Image 
                    src={WinLoseImg}
                    alt='Win Lose ratio example'
                    className="relative z-10 shadow-xl rounded-lg md:ml-4"
                />

                <Image 
                    src={WinLoseValueImg}
                    alt='Win Lose ratio example'
                    className="relative z-10 shadow-xl rounded-lg"
                />

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