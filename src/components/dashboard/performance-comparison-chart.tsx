
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,ResponsiveContainer } from 'recharts'


export default function PerformanceComparisonChart(){

    const data = [
        { name: 'Command of Evidence: Quantitative', current: 85, previous: 78 },
        { name: 'Inferences', current: 92, previous: 88 },
        { name: 'Words in Context', current: 89, previous: 91 },
        { name: 'Text Structure & Purpose', current: 87, previous: 82 },
        { name: 'Cross-Text Connections', current: 90, previous: 82 },
        { name: 'Transitions', current: 90, previous: 82 },
        { name: 'Rhetorical Synthesis', current: 90, previous: 82 },
        { name: 'Form, Structure, and Sense', current: 90, previous: 82 },
        { name: 'Boundaries', current: 90, previous: 82 },  
        { name: 'Command of Evidence: Textual', current: 90, previous: 82 },  
        { name: 'Inferences', current: 90, previous: 82 },  
    ]

    const calculatePercentageChange = (current: number, previous: number) => {
        const change = current - previous
        return change.toFixed(1)
      }
    


    return(
        <div className="col-span-12
        xl:col-span-12 2xl:col-span-7 
        flex p-4 h-[28rem] order-4 mb-20" >
                <Card className="w-full select-none p-1">
                    <CardHeader>
                    <div className="flex-col">
                        <h2 className="text-xl font-bold">Perfomance by Question Type</h2>
                        <h3 className="text-md text-default-400">Check how you improved</h3>
                    </div>
                    </CardHeader>
                    <CardBody>

                    <ScrollShadow size={16}>
                        <div className={`w-full flex h-[52rem] my-6`}>
                        <ResponsiveContainer>
                            
                            <BarChart
                                layout="vertical"
                                width={1000}
                                height={500}
                                data={data}
                                
                                margin={{ top: 0, left: 20, right:100, bottom: 0 }}
                            >
                                
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis 
                                type="number" 
                                domain={[0, 100]} 
                                ticks={[0, 25, 50, 75, 100]} 
                                unit="%" 
                                
                                />
                                <YAxis dataKey="name" tickMargin={4} width={200} type="category" />
                                <Tooltip 
                                formatter={(value) => `${value}%`}
                                labelFormatter={(label) => `Question Type: ${label}`}
                                />
                                
                                <Bar dataKey="previous" fill="#414b5a" className="fill-slate-600" name="Previous Test">
                                </Bar>
                                <Bar dataKey="current" fill="#1e293b" className="fill-slate-800" name="Latest Test">
                                <LabelList 
                                    dataKey={(entry: any) => `${calculatePercentageChange(entry.current, entry.previous)}%`} 
                                    position="right" 
                                    formatter={(value:string) => (parseFloat(value) >= 0 ? `+${value}` : value)}
                                />
                                </Bar>
                                <Legend verticalAlign="top" height={40}/>
                            </BarChart>
                        </ResponsiveContainer>
                        </div>
                    </ScrollShadow>

                    </CardBody>
                
                    
                </Card>
        </div>
    )


}