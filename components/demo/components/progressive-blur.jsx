// "use client"

// import { ScrollArea, ProgressiveBlur } from "@/components/ui"

// export function ProgressiveBlurDemo() {
//   return (
//     <div className="relative w-full rounded-xl border">
//       <ScrollArea className="relative h-[400px] overflow-hidden">
//         <div className="flex flex-col gap-2 p-4">
//           {Array.from({ length: 20 }).map((_, index) => (
//             <div
//               key={index}
//               className="bg-card flex h-20 w-full items-center justify-center rounded-xl border"
//             >
//               {index}
//             </div>
//           ))}
//         </div>
//         <ProgressiveBlur position="bottom" height="40%" />
//       </ScrollArea>
//     </div>
//   )
// }



import { ProgressiveBlur } from "@/components/ui/"

export function ProgressiveBlurStart() {
  return (
    <div className="relative bg-amber-600 h-[300px] w-full overflow-auto">

      <div className="space-y-4 p-4">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>

      <ProgressiveBlur height="50%" position="bottom" />
    </div>
  )
}