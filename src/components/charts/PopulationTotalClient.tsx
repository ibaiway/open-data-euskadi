import { type BarChartProps, AreaChart } from "@tremor/react"
import { formatLargeNumber } from "../../lib/shared/formatters"

interface PopulationTotalClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function PopulationTotalClient(
  props: PopulationTotalClientProps
) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={formatLargeNumber}
      yAxisWidth={40}
      connectNulls
    />
  )
}
