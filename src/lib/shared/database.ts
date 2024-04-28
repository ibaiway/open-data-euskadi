import path from "node:path"
import fs from "node:fs/promises"

const dataPath = path.join(process.cwd(), "data")

interface DatabaseJson<T> {
  data: T
}

class Database {
  async get<T>(file: string): Promise<T> {
    console.log(file)
    const fileContents = await fs.readFile(path.join(dataPath, file), "utf-8")
    //const { data } = JSON.parse(fileContents) as DatabaseJson<T>
    const data = JSON.parse(fileContents) as T

    return data
  }
}

const database = new Database()
export default database
