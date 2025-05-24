"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Flame, Heart, Timer } from "lucide-react"

export default function StatsOverview() {
  // This would normally come from your data source
  const mockData = {
    today: {
      calories: 320,
      duration: 35,
      heartRate: 142,
      steps: 5280,
    },
    week: {
      calories: 2240,
      duration: 245,
      heartRate: 138,
      steps: 36940,
    },
    month: {
      calories: 9650,
      duration: 1050,
      heartRate: 135,
      steps: 158600,
    },
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="today">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>

        {Object.entries(mockData).map(([period, data]) => (
          <TabsContent key={period} value={period} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.calories}</div>
                  <p className="text-xs text-muted-foreground">kcal</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Workout Time</CardTitle>
                  <Timer className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.duration}</div>
                  <p className="text-xs text-muted-foreground">minutes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Heart Rate</CardTitle>
                  <Heart className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.heartRate}</div>
                  <p className="text-xs text-muted-foreground">bpm</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Steps</CardTitle>
                  <Activity className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.steps.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">steps</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Workout History</CardTitle>
                <CardDescription>Your recent workout sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {period === "today" ? (
                    <>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <div className="font-medium">Morning Cardio</div>
                          <div className="text-sm text-muted-foreground">7:30 AM • 20 min</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">180 kcal</div>
                          <div className="text-sm text-muted-foreground">Avg HR: 145</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Strength Training</div>
                          <div className="text-sm text-muted-foreground">5:45 PM • 15 min</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">140 kcal</div>
                          <div className="text-sm text-muted-foreground">Avg HR: 138</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="text-muted-foreground">View detailed history for this {period}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
