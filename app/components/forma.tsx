"use client"

import { useState } from "react"
import { useTareas } from "../context/context"

export default function Forma() {
  const { agregarTarea } = useTareas()
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // no agregar si el titulo esta vacio
    if (titulo == "") return
    agregarTarea(titulo, descripcion)
    setTitulo("")
    setDescripcion("")
  }

  return (
    <div>
      <h2>Agregar tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder="Escribe el titulo"
            style={{ display: "block", marginBottom: "10px", padding: "5px" }}
          />
        </div>
        <div>
          <label>Descripcion:</label>
          <textarea
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            placeholder="Escribe la descripcion"
            style={{ display: "block", marginBottom: "10px", padding: "5px" }}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}