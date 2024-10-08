
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"



export default function ScoreProgressionChart(){

    const data = [
        {
            name: 'June 12',
            score: 580,
        },
        {
            name: 'June 14',
            score: 600,
        },
        {
            name: 'June 17',
            score: 620,
        },
        {
            name: 'June 20',
            score: 630,
        },
        {
            name: 'June 21',
            score: 650,
        },

        
    ]

    return(
        <div className="lg:col-span-7 col-span-12
        xl:col-span-7 2xl:col-span-5 
        flex p-4 h-[28rem] order-2" >
                <Card className="w-full select-none p-1">
                    <CardHeader>
                    <div className="flex-col">
                        <h2 className="text-xl font-bold">Score Progression</h2>
                        <h3 className="text-md text-default-400">Check how you improved</h3>
                    </div>
                    </CardHeader>
                    <CardBody>
                    <div className={`w-full flex h-[16rem] justify-center`}>
                    <ResponsiveContainer>
                        <LineChart 
                            width={400}
                            height={300}
                            data={data}
                            margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
                        >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={"name"} />
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="score" stroke="#4ade80" activeDot={{r:8}} />
                        </LineChart>
                    </ResponsiveContainer>
                    </div>
                    </CardBody>
                
                    
                </Card>
        </div>
    )


}