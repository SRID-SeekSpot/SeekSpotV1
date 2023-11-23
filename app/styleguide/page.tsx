"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="flex flex-col">
            <title>SeekSpot StyleGuide</title>
            <div className="m-4 flex flex-col items-center justify-center">
                <div className="flex flex-row w-96 ">
                    <Button asChild variant={"default"} className="w-16 mr-5">
                        <a href="/">Home</a>
                    </Button>
                    <p className="text-4xl text-center">Style Guides</p>
                </div>

                {/* Text Styles */}
                <Separator />
                <Card className="m-4 w-96">
                    <CardHeader>
                        <CardTitle>Texts</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <p className="text-3xl text-sky">
                            Light Blue -- sky -- muted
                        </p>
                        <p className="text-3xl text-mint">
                            Light Green -- mint -- primary
                        </p>
                        <p className="text-3xl text-grass">
                            Light Green -- grass -- accent
                        </p>
                        <p className="text-3xl text-trees">
                            Dark Green -- trees -- secondary
                        </p>
                        <p className="text-3xl text-navy">
                            Navy -- navy -- destructive
                        </p>
                    </CardContent>
                </Card>
                {/* Button Styles */}
                <Card className="m-4 w-96">
                    <CardHeader>
                        <CardTitle>Buttons</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Button variant={"default"}>Default</Button>
                        <Button variant={"secondary"}>Secondary</Button>
                        <Button variant={"outline"}>Outline</Button>
                        <Button variant={"link"}>Link</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
