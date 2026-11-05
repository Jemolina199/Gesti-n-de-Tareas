"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Estado = "Pendiente" | "En Proceso" | "Completada"
export type Tarea = { id: string; titulo: string; descripcion: string; estado: Estado }
type TaskContextValue = {
  tareas: Tarea[]
  agregarTarea: (titulo: string, descripcion: string) => void
  cambiarEstado: (id: string, nuevoEstado: Estado) => void
  eliminarTarea: (id: string) => void
}
const TaskContext = createContext<TaskContextValue | undefined>(undefined)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tareas, setTareas] = useState<Tarea[]>([])
  function agregarTarea(titulo: string, descripcion: string) {
    if (!titulo.trim()) return
    const nueva: Tarea = {
      id: crypto.randomUUID(), titulo: titulo.trim(), descripcion: descripcion.trim(), estado: "Pendiente"
    }
    setTareas(actuales => [...actuales, nueva])
  }
  function cambiarEstado(id: string, nuevoEstado: Estado) {
    setTareas(actuales => actuales.map(t => t.id === id ? { ...t, estado: nuevoEstado } : t))
  }
  function eliminarTarea(id: string) {
    setTareas(actuales => actuales.filter(t => t.id !== id))
  }
  return <TaskContext.Provider value={{ tareas, agregarTarea, cambiarEstado, eliminarTarea }}>{children}</TaskContext.Provider>
}
export function useTareas() {
  const context = useContext(TaskContext)
  if (!context) throw new Error("useTareas requiere TaskProvider")
  return context
}
