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
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default  function Type() {
  const {setTheme} = useTheme();
  const router = useRouter();
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const carousel_img = [
    {img:'https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15407-1632754173.jpg'},
    {img:'https://media.gq.com/photos/64d515d227469240470eaf83/4:3/w_1500,h_1125,c_limit/adidas-sneakers.jpg'},
    {img:'https://images.solecollector.com/complex/images/c_crop,h_537,w_955,x_0,y_218/f_auto,fl_lossy,q_auto,w_1200/szzbfzfdwdpktz69suog/adidas-spezial-acid-winter-collection.jpg'}
  ]
  const api = ()=>{
    fetch(`https://dawstoreapi.pythonanywhere.com/api/${router.query.id}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data.products)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(() => {
    api();
  }, [])

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <hr/>
      <ScrollArea style={{margin:10}}>
      <Button variant="ghost" className="m-4" onClick={()=>{router.back()}}><MoveLeft/></Button>
        <Carousel  plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}>
          <CarouselContent>
            {carousel_img.map((i)=>{
              return (
                <CarouselItem >
                  <img src={i.img} className='bg-white-300 md:w-30 md:h-15 lg:w-full lg:object-cover lg:h-[550px] rounded-sm'/>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className='grid grid-cols-2 gap-2 lg:justify-items-center'>
        {isLoading==true && <Skeleton className="w-[100px] h-full rounded-full" />}
        {data.map((i)=>{
          return(
          <Card className="w-[180px] mt-5 " onClick={()=>{router.push(`/product/${i.name}`)}}>
            
            <CardContent  className="flex aspect-square items-center justify-center p-1">
              <img src={`https://dawstoreapi.pythonanywhere.com${i.pic}/`} className='w-full h-full object-cover rounded-lg' />
            </CardContent>
            <CardFooter className="flex flex-col justify-evently">
              <span>{i.name}</span>
              <span className='ml-1'>{i.prize}</span>
            </CardFooter>
          </Card>
          );
        })}
        </div>

      </ScrollArea>
      <hr/>
      <Footer/>
    </div>
  )
}
