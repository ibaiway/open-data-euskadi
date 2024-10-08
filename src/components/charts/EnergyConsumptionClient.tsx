import { type BarChartProps, AreaChart } from "@tremor/react"

interface EnergyConsumptionClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function EnergyConsumptionClient(
  props: EnergyConsumptionClientProps
) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}`}
      yAxisWidth={40}
      yAxisLabel="Kwh por habitante"
      connectNulls
    />
  )
}
