import { config } from "../config"
import type { ChartData } from "../types/charts"
import database from "./shared/database"

interface YearData {
  [key: string]: number
}

interface PopulationDataDto {
  name: string
  years: YearData[]
}

interface PopulationDto {
  entities: PopulationDataDto[]
  regions: PopulationDataDto[]
  municipalities: PopulationDataDto[]
}

export interface Population {
  year: number
  measure: number
  district: string
}

async function getPopulation(): Promise<Population[]> {
  const response = await database.get<PopulationDto>(config.population.fileName)
  const entities = response.entities.map((entity) => {
    return Object.entries(entity.years).map(([year, measure]) => {
      return {
        year: parseInt(year),
        measure,
        district: entity.name,
      }
    })
  })
  const regions = response.regions.map((entity) => {
    return Object.entries(entity.years).map(([year, measure]) => {
      return {
        year: parseInt(year),
        measure,
        district: entity.name,
      }
    })
  })
  const municipalities = response.municipalities.map((entity) => {
    return Object.entries(entity.years).map(([year, measure]) => {
      return {
        year: parseInt(year),
        measure,
        district: entity.name,
      }
    })
  })

  //return [[...entities], [...regions], [...municipalities]].flat()
  return [{ year: 0, measure: 0, district: "" }]
}

export async function getPopulationByState(): Promise<ChartData> {
  const response = await database.get<PopulationDto>(config.population.fileName)

  const years = Object.keys(response.entities[0].years[0]).map((year) =>
    parseInt(year)
  )

  const entities = response.entities.map((entity) => entity.name)
  const data = years.map((year) => {
    return {
      year,
      CAE:
        response.entities.find((entity) => entity.name === "CAE")?.years[0][
          year
        ] || 0,
      Bizkaia:
        response.entities.find((entity) => entity.name === "Bizkaia")?.years[0][
          year
        ] || 0,
      Gipuzkoa:
        response.entities.find((entity) => entity.name === "Gipuzkoa")
          ?.years[0][year] || 0,
      "Araba/Álava":
        response.entities.find((entity) => entity.name === "Araba/Álava")
          ?.years[0][year] || 0,
    }
  })

  return {
    index: "year",
    categories: response.entities.map((entity) => entity.name),
    data: data,
  }
}

export async function getPopulationPlus65ByState(): Promise<ChartData> {
  const response = await database.get<PopulationDto>(
    config.populationPlus65.fileName
  )

  const years = Object.keys(response.entities[0].years[0]).map((year) =>
    parseInt(year)
  )

  const entities = response.entities.map((entity) => entity.name)
  const data = years.map((year) => {
    return {
      year,
      CAE:
        response.entities.find((entity) => entity.name === "CAE")?.years[0][
          year
        ] || 0,
      Bizkaia:
        response.entities.find((entity) => entity.name === "Bizkaia")?.years[0][
          year
        ] || 0,
      Gipuzkoa:
        response.entities.find((entity) => entity.name === "Gipuzkoa")
          ?.years[0][year] || 0,
      "Araba/Álava":
        response.entities.find((entity) => entity.name === "Araba/Álava")
          ?.years[0][year] || 0,
    }
  })

  return {
    index: "year",
    categories: response.entities.map((entity) => entity.name),
    data: data,
  }
}

export async function getRgiByState(): Promise<ChartData> {
  const response = await database.get<PopulationDto>(config.rgi.fileName)

  const years = Object.keys(response.entities[0].years[0]).map((year) =>
    parseInt(year)
  )

  const entities = response.entities.map((entity) => entity.name)
  const data = years.map((year) => {
    return {
      year,
      CAE:
        response.entities.find((entity) => entity.name === "CAE")?.years[0][
          year
        ] || 0,
      Bizkaia:
        response.entities.find((entity) => entity.name === "Bizkaia")?.years[0][
          year
        ] || 0,
      Gipuzkoa:
        response.entities.find((entity) => entity.name === "Gipuzkoa")
          ?.years[0][year] || 0,
      "Araba/Álava":
        response.entities.find((entity) => entity.name === "Araba/Álava")
          ?.years[0][year] || 0,
    }
  })

  return {
    index: "year",
    categories: response.entities.map((entity) => entity.name),
    data: data,
  }
}
