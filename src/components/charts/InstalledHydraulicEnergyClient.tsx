import { type BarChartProps, AreaChart } from "@tremor/react"
import { formatLargeNumber } from "../../lib/shared/formatters"

interface InstalledHydraulicEnergyClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function InstalledHydraulicEnergyClient(
  props: InstalledHydraulicEnergyClientProps
) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}`}
      yAxisWidth={40}
      yAxisLabel="KW por 10.000 habitantes"
      connectNulls
    />
  )
}