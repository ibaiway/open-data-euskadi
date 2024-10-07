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

export async function parseUdalmapData(fileName: string): Promise<ChartData> {
  const response = await database.get<PopulationDto>(fileName)

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

export async function getPopulationByState(): Promise<ChartData> {
  return parseUdalmapData(config.population.fileName)
}

export async function getPopulationPlus65ByState(): Promise<ChartData> {
  return parseUdalmapData(config.populationPlus65.fileName)
}

export async function getRgiByState(): Promise<ChartData> {
  return parseUdalmapData(config.rgi.fileName)
}

export async function getForeignPopulationByState(): Promise<ChartData> {
  return parseUdalmapData(config.foreignPopulation.fileName)
}

export async function getInstalledSolarEnergyByState(): Promise<ChartData> {
  return parseUdalmapData(config.installedSolarEnergy.fileName)
}

export async function getInstalledWindEnergyByState(): Promise<ChartData> {
  return parseUdalmapData(config.installedWindEnergy.fileName)
}

export async function getInstalledHydraulicEnergyByState(): Promise<ChartData> {
  return parseUdalmapData(config.installedHydraulicEnergy.fileName)
}

export async function getInstalledSolarThermalEnergyByState(): Promise<ChartData> {
  return parseUdalmapData(config.installedSolarThermalEnergy.fileName)
}

export async function getVehicleFleetByState(): Promise<ChartData> {
  return parseUdalmapData(config.vehicleFleet.fileName)
}

export async function getCarFleetByState(): Promise<ChartData> {
  return parseUdalmapData(config.carFleet.fileName)
}

export async function getTrafficAccidentsByState(): Promise<ChartData> {
  return parseUdalmapData(config.trafficAccidents.fileName)
}

export async function getRunOverPedestriansByState(): Promise<ChartData> {
  return parseUdalmapData(config.runOverPedestrians.fileName)
}

export async function getUnemploymentPerSex(): Promise<ChartData> {
  const menUnemploymentRawData = await database.get<PopulationDto>(
    config.unemploymentMen.fileName
  )
  const WomenUnemploymentRawData = await database.get<PopulationDto>(
    config.unemploymentWomen.fileName
  )

  const menUnemploymentData =
    menUnemploymentRawData.entities.find((entity) => entity.name === "CAE")
      ?.years[0] ?? {}
  const womenUnemploymentData =
    WomenUnemploymentRawData.entities.find((entity) => entity.name === "CAE")
      ?.years[0] ?? {}

  const dataByYear: {
    [key: string]: { men?: number; women?: number }
  } = {}

  Object.keys(menUnemploymentData).forEach((year) => {
    if (!dataByYear[year]) {
      dataByYear[year] = {} // Initialize as an empty object if not already initialized
    }
    dataByYear[year].men = menUnemploymentData[year]
  })
  Object.keys(womenUnemploymentData).forEach((year) => {
    dataByYear[year].women = womenUnemploymentData[year]
  })

  const data = Object.keys(dataByYear).map((year) => {
    return {
      year: parseInt(year),
      Hombres: dataByYear[year].men || 0,
      Mujeres: dataByYear[year].women || 0,
    }
  })

  return {
    index: "year",
    categories: ["Hombres", "Mujeres"],
    data,
  }
}
