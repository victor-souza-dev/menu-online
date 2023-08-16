interface InputProps {
  label: string
  placeholder?: string
  type: 'text' | "number" | 'file'
}

export function Input({ label, placeholder, type }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="Nome da  nova sessão">{label}</label>
      {type === 'file'
        ?
        <input
          type='file'
          className="border-2 border-gray-500/10 rounded-lg  flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-[2.5rem]" />
        :
        <input type={type} id="search-form-price" className="border-2 border-gray-500/10 rounded-lg  flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-[2.5rem]" placeholder={placeholder} />
      }
    </div>
  )
}