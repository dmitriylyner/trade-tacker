import { useRef } from 'react'
import Image from "next/image";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import Progress from '~/components/molecules/Progress'
import PencilImage from '../../../../images/pencil.png';


ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function HeroSection(){

    // let dummyData = [
    //     [0,10],
    //     [5, 50],
    //     [15, 75],
    //     [55, 100],
    //     [75, 10],
    //     [100, 5]
    // ]

    // let line = d3.line()
    // let result = line(dummyData as any)
    // console.log(result)

    // const svgRef = useRef<SVGSVGElement | null>(null)

    const data = {
        labels: ['mon', 'tues', 'wed'],
        datasets: [{
            label: 'wekkdays',
            data: [30, 33, 66],
            borderColor: 'aqua',
            tension: 0.4
        }]
    }

    const options = {}

    return (
        <section className="container md:justify-evenly h-[80vh] max-h-[500px]">
            <div className=" flex flex-col items-center mt-40 px-4 ">
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center text-slate-950 lg:text-[4rem] md:leading-none drop-shadow-md">
                Track & improve your trades
                </h1>
                <p className="text-xl text-center mb-5">Gain consistency through data. View insights and performance of your trades over time.</p>
                {/* <div className="absolute bg-transparent border-solid border border-back w-full h-20"/>
                <div className="absolute bg-transparent border-solid border border-back w-full h-20"/> */}
                <div className=" bg-white w-[95%] md:w-9/12 mt-10  mb-16 h-20 shadow-xl hero-input-borders relative">
                    <div className="flex justify-between items-center mx-16 h-[inherit]">
                    <p>SPY</p>
                    <p>Opening Range breakout</p>

                    {/* <svg ref={svgRef}>
                        <path d={result} />
                    </svg> */}

                    <div className="w-2/3">
                        <Line
                            data={data}
                            options={options}
                        
                        >

                        </Line>
                    </div>


                    <Progress />
                    <p className="text-xl font-bold">+20%</p>
                    </div>
                    <Image 
                    src={PencilImage}
                    alt='Trade Tracker Hero Image'
                    className="md:max-w-[100px] ml-auto relative top-[-11rem] md:right-[-50px] z-10"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection


/** ALT Hero Section Layout:
    <div className="container flex flex-col items-center justify-center mt-40 md:flex-row md:h-screen md:mt-0 md:justify-evenly ">
        <div className="space-y-5 max-w-screen-sm">
            <h1 className="text-4xl font-extrabold tracking-tight text-center text-slate-950 lg:text-[5rem] md:text-left md:leading-none drop-shadow-md">
            Track & improve your trades
            </h1>
            <p className="text-center md:text-left md:max-w-prose">Gain consistency through data. View insights and performance of your trades over time.</p>
            <Button to="#features">Explore Now →</Button>
        </div>
        <Image 
            src={HeroImage}
            alt='Trade Tracker Hero Image'
            className="md:max-w-xl"
        />
    </div>
**/