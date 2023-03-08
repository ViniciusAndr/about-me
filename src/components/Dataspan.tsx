import { useState } from 'react';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons'
import Styles from '../styles/Dataspan.module.css'

export default function Dataspan() {

  const [open, setOpen] = useState(false);

  return (
    <div className='min-w-0 h-auto'>
      <div className="flex gap-4 mt-4 hover:cursor-pointer" onClick={() => setOpen(!open)}> 
        <span className="bg-gray-700 px-2 py-0.5 rounded-2xl">2022-01 ~ 2023-01</span>
        <div>Benner Sistemas S/A</div>
        <span>
          {
            !open ? <UilAngleDown /> : <UilAngleUp />
          }
        </span>
      </div>
      <div className={`text-sm mt-2 ${Styles.description} ${open ? "" : Styles.collapsedDescription}`}>
         Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
      </div>
    </div>
  );
}
