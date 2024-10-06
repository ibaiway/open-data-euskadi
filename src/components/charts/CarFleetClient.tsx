import { type BarChartProps, AreaChart } from "@tremor/react"

interface CarFleetClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function CarFleetClient(props: CarFleetClientProps) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}`}
      yAxisWidth={40}
      yAxisLabel="Turismos por habitante"
      connectNulls
    />
  )
}
