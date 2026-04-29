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



import { ProgressiveBlur } from "@/components/ui/magic"

export function ProgressiveBlurDemoStart() {
  return (
    <div className="relative bg-amber-100 h-[300px] w-full max-w-[500px] mx-auto overflow-auto">

      <div className="flex flex-col space-y-4 p-4">
        <div >1</div>
        <div >2</div>
        <div >3</div>
        <div >4</div>
        <div >5</div>
        <div >6</div>
        <div >7</div>
        <div >8</div>
        <div >9</div>
        <div >10</div>
        <div >11</div>
        <div >12</div>
        <div >13</div>
        <div >14</div>
        <div >15</div>
        <div >16</div>
        <div >17</div>
        <div >18</div>
        <div >19</div>
        <div >20</div>
      </div>

      <ProgressiveBlur height="50%" position="bottom"/>
    </div>
  )
}