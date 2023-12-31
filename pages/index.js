import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import { Card, CardContent,  CardFooter } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import { useTheme } from 'next-themes'
import { Skeleton } from '@/components/ui/skeleton'
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default  function Home() {
  const {setTheme} = useTheme();
  const router = useRouter();
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const carousel_img = [
    {img:'https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15407-1632754173.jpg'},
    {img:'https://media.gq.com/photos/64d515d227469240470eaf83/4:3/w_1500,h_1125,c_limit/adidas-sneakers.jpg'},
    {img:'https://images.solecollector.com/complex/images/c_crop,h_537,w_955,x_0,y_218/f_auto,fl_lossy,q_auto,w_1200/szzbfzfdwdpktz69suog/adidas-spezial-acid-winter-collection.jpg'}
  ]
  
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <hr/>
      <ScrollArea style={{margin:10}}>
        <Carousel className='mt-6' >
          <CarouselContent>
            <CarouselItem >
                  <img src={"https://media.gq.com/photos/64d515d227469240470eaf83/4:3/w_1500,h_1125,c_limit/adidas-sneakers.jpg"} className='bg-white-300 md:w-30 md:h-15 lg:w-full lg:object-cover lg:h-[550px] rounded-sm'/>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <Carousel className='mt-6' onClick={()=>{router.push('type/addidas')}}>
          <CarouselContent>
            <CarouselItem >
                  <img src={"https://footwearnews.com/wp-content/uploads/2022/01/adidas-trefoil-logo-worth.jpg"} className='bg-white-300 md:w-30 md:h-15 lg:w-full lg:object-cover lg:h-[550px] rounded-sm'/>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <Carousel className='mt-6' onClick={()=>{router.push(`type/${'nike'}`)}}>
          <CarouselContent>
            <CarouselItem >
                  <img src={"https://marathonhandbook.com/wp-content/uploads/Nike-Vs-Adidas-6.jpg"} className='bg-white-300 md:w-30 md:h-15 lg:w-full lg:object-cover lg:h-[550px] rounded-sm'/>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </ScrollArea>
      <hr/>
      <Footer/>
    </div>
  )
}
