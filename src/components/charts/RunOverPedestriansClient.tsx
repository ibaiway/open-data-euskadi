import { type BarChartProps, AreaChart } from "@tremor/react"

interface RunOverPedestriansClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function RunOverPedestriansClient(
  props: RunOverPedestriansClientProps
) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}`}
      yAxisWidth={40}
      yAxisLabel="por 10.000 habitantes"
      connectNulls
    />
  )
}
