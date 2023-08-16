
import { FormCreateSesion } from '@/components/_FormCreateSesion'
import { ListSesion } from '@/components/_ListSesion'


export default function Home() {
  return (
    <>
      <header className='bg-gray-900 h-10 text-white text-center p-2'>
        Gerador de cardapio
      </header>
      <div className="flex flex-1 px-9  ">
        <div>
          <FormCreateSesion />
          <ListSesion />
        
        </div>
        <div>
          hello word
        </div>
      </div>

    </>
  )
}
