"use client"

import { App } from './item';

export function SesionItem() {
  return (
    <>
      <div className="mt-6">
        <div className="bg-gray-500 p-2 rounded-lg text-white">
          <h1>Refrigerantes</h1>
        </div>
        <table className="mt-6 hidden w-full table-auto text-left md:table">
          <thead>
            <tr>
              <th className="w-1/12 px-6 py-4 text-label font-normal text-secondary">Produto</th>
              <th className="w-1/3 px-6 py-4 text-label font-normal text-secondary">Descriçao</th>
              <th className="w-1/3 px-6 py-4 text-label font-normal text-secondary">Preço</th>
              <th className="w-1/3 px-6 py-4 text-label font-normal text-secondary"></th>
            </tr>
          </thead>
          <tbody>
            <App />
          </tbody>
        </table>

      </div>
    </>
  )
}