import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {

  return (
    <Popover className='absolute bottom-5 right-5'>
      <Popover.Panel><p>asd</p></Popover.Panel>
      <Popover.Button className=' group items-center flex text-white bg-brand-500 rounded-full px-3 h-12'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='transition-all duration-700 ease-linear group-hover:max-w-xs max-w-0 overflow-hidden'>
          <span className='pl-2' />
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  )
}
