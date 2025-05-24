import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Dumbbell, History, LineChart, Settings, User } from "lucide-react"
import WorkoutCard from "@/components/workout-card"
import MachineControls from "@/components/machine-controls"
import StatsOverview from "@/components/stats-overview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Activity className="h-6 w-6 text-emerald-500" />
            <span>FitTech</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-foreground">
              Dashboard
            </Link>
            <Link href="/workouts" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Workouts
            </Link>
            <Link href="/progress" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Progress
            </Link>
            <Link href="/settings" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Settings
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full">
              <CardHeader className="pb-2">
                <CardTitle>Welcome back, Alex!</CardTitle>
                <CardDescription>You've completed 70% of your weekly workout goal.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Weekly Progress</div>
                    <div className="font-medium">7/10 workouts</div>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="quick-start" className="col-span-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="quick-start">Quick Start</TabsTrigger>
                <TabsTrigger value="machine-controls">Machine Controls</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="quick-start" className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <WorkoutCard
                    title="Full Body Strength"
                    description="30 min • Intermediate"
                    image="/placeholder.svg?height=200&width=300"
                    intensity="Medium"
                  />
                  <WorkoutCard
                    title="HIIT Cardio"
                    description="20 min • Advanced"
                    image="/placeholder.svg?height=200&width=300"
                    intensity="High"
                  />
                  <WorkoutCard
                    title="Recovery Stretch"
                    description="15 min • Beginner"
                    image="/placeholder.svg?height=200&width=300"
                    intensity="Low"
                  />
                  <WorkoutCard
                    title="Upper Body Focus"
                    description="25 min • Intermediate"
                    image="/placeholder.svg?height=200&width=300"
                    intensity="Medium"
                  />
                  <WorkoutCard
                    title="Core Strength"
                    description="20 min • Intermediate"
                    image="/placeholder.svg?height=200&width=300"
                    intensity="Medium"
                  />
                  <WorkoutCard
                    title="Lower Body Power"
                    description="30 min • Advanced"
                    image="/placeholder.svg?height=200&width=300"
                    intensity="High"
                  />
                </div>
              </TabsContent>
              <TabsContent value="machine-controls" className="pt-4">
                <MachineControls />
              </TabsContent>
              <TabsContent value="stats" className="pt-4">
                <StatsOverview />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-4 md:py-0">
        <div className="container">
          <div className="flex flex-col md:hidden items-center justify-between">
            <nav className="flex items-center space-x-4 py-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <Dumbbell className="h-5 w-5" />
                  <span className="sr-only">Workouts</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/history">
                  <History className="h-5 w-5" />
                  <span className="sr-only">History</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/progress">
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Progress</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/settings">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
