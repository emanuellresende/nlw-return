import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
export default function CloseButton() {
  return (
    <Popover.Button title='Close Form' className=" top-5 right-5 absolute text-zinc-400 hover: text-zinc-100">
      <X weight='bold' className='w-4 h-4' />
    </Popover.Button>
  )
}
