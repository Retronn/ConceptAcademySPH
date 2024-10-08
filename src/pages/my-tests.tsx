import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import DefaultLayout from "@/layouts/default";
import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { PlayIcon, TrashIcon } from "@/components/icons";

export default function MyTestsPage() {
  return (
    <DefaultLayout activeSection="My Tests">
      <section className="flex flex-col gap-4 h-full w-full">
      
      <div className="flex gap-10 items-center">
        <h1 className="text-2xl font-bold">Your Tests</h1>
        <Tabs aria-label="Options" defaultSelectedKey="english" disabledKeys={["math"]} radius="sm"  >
          <Tab key="english" title="Active"/>
          <Tab key="math" title="Past"/>
        </Tabs>
      </div>

      <ScrollShadow className="px-4 gap-6 grid grid-cols-12 py-6">
            <TestCard/>
            <TestCard/>
            <TestCard/>
            <TestCard/>
      </ScrollShadow>
      </section>
    </DefaultLayout>
  );
}


const TestCard = () =>{

  const testNumber = 2
  const testStatus = "In progress..."
  const testDate = "01.01.2024"
  return(
    <Card className="2xl:col-span-3 xl:col-span-4 min-[880px]:col-span-6 h-36 col-span-12">
      <CardBody className="flex flex-row">

          <div className="flex-grow h-full px-4 flex flex-col gap-2"> 
            <p className="font-bold select-none">SAT Practice <br/> Test</p>
            <div className="flex flex-col flex-grow gap-2 justify-end">


              <div className="flex h-[1.6rem] w-full gap-2 select-none">
                <div className="flex-grow text-sm bg-default-200 rounded-md flex justify-center items-center">
                  {testStatus}
                </div>

                
                <Button variant="bordered" className="max-h-full p-0 aspect-square min-w-0 border-primary-900 rounded-md text-default-50 flex justify-center items-center">
                    <TrashIcon strokeWidth={1.5} className="stroke-primary-900" size={16}/>
                </Button>
                
              </div>
              

              <div className="flex h-[1.6rem] w-full gap-2 select-none">
                <div className="flex-grow text-sm bg-default-200 rounded-md flex justify-center items-center">
                  {testDate}
                </div>

                <Button className="h-full p-0 min-w-0 w-12 bg-primary-900 rounded-md text-default-50 flex justify-center items-center">
                    <PlayIcon size={16} strokeWidth={1.5}/>
                </Button>
              </div>


            </div>
          </div>


          <Button className="h-full w-16 bg-default-200 flex items-center justify-center rounded-lg aspect-square">
            <p className="text-7xl font-bold text-primary-900 opacity-85">{testNumber}</p>
          </Button>
      </CardBody>
    </Card>
  )
}