import React from 'react'
import { Card,CardHeader,CardTitle,CardContent,CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
const carddetail = ({prop}) => {
  console.log(data);
  console.log(name);
  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <Card>
       <CardHeader>
          <CardTitle>
            {name}
          </CardTitle>
          <div className="border-b"></div>
          <CardDescription>
            {data.map((item)=>(<p className='mx-2 flex flex-wrap'>{item}</p>))}
          </CardDescription>
          <CardContent>
            <Button onClick={()=>setOpen(true)}>
              Details
            </Button>
          </CardContent>
       </CardHeader>
    </Card>
    </div>
  )
}

export default carddetail