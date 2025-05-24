"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, Pause, Play, RotateCcw } from "lucide-react"

export default function MachineControls() {
  const [resistance, setResistance] = useState(5)
  const [incline, setIncline] = useState(0)
  const [speed, setSpeed] = useState(3)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Machine Controls</CardTitle>
          <CardDescription>Adjust your workout machine settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="resistance">Resistance</Label>
              <span className="font-medium">{resistance}</span>
            </div>
            <Slider
              id="resistance"
              min={1}
              max={20}
              step={1}
              value={[resistance]}
              onValueChange={(value) => setResistance(value[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Light</span>
              <span>Heavy</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="incline">Incline</Label>
              <span className="font-medium">{incline}°</span>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIncline(Math.max(0, incline - 1))}
                disabled={incline === 0}
              >
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Slider
                id="incline"
                min={0}
                max={15}
                step={1}
                value={[incline]}
                onValueChange={(value) => setIncline(value[0])}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIncline(Math.min(15, incline + 1))}
                disabled={incline === 15}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="speed">Speed</Label>
              <span className="font-medium">{speed.toFixed(1)} mph</span>
            </div>
            <Slider
              id="speed"
              min={0.5}
              max={12}
              step={0.1}
              value={[speed]}
              onValueChange={(value) => setSpeed(value[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Walk</span>
              <span>Run</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Switch id="active" checked={isActive} onCheckedChange={setIsActive} />
            <Label htmlFor="active">Machine Active</Label>
          </div>

          <div className="flex gap-2 pt-2">
            <Button className="flex-1 gap-2" disabled={!isActive}>
              <Play className="h-4 w-4" />
              Start
            </Button>
            <Button variant="outline" className="flex-1 gap-2" disabled={!isActive}>
              <Pause className="h-4 w-4" />
              Pause
            </Button>
            <Button variant="secondary" size="icon" disabled={!isActive}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workout Modes</CardTitle>
          <CardDescription>Select a workout mode for your machine</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="standard">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="interval">Interval</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="h-auto py-4 flex flex-col">
                  <span className="text-lg font-medium">Cardio</span>
                  <span className="text-xs text-muted-foreground">30 min</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col">
                  <span className="text-lg font-medium">Strength</span>
                  <span className="text-xs text-muted-foreground">25 min</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col">
                  <span className="text-lg font-medium">Endurance</span>
                  <span className="text-xs text-muted-foreground">45 min</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col">
                  <span className="text-lg font-medium">Fat Burn</span>
                  <span className="text-xs text-muted-foreground">20 min</span>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="interval" className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-auto py-4 flex flex-col">
                    <span className="text-lg font-medium">HIIT</span>
                    <span className="text-xs text-muted-foreground">20 min</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col">
                    <span className="text-lg font-medium">Tabata</span>
                    <span className="text-xs text-muted-foreground">15 min</span>
                  </Button>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm font-medium">Interval Pattern</div>
                  <div className="mt-2 flex items-center gap-1">
                    <div className="h-8 flex-1 bg-emerald-100 rounded flex items-center justify-center text-xs font-medium text-emerald-800">
                      30s High
                    </div>
                    <div className="h-8 flex-1 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-800">
                      15s Rest
                    </div>
                    <div className="h-8 flex-1 bg-emerald-100 rounded flex items-center justify-center text-xs font-medium text-emerald-800">
                      30s High
                    </div>
                    <div className="h-8 flex-1 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-800">
                      15s Rest
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="pt-4">
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="text-muted-foreground">Create your own custom workout pattern</div>
                <Button className="mt-4">Create Custom Program</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
