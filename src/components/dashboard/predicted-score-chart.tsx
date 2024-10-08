import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

import { PieChart, Pie, Cell, Label } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"


type ScoreChange = {
    value: number
    isImprovement: boolean
}

export default function PredictedScoreChart({ score = 650, change = { value: 150, isImprovement: true } }: { score?: number, change?: ScoreChange }){


    const maxScore = 800
    const scorePercentage = (score / maxScore) * 100
    const remainingPercentage = 100 - scorePercentage;
    const changePercentage = (change.value / maxScore) * 100


    const data = [
        { name: "Score", value: scorePercentage, color: "fill-neutral-800"},
        { name: "Change", value: changePercentage, color: change.isImprovement ? "fill-green-400" : "fill-red-400" },
        { name: "Remaining", value: remainingPercentage, color: "fill-default-200" }
    ]

    return (

        <div className="order-1 lg:col-span-5 2xl:col-span-4 xl:col-span-5 col-span-12 h-[28rem] flex p-4" >

            <Card className="w-full pointer-events-none select-none p-1">
                <CardHeader>
                    <div className="flex-col">
                        <h2 className="text-xl font-bold">Predicted Score</h2>
                        <h3 className="text-md text-default-400">Your performance out of 800</h3>
                    </div>
                </CardHeader>

                <CardBody>
                    <div className={`w-full-auto flex justify-center`}>
                        <PieChart width={250} height={250}>
                            <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={96}
                            outerRadius={120}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={0}
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} className={entry.color}/>
                            ))}
                            <Label
                                content={({ viewBox }: any) => {
                                const { cx, cy } = viewBox;
                                return (
                                    <text 
                                    x={cx} 
                                    y={cy} 
                                    textAnchor="middle" 
                                    dominantBaseline="central"
                                    >
                                    <tspan 
                                        x={cx} 
                                        y={cy - 10} 
                                        className="text-5xl font-bold fill-neutral-800"
                                    >
                                        {score}
                                    </tspan>
                                    <tspan 
                                        x={cx} 
                                        y={cy + 20} 
                                        className="text-md fill-neutral-800"
                                    >
                                        out of {maxScore}
                                    </tspan>
                                    </text>
                                );
                                }}
                            />
                            </Pie>
                        </PieChart>
                        </div>
                </CardBody>


                <CardFooter className="flex justify-center">
                    <div className={`flex items-center gap-2`}>
                    {change.isImprovement ? (
                        <>
                        <TrendingUp className="h-4 w-4" />
                        <span>Improved by {change.value} points</span>
                        </>
                    ) : (
                        <>
                        <TrendingDown className="h-4 w-4"/>
                        <span>Decreased by {change.value} points</span>
                        </>
                    )}
                    </div>
                </CardFooter>
                
            </Card>

        </div>
    )
}














