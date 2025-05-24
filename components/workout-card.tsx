import Image from "next/image"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

interface WorkoutCardProps {
  title: string
  description: string
  image: string
  intensity: "Low" | "Medium" | "High"
}

export default function WorkoutCard({ title, description, image, intensity }: WorkoutCardProps) {
  const intensityColor = {
    Low: "bg-green-100 text-green-800 hover:bg-green-200",
    Medium: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    High: "bg-red-100 text-red-800 hover:bg-red-200",
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-[140px] w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Badge variant="outline" className={intensityColor[intensity]}>
            {intensity}
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="p-4">
        <Button className="w-full gap-2">
          <Play className="h-4 w-4" />
          Start Workout
        </Button>
      </CardFooter>
    </Card>
  )
}
