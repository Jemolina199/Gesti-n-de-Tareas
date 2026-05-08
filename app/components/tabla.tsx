"use client"

import { useTareas } from "../context/context"

const estados = ["Pendiente", "En Proceso", "Completada"]

export default function Tabla() {
  const { tareas, cambiarEstado, eliminarTarea } = useTareas()

  if (tareas.length === 0) {
    return <p>No hay tareas todavia.</p>
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ backgroundColor: "#f0f0f0" }}>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Titulo</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Descripcion</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Estado</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea: any) => (
          <tr key={tarea.id}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{tarea.id}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{tarea.titulo}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{tarea.descripcion}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <select
                value={tarea.estado}
                onChange={e => cambiarEstado(tarea.id, e.target.value)}
              >
                {estados.map(e => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}