import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function TableDataSession({ user }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <tr style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="p-4 rounded-md shadow-md my-2 text-slate-950 transition-colors even:bg-secondary-100 hover:bg-secondary-100 even:hover:bg-secondary-200">
        <td className="px-6 py-4">{user.nome}</td>
        <td className="px-6 py-4">{user.descricao}</td>
        <td className="px-6 py-4">{user.preco}</td>
        <td>🗑️</td>
      </tr >
    </>

  );
}

