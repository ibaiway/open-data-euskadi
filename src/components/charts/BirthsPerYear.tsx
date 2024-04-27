import { BarChart } from "@tremor/react"
import CardExpanded from "../ui/CardExpanded"
import BirthsPerYearClient from "./BirthsPerYearClient"
import { formatLargeNumber } from "../../lib/shared/formatters"
import { useState } from "react"

function getBirthsPerYear() {
  return {
    index: "year",
    data: [
      {
        year: "2010",
        Nacimientos: 100,
      },
      {
        year: "2011",
        Nacimientos: 200,
      },
      {
        year: "2012",
        Nacimientos: 300,
      },
      {
        year: "2013",
        Nacimientos: 400,
      },
      {
        year: "2014",
        Nacimientos: 500,
      },
      {
        year: "2015",
        Nacimientos: 600,
      },
      {
        year: "2016",
        Nacimientos: 700,
      },
      {
        year: "2017",
        Nacimientos: 800,
      },
      {
        year: "2018",
        Nacimientos: 900,
      },
      {
        year: "2019",
        Nacimientos: 1000,
      },
      {
        year: "2020",
        Nacimientos: 1100,
      },
      {
        year: "2021",
        Nacimientos: 1200,
      },
      {
        year: "2022",
        Nacimientos: 1300,
      },
      {
        year: "2023",
        Nacimientos: 1400,
      },
      {
        year: "2024",
        Nacimientos: 1000,
      },
      {
        year: "2025",
        Nacimientos: 1100,
      },
      {
        year: "2026",
        Nacimientos: 1200,
      },
    ],
    categories: ["Nacimientos"],
  }
}

// this will be async
export default function BirthsPerYear({ originUrl }: { originUrl?: string }) {
  const { index, data, categories } = getBirthsPerYear()

  return (
    <CardExpanded originUrl={originUrl}>
      <BirthsPerYearClient index={index} data={data} categories={categories} />
    </CardExpanded>
  )
}
