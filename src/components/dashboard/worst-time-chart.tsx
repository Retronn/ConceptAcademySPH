import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ScrollShadow } from "@nextui-org/scroll-shadow";


export default function WorstTimeChart(){
    const [selectedColor, setSelectedColor] :any = useState("default");
    return(
        <div className="lg:col-span-7 col-span-12
        xl:col-span-7 2xl:col-span-5 
        flex p-4 h-[28rem] 2xl:order-5 lg:order-3 order-4" >
                <Card className="w-full select-none p-1">
                    <CardHeader>
                    <div className="flex-col">
                        <h2 className="text-xl font-bold">Time Drainers</h2>
                        <h3 className="text-md text-default-400">Question types you spend too much time on</h3>
                    </div>
                    </CardHeader>
                    <CardBody>
                    <ScrollShadow size={10}>
                        <Table 
                            color={selectedColor}
                            removeWrapper
                            isStriped
                            aria-label="Example static collection table"
                        >
                            <TableHeader>
                            <TableColumn>Question Type</TableColumn>
                            <TableColumn>Your Time</TableColumn>
                            <TableColumn>Recommended</TableColumn>
                            </TableHeader>
                            <TableBody>
                            <TableRow key="1">
                                <TableCell> Words in Context</TableCell>
                                <TableCell className="text-danger">01:33</TableCell>
                                <TableCell className="text-success">00:26</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Retorical Synthesis</TableCell>
                                <TableCell className="text-danger">01:12</TableCell>
                                <TableCell  className="text-success">00:19</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Cross-Text Connections</TableCell>
                                <TableCell className="text-danger">02:21</TableCell>
                                <TableCell  className="text-success">01:15</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Inferences</TableCell>
                                <TableCell className="text-danger">01:28</TableCell>
                                <TableCell  className="text-success">00:50</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Inferences</TableCell>
                                <TableCell className="text-danger">01:28</TableCell>
                                <TableCell  className="text-success">00:50</TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                    </ScrollShadow>
                    </CardBody>
                <CardFooter className="justify-center">
                    
                        <Button variant="flat" showAnchorIcon className="bg-neutral-800 text-default-50" href="/" as={Link}>See Detailed Analysis</Button>
                    
                    
                </CardFooter>
                    
                </Card>
        </div>
    )

}