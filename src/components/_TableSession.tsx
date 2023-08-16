import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import {TableDataSession} from "./_TableDataSession";

export function TableSession() {

  const [people, setPeople] = useState([
    {
      "id": 1,
      "nome": "Coca-cola",
      "descricao": "350ml Lata",
      "preco": 12.99
    },
    {
      "id": 2,
      "nome": "Fanta",
      "descricao": "1 Litro",
      "preco": 24.95
    },
    {
      "id": 3,
      "nome": "Guarana",
      "descricao": "1 Litro",
      "preco": 24.95
    },
    
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setPeople((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id);
        const newIndex = people.findIndex((person) => person.id === over.id);
        return arrayMove(people, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={people}
        strategy={verticalListSortingStrategy}
      >
        {people.map((user) => (
          <>
              <TableDataSession key={user.id} user={user} />
          </>
        ))}
      </SortableContext>


    </DndContext>


  );
}