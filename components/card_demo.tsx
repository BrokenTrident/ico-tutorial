
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardDemo() {
  return (


    <div className="grid place-items-center h-screen w-screen">
      <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>ShadCn Demo</CardTitle>
        <CardDescription>
          Demonstrating how to implement shadcn components
        </CardDescription>
        <CardAction>
 
        </CardAction>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex-col gap-2">
       
      </CardFooter>
    </Card>

    </div>
    
  )
}
