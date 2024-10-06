import { type BarChartProps, AreaChart } from "@tremor/react"

interface VehicleFleetClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function VehicleFleetClient(props: VehicleFleetClientProps) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}`}
      yAxisWidth={40}
      yAxisLabel="Vehiculos por habitante"
      connectNulls
    />
  )
}
