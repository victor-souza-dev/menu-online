import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import User from "./User";

export function App() {

  const [people, setPeople] = useState([
    {
      "id": 1,
      "nome": "Caneca de Porcelana",
      "descricao": "Uma caneca branca de porcelana com borda dourada.",
      "preco": 12.99
    },
    {
      "id": 2,
      "nome": "Livro de Ficção",
      "descricao": "Um emocionante romance de ficção escrito por um autor renomado.",
      "preco": 24.95
    },
    {
      "id": 3,
      "nome": "Livro de Ficção",
      "descricao": "Um emocionante romance de ficção escrito por um autor renomado.",
      "preco": 24.95
    },
    {
      "id": 4,
      "nome": "Livro de Ficção",
      "descricao": "Um emocionante romance de ficção escrito por um autor renomado.",
      "preco": 24.95
    }



  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id);
        const newIndex = people.findIndex((person) => person.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }

    console.log("drag end");
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

              <User key={user.id} user={user} />
      

          </>
        ))}
      </SortableContext>


    </DndContext>


  );
}