import { Button } from '@/components/ui/button'
import { GithubIcon, InstagramIcon,TwitterIcon } from 'lucide-react'
export default function Footer(){
    return(
    <div className='flex flex-col justify-center items-center h-[100px] bg-black '>
        <span className='flex flex-row px-1 leading-1 text-white'>Dawn Store</span>
        <div className='flex justify-between '>
           <Button onClick={()=>{window.open('https://twitter.com/boywithacap/')}} variant="ghost"><TwitterIcon color='white'/></Button>
           <Button  onClick={()=>{window.open('https://github.com/mellofordev/')}} variant="ghost"><GithubIcon  color='white'/></Button>
           <Button onClick={()=>{window.open('https://instagram.com/sreedhar_k.s/')}} variant="ghost"><InstagramIcon color='white'/></Button>
        </div>
      </div>
    );
}