"use client"

import { createContext, useContext, useState } from "react"

// tipo para cada tarea
type Tarea = {
  id: number
  titulo: string
  descripcion: string
  estado: string
}

// aqui creo el contexto
const TaskContext = createContext<any>(null)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tareas, setTareas] = useState<Tarea[]>([])

  // funcion para agregar tarea
  function agregarTarea(titulo: string, descripcion: string) {
    const nueva: Tarea = {
      id: Date.now(),
      titulo,
      descripcion,
      estado: "Pendiente"
    }
    setTareas([...tareas, nueva])
  }

  // funcion para cambiar el estado
  function cambiarEstado(id: number, nuevoEstado: string) {
    const actualizadas = tareas.map(t => {
      if (t.id === id) {
        return { ...t, estado: nuevoEstado }
      }
      return t
    })
    setTareas(actualizadas)
  }

  // funcion para eliminar
  function eliminarTarea(id: number) {
    const filtradas = tareas.filter(t => t.id !== id)
    setTareas(filtradas)
  }

  return (
    <TaskContext.Provider value={{ tareas, agregarTarea, cambiarEstado, eliminarTarea }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTareas() {
  return useContext(TaskContext)
}