import { useRef } from 'react'
import Image from "next/image";
// import {
//     Chart as ChartJS,
//     LineElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     Tooltip,
//     Legend
// } from 'chart.js'
import { Line } from 'react-chartjs-2'
import Progress from '~/components/molecules/Progress'
import PencilImage from '../../../../images/pencil.png';
import AnimatedNumbers from '~/components/atoms/AnimatedNumbers';


// ChartJS.register(
//     LineElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     Tooltip,
//     Legend
// )

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

    // const data = {
    //     labels: ['mon', 'tues', 'wed'],
    //     datasets: [{
    //         label: 'wekkdays',
    //         data: [30, 33, 66],
    //         borderColor: 'aqua',
    //         tension: 0.4
    //     }]
    // }

    const options = {}

    return (
        <section className=" md:justify-evenly h-[80vh] max-h-[500px] ">
            <div className=" flex flex-col items-center mt-40 px-4 ">
                <h1 className="text-balance mb-8 text-4xl font-extrabold tracking-tight text-center text-slate-950 lg:text-[4rem] md:leading-none drop-shadow-md">
                Track & improve your trades
                </h1>
                <p className="text-xl text-center mb-5 text-balance">Gain consistency through data. View insights and performance of your trades over time.</p>
                {/* <div className="absolute bg-transparent border-solid border border-back w-full h-20"/>
                <div className="absolute bg-transparent border-solid border border-back w-full h-20"/> */}
                <div className=" bg-white w-[95%] lg:w-[110%] mt-10  mb-16  h-14 md:h-20 shadow-xl hero-input-borders relative">
                    <div className="flex justify-between items-center mx-16 h-[inherit]">
                    <p style={{color: '#6C6C6C'}}>$<span style={{fontWeight:'bold'}}>SPY</span></p>
                    <p style={{color: '#6C6C6C'}} className="hidden md:inline">Opening Range breakout</p>


                    <svg  style={{width:'100px'}}  width="183" height="80" viewBox="0 0 183 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.61686 79.4691L15.4691 76.3831L12.3831 64.5309L0.530859 67.6169L3.61686 79.4691ZM10.8 67.2286L9.50631 66.4694H9.50631L10.8 67.2286ZM173.2 23.2195L172.097 22.2033L173.2 23.2195ZM181.867 13.8089L169.63 14.3124L170.133 26.5494L182.37 26.046L181.867 13.8089ZM9.29369 72.7592L12.0937 67.9878L9.50631 66.4694L6.70631 71.2408L9.29369 72.7592ZM12.0937 67.9878C13.497 65.5965 15.5603 62.0828 17.9572 58.8326C20.393 55.5298 23.0098 52.7317 25.4553 51.5439L24.1447 48.8454C20.9902 50.3775 18.007 53.7107 15.5428 57.052C13.0397 60.4461 10.903 64.0893 9.50631 66.4694L12.0937 67.9878ZM25.4553 51.5439C27.8104 50.4 30.1629 50.6648 33.0608 50.935C35.857 51.1956 39.1158 51.4416 42.3781 49.4623L40.8219 46.8975C38.4842 48.3159 36.143 48.2093 33.3392 47.9479C30.6371 47.696 27.3896 47.2693 24.1447 48.8454L25.4553 51.5439ZM42.3781 49.4623C43.9615 48.5016 45.476 47.0581 46.9012 45.5172C48.326 43.9767 49.7702 42.2158 51.1382 40.6222C52.5343 38.9957 53.8707 37.5191 55.1769 36.3981C56.5006 35.2621 57.6444 34.6239 58.6382 34.4641L58.1618 31.5022C56.3556 31.7927 54.6994 32.8546 53.2231 34.1216C51.7293 35.4036 50.2657 37.0327 48.8618 38.6682C47.4298 40.3365 46.074 41.9935 44.6988 43.4802C43.324 44.9665 42.0385 46.1594 40.8219 46.8975L42.3781 49.4623ZM58.6382 34.4641C59.599 34.3095 60.6666 34.5659 61.9459 35.1858C63.244 35.8147 64.5301 36.6957 65.9956 37.6268C67.3939 38.5153 68.9538 39.4465 70.5799 39.9209C72.2678 40.4134 74.0939 40.433 75.9192 39.4358L74.4808 36.8031C73.5061 37.3356 72.5322 37.3655 71.4202 37.041C70.2462 36.6984 69.0061 35.9854 67.6044 35.0947C66.2699 34.2468 64.756 33.2137 63.2541 32.486C61.7334 31.7492 60.001 31.2063 58.1618 31.5022L58.6382 34.4641ZM75.9192 39.4358C77.6339 38.499 79.1969 36.7356 80.6279 34.6964C82.0831 32.6226 83.5182 30.0902 84.9259 27.429C87.7844 22.0251 90.5074 16.1558 93.2678 11.791L90.7322 10.1875C87.8926 14.6777 85.0156 20.8436 82.2741 26.0262C80.8818 28.6583 79.5169 31.0569 78.1721 32.9732C76.8031 34.9242 75.5661 36.2101 74.4808 36.8031L75.9192 39.4358ZM93.2678 11.791C96.016 7.44533 98.6065 4.93338 100.968 3.96676C103.155 3.07154 105.377 3.41167 107.839 5.46683L109.761 3.16388C106.623 0.543894 103.245 -0.206483 99.8318 1.19031C96.5935 2.51569 93.584 5.67825 90.7322 10.1875L93.2678 11.791ZM107.839 5.46683C110.424 7.62481 113.107 11.5441 115.924 16.1053C118.678 20.5662 121.54 25.6065 124.376 29.6124L126.824 27.8791C124.06 23.9741 121.322 19.1368 118.476 14.5291C115.693 10.0215 112.776 5.68104 109.761 3.16388L107.839 5.46683ZM124.376 29.6124C130.093 37.6888 135.997 42.0186 142.147 43.0694L142.653 40.1123C137.603 39.2494 132.307 35.6245 126.824 27.8791L124.376 29.6124ZM142.147 43.0694C148.306 44.1218 154.315 41.8191 160.082 37.6255L158.318 35.1991C152.885 39.1495 147.694 40.9738 142.653 40.1123L142.147 43.0694ZM160.082 37.6255C165.822 33.4514 171.52 27.2576 174.303 24.2356L172.097 22.2033C169.28 25.2619 163.778 31.2291 158.318 35.1991L160.082 37.6255ZM174.303 24.2356L177.103 21.1953L174.897 19.163L172.097 22.2033L174.303 24.2356Z" fill="#06BD9A"/>
                    </svg>


                    {/* <svg ref={svgRef}>
                        <path d={result} />
                    </svg> */}

                    {/* <div className="w-2/3">
                        <Line
                            data={data}
                            options={options}
                        
                        >

                        </Line>
                    </div> */}


                    <Progress />

                    <p className="text-xl font-bold" style={{width: '2rem'}}><AnimatedNumbers value={20}/></p>

                    </div>
                    <Image 
                    src={PencilImage}
                    alt='Trade Tracker Hero Image'
                    className="max-w-[60px] md:max-w-[100px] ml-auto relative top-[-7rem] md:top-[-11rem] md:right-[-50px] z-10"
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