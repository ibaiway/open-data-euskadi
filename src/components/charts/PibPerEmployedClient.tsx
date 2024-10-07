import { type BarChartProps, AreaChart } from "@tremor/react"

interface PibPerEmployedClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function PibPerEmployedClient(props: PibPerEmployedClientProps) {
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
