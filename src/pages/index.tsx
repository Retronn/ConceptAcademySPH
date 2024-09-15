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
import PredictedScoreChart from "@/components/dashboard/predicted-score-chart";
import ScoreProgressionChart from "@/components/dashboard/score-progression-chart";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 h-full">
      
      <div className="flex gap-10 items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Tabs aria-label="Options" defaultSelectedKey="english" disabledKeys={["math"]} radius="sm"  >
          <Tab key="english" title="English"/>
          <Tab key="math" title="Math"/>
        </Tabs>
      </div>

      <ScrollShadow className="grid grid-cols-12 flex-grow">
            
          <PredictedScoreChart/>
          <ScoreProgressionChart/>

      </ScrollShadow>

      </section>
    </DefaultLayout>
  );
}
