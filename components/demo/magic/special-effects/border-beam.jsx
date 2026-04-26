import { Button } from "@/components/ui"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui"
import { Input } from "@/components/ui"
import { Label } from "@/components/ui"
import { BorderBeam } from "@/components/ui"

export function BorderBeamDemo() {
  return (
    <Card className="relative max-w-sm w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Register</Button>
        <Button>Login</Button>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  )
}

export function BorderBeamDemoComponent() {
  return (
    <Button className="relative overflow-hidden" size="lg" variant="outline">
      Buy Now
      <BorderBeam
        size={50}
        initialOffset={15}
        className="from-transparent via-yellow-500 to-transparent"
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 50,
        }}
      />
    </Button>
  )
}