import { type BarChartProps, AreaChart } from "@tremor/react"
import { formatLargeNumber } from "../../lib/shared/formatters"

interface InstalledWindEnergyClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function InstalledWindEnergyClient(
  props: InstalledWindEnergyClientProps
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
