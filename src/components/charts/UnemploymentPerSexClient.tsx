import { type BarChartProps, BarChart } from "@tremor/react"

interface UnemploymentPerSexClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function UnemploymentPerSexClient(
  props: UnemploymentPerSexClientProps
) {
  const { index, data, categories } = props

  return (
    <BarChart
      data={data}
      index={index}
      categories={categories}
      valueFormatter={(value) => `${value}%`}
      yAxisWidth={32}
    />
  )
}
