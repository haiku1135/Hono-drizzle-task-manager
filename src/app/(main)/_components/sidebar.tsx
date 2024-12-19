import { Button } from '@/components/ui/button'
import { SquareArrowDown } from 'lucide-react'
import React from 'react'
import { sideBarItems } from '@/app/constants'


export default function Sidebar() {
  return (
    <nav className='sticky top-20 h-full md:w-64 p-6'>
      <ul className='space-y-2'>
        {
          sideBarItems.map((item) => (
            <li key={item.id}>
              <Button className='w-full gap-2'>
                <SquareArrowDown className='w-4 h-4' />
                <span className='hidden md:inline'>{item.title}</span>
              </Button>
            </li>
          ))
        }

      </ul>
    </nav>
  )
}
