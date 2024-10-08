import { type BarChartProps, AreaChart } from "@tremor/react"

interface NonIndustrialEnergyConsumptionClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function NonIndustrialEnergyConsumptionClient(
  props: NonIndustrialEnergyConsumptionClientProps
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
