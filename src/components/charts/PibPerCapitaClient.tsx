import { type BarChartProps, AreaChart } from "@tremor/react"

interface PibPerCapitaClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function PibPerCapitaClient(props: PibPerCapitaClientProps) {
  const { index, data, categories } = props

  return (
    <AreaChart
      data={data}
      index={index}
      categories={categories}
      yAxisWidth={40}
      yAxisLabel=" "
      connectNulls
    />
  )
}
