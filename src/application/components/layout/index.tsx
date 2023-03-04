import { AppShell } from "@mantine/core"
import { ReactNode } from "react"
import Header from "../core/header"
import Hero from "../core/hero"

type LayoutShellProps = { 
    children: ReactNode
}


function LayoutShell({ children }: LayoutShellProps) {
  return (
    <AppShell
     padding="md"
     header={<Header />}
    >
      <Hero />
        {children}
   </AppShell>
  )
}

export default LayoutShell