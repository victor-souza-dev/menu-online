import { Icos } from "./ui/icons/";
import { Input } from "./ui/input";

export function FormCreateSesion() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex gap-3 mt-3 ">
        <div className="w-full ">
          <label htmlFor="Nome da  nova sessão">Nome da  nova sessão</label>
          <input type="text" id="search-form-price" className="border-2 border-gray-500/10 rounded-lg  flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-[2.5rem]" placeholder="Digite nome da nova sessão" />
        </div>
        <div className="flex items-center justify-between mt-[23px]">
          <button type="submit" className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg w-[12rem] h-[2.5rem] flex justify-center items-center ">
            <Icos.Plus />
            Nova Sessão
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <Input label="Logo" type="file" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Input label="Nome do produto" type="text" placeholder="produto" />
        <Input label="Preço do produto" type="text" placeholder="preço" />
      </div>
    </div>
  )
}