import Navbar from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { CardContent,CardFooter } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/router";
import { MoveLeft } from "lucide-react";
import { useEffect,useState } from "react";
export default function Product(){
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();
    const api = ()=>{
      fetch(`https://dawstoreapi.pythonanywhere.com/getproducts/${router.query.id}`)
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
    return(
        <div className='flex flex-col'>
            <Navbar/>
            <hr/>
            <ScrollArea >
                {isLoading==true  ? 
                <div className="flex items-center space-x-4 h-dvh">
                    <div className="space-y-2">
                    <Skeleton className="h-[300px] w-full" />
                    </div>
                </div>
                :(
                <>
                <Button variant="ghost" className="m-4" onClick={()=>{router.back()}}><MoveLeft/></Button>
                <Card className="w-full h-dvh mt-3">                
                <CardContent  className="flex aspect-square items-center justify-center p-1">
                <img src={`https://dawstoreapi.pythonanywhere.com${data.pic}/`} className='w-full h-full object-cover p-4' />
                </CardContent>
                <CardFooter className="flex-col items-start">
                <span className="text-slate-800 dark:text-white mt-1 font-bold text-4xl">{data.name}</span>
                <span className="mt-3">{data.discription}</span>
                <span className='mt-3'>${data.prize}</span>
                <Button size className="mt-3 h-10 rounded-md px-8">Enquire</Button>
                </CardFooter>
                </Card>
                </>
                )
                }
            </ScrollArea>
            <hr/>
            <Footer/>
        </div>
    );
}