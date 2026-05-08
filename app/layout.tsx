import { TaskProvider } from "./context/context"
import "./globals.css"

export const metadata = {
  title: "Gestor de Tareas"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  )
}
