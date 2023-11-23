import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <title>SeekSpot StyleGuide</title>
            <div>
                <h1 className="text-3xl">StyleGuide Colors</h1>
                <h1 className="text-3xl text-sky">Light Blue -- sky -- muted</h1>
                <h1 className="text-3xl text-mint">Light Green -- mint -- primary</h1>
                <h1 className="text-3xl text-grass">Light Green -- grass -- accent</h1>
                <h1 className="text-3xl text-trees">Dark Green -- trees -- secondary</h1>
                <h1 className="text-3xl text-navy">Navy -- navy -- destructive</h1>
            </div>
            <Button asChild variant={"default"}>
                <a href="/">Home</a>
            </Button>
        </div>
    );
}
