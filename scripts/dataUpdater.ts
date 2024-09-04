import fs from "fs"

export type DataSource = {
  url: string
  body?: string
  fileName: string
  source: string
}

async function udalmapUpdater(url: string) {
  //fetch data from url with a post request and set the body param in the request
  //then update the file with the response data
  const response = await fetch(url, {
    method: "GET",
  })
  return response.json()
}

function dataUpdater() {
  const dataSources: DataSource[] = [
    {
      url: "https://api.euskadi.eus/udalmap/indicators/162",
      fileName: "poblacion_total.json",
      source: "udalmap",
    },
    {
      url: "https://api.euskadi.eus/udalmap/indicators/43",
      fileName: "poblacion_mas_65.json",
      source: "udalmap",
    },
  ]

  dataSources.forEach((dataSource) => {
    if (dataSource.source === "udalmap") {
      udalmapUpdater(dataSource.url).then((data) => {
        //write data to /data folder
        fs.writeFileSync(`./data/${dataSource.fileName}`, JSON.stringify(data))

        console.log(`Data updated for ${dataSource.fileName}`)
      })
    }
  })
}

async function main() {
  dataUpdater()
}
main()
