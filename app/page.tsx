import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <title>SRID HomePage</title>
            <p className="text-3xl">
                This is the SeekSpot Project for SRID course
            </p>
            <Button asChild variant={"default"}>
                <a href="/styleguide">StyleGuide Definition</a>
            </Button>
        </div>
    );
}
