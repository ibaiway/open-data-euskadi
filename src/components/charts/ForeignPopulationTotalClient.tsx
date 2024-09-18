import { type BarChartProps, AreaChart } from "@tremor/react"

interface ForeignPopulationTotalClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function ForeignPopulationTotalClient(
  props: ForeignPopulationTotalClientProps
) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}%`}
      yAxisWidth={40}
      connectNulls
    />
  )
}
