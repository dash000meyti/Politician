import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui"
import { WarpBackground } from "@/components/ui/magic"

export function WarpBackgroundDemoStart() {
  return (
    <WarpBackground className="w-full max-w-2xl">
      <div className="text-center">
        <h3 className="text-xl font-semibold">Warp Background</h3>
        <p className="text-sm text-muted-foreground">
          A perspective grid with falling beams.
        </p>
      </div>
    </WarpBackground>
  )
}

export function WarpBackgroundDemo() {
  return (
    <WarpBackground className="w-full max-w-2xl">
      <Card className="mx-auto w-80 bg-background">
        <CardContent className="flex flex-col gap-2 p-4">
          <CardTitle>Congratulations on Your Promotion!</CardTitle>
          <CardDescription>
            Your hard work and dedication have paid off. We&apos;re excited to
            see what you accomplish next.
          </CardDescription>
        </CardContent>
      </Card>
    </WarpBackground>
  )
}
