import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";



export default function UserStreak(){
    const StreakDay = 7;
    return(
        <div className="lg:order-4 order-3 2xl:order-3 lg:col-span-5 2xl:col-span-3 xl:col-span-5 col-span-12 h-[28rem] flex p-4" >
            <Card className="w-full p-1">
                <CardHeader>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold">Weekly Streak</h2>
                        <h3 className="text-md text-default-400">How regularly you practice</h3>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-4 w-full items-center">

                        <div className={`w-44 h-44 rounded-full flex gap items-center justify-center border-2 shadow-lg select-none`}>
                            
                            <img src="./StreakFire.svg" className="h-32"/>
                        </div>
                        
                        <div className="bg-neutral-800 rounded-full">
                            <p className="text-default-100 my-2 mx-4 text-xl font-bold">{StreakDay} Day Streak!</p>
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex gap-2 w-full justify-center">
                        
                        <StreakDayCircle 
                                isMarked={true} 
                                dOfTheWeek="Mon"
                                date={23}
                        />
                        <StreakDayCircle 
                                isMarked={true} 
                                dOfTheWeek="Tue"
                                date={24}
                        />

                        <StreakDayCircle 
                                isMarked={false} 
                                dOfTheWeek="Wed"
                                date={25}
                        />

                        <StreakDayCircle 
                                isMarked={false} 
                                dOfTheWeek="Thu"
                                date={26}
                        />

                        <StreakDayCircle 
                                isMarked={false} 
                                dOfTheWeek="Fri"
                                date={27}
                        />


                        
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

type StreakDayCircle = {
    isMarked:boolean,
    dOfTheWeek:string,
    date: number,
}

const StreakDayCircle = ({isMarked, dOfTheWeek, date}:StreakDayCircle) =>{
    return(
        <div className="flex flex-col items-center gap-1">
            <p className="text-xs">{dOfTheWeek}</p>
            <div className={`${(isMarked) ? "bg-orange-600" : ""} border-2 border-orange-600 h-7 w-7 text-center rounded-full`}>
                <p className={`text-xs font-semibold m-1 ${(isMarked) ? "text-default-100" : "text-default-700"}`}>{(isMarked) ? "✔" : date}</p>
            </div>
        </div>
    )
}