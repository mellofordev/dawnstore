import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'
export default function Navbar(){
    const {setTheme} = useTheme();
    return(
    <header className='flex flex-row justify-between align-center m-[10px]'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">menu</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col justify-start'>
              <Button variant="ghost">Cloths</Button>
              <Button variant="ghost">WhatsApp</Button>
              <Button variant="ghost">Orders</Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className='text-slate-800 dark:text-white mt-1 font-bold text-2xl  '>Dawn Store</h1>
       <DropdownMenu>
        <DropdownMenuTrigger>theme</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Change theme</DropdownMenuLabel>
          <hr/>
          <DropdownMenuItem onClick={()=>{setTheme("light")}}>
            light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setTheme("dark")}}>
           dark
          </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
    </header>
    );
}