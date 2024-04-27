import { type BarChartProps, BarChart } from "@tremor/react"
import { formatLargeNumber } from "../../lib/shared/formatters"

interface BirthsPerYearClientProps {
  data: BarChartProps["data"]
  index: BarChartProps["index"]
  categories: BarChartProps["categories"]
}

export default function BirthsPerYearClient(props: BirthsPerYearClientProps) {
  const { index, data, categories } = props
  console.log("BirthsPerYearClient")
  console.log(index)
  console.log(data)
  console.log(categories)

  return (
    <BarChart
      className="mt-6"
      data={data}
      index={index}
      categories={categories}
      valueFormatter={formatLargeNumber}
      yAxisWidth={40}
      showLegend={false}
    />
  )
}
