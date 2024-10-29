import Image from "next/image";
import AppPreviewImg from '../../../../images/app-preview-2.png';
import IconChart from '../../../../images/svgs/icon-chart-up.svg';
import IconPie from '../../../../images/svgs/icon-pie-chart.svg';
import IconClipboard from '../../../../images/svgs/icon-clipboard.svg';
import IconFlag from '../../../../images/svgs/icon-flag.svg';

function DetailsSection(){
    return (
        <>
            <div className="mt-16 md:mt-44 px-4 ">
                <h2 className="text-4xl md:text-5xl mb-10 font-bold text-center">Unlocking new paradigms</h2>
                <Image 
                src={AppPreviewImg}
                alt='Trade Tracker App Preview'
                className="relative z-10 max-w-[85%] m-auto"
                />

            </div>

            <section className="bg-pattern-3 bg-cover w-full -mt-48">
                <div id="why-trade-tracker" className=" text-slate-50 mx-12 lg:mx-36 xl:mx-auto lg:max-w-6xl my-32">
                <div className="pt-36">
                    <h3 className="text-2xl text-[#07F2C7]">Why Trade Tracker?</h3>
                    <h2 className="text-4xl md:text-5xl font-bold drop-shadow-md">Habit and performance</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-4 md:gap-8 py-16 md:grid-flow-col-dense">
                    <div className="my-2">
                    <IconChart className='text-6xl'/>
                    <h4 className="font-bold my-2 drop-shadow-md leading-7">Customizable charts</h4>
                    <p className="md:max-ch-25">Create charts based on the metrics you want to track.</p>
                    </div>

                    <div className="my-2">
                    <IconPie className='text-6xl'/>
                    <h4 className="font-bold my-2 drop-shadow-md leading-7">Analyze portfolios</h4>
                    <p className="md:max-ch-25">Personal, retirement, crypto, options, stocks, you name it. </p>
                    </div>

                    <div className="my-2 ">
                    <IconClipboard className='text-6xl'/>
                    <h4 className="font-bold my-2 drop-shadow-md leading-7" >Evaluate trades</h4>
                    <p className="md:max-ch-25">Get a new perspective on past trades and how to improve.</p>
                    </div>

                    <div className="my-2">
                    <IconFlag className='text-6xl'/>
                    <h4 className="font-bold my-2 drop-shadow-md leading-7">Personalized Notes</h4>
                    <p className="md:max-ch-25">Create shortcuts and reminders to perform your best.</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default DetailsSection