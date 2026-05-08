"use client"

import Forma from "./components/forma"
import Tabla from "./components/tabla"

export default function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Gestor de Tareas</h1>
      <Forma />
      <Tabla />
    </main>
  )
}