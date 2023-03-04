import LayoutShell from "@/application/components/layout"
import { Box } from "@mantine/core"
import { ReactNode } from "react"

type LayoutProviderProps = { 
    children: ReactNode
}

function LayoutProvider({ children }: LayoutProviderProps) {

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', marginInline: 'auto', padding: "0 20px" }} >
        <LayoutShell>
            {children}
        </LayoutShell>
    </Box>
  )

}

export default LayoutProvider