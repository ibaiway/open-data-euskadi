import { type BarChartProps, AreaChart } from "@tremor/react"

interface TrafficAccidentClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function TrafficAccidentsClient(
  props: TrafficAccidentClientProps
) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}`}
      yAxisWidth={40}
      yAxisLabel="por 1.000 habitantes"
      connectNulls
    />
  )
}
