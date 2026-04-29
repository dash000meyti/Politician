import { Badge } from "@/components/ui"
import { Button } from "@/components/ui"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui"
import { GlareHover } from "@/components/ui"
import { InfoIcon,
  TriangleAlertIcon,CheckCircleIcon } from "lucide-react"

export function GlareHoverDemo() {
  return (
    <GlareHover className="rounded-2xl" duration={1500} color="#D3AF37" opacity={0.34}>
      <Card className="w-sm border-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Pro</CardTitle>
            <Badge>Popular</Badge>
          </div>
          <CardDescription>For teams that need more.</CardDescription>
          <div className="flex items-baseline gap-1 pt-2">
            <span className="text-4xl font-semibold tracking-tight">$49</span>
            <span className="text-muted-foreground text-sm">/mo</span>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2.5">
          {[
            "Unlimited projects",
            "Team collaboration",
            "Advanced analytics",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M12.5 3.5L6 10L2.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {f}
            </div>
          ))}
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle
                cx="7.5"
                cy="7.5"
                r="1.5"
                fill="currentColor"
                opacity="0.4"
              />
            </svg>
            SSO (coming soon)
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get started</Button>
        </CardFooter>
      </Card>
    </GlareHover>
  )
}

export function GlareHoverDemoAlerts() {
  return (
    <div className="flex flex-col gap-3">
      <GlareHover className="rounded-lg" duration={1000} opacity={0.25} color="#000">
        <Alert className="[&>svg~*]:pl-10">
          <InfoIcon />
          <AlertTitle>Action required</AlertTitle>
          <AlertDescription>
            Your plan expires in 3 days. Renew to keep access.
          </AlertDescription>
        </Alert>
      </GlareHover>
      <GlareHover
        className="w-full rounded-lg"
        color="#ff6070"
        opacity={0.25}
        duration={1000}
      >
        <Alert variant="destructive" className="bg-background [&>svg~*]:pl-10">
          <TriangleAlertIcon />
          <AlertTitle>Payment declined</AlertTitle>
          <AlertDescription>
            Check your card details and try again.
          </AlertDescription>
        </Alert>
      </GlareHover>
      <GlareHover
        className="w-full rounded-lg"
        color="#60ff70"
        opacity={0.25}
        duration={1000}
      >
        <Alert className="[&>svg~*]:pl-10">
          <CheckCircleIcon className="stroke-emerald-500" />
          <AlertTitle className="text-emerald-500">
            Subscription confirmed
          </AlertTitle>
          <AlertDescription className="text-emerald-500">
            You have full Pro access until April 5, 2027.
          </AlertDescription>
        </Alert>
      </GlareHover>
    </div>
  )
}