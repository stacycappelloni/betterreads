import path from 'path'
import {promises as fs} from 'fs'


export default async function handler(req, res){
    //get the path to the json directory 
    //json since subdirectory where file located 
    const jsonDirectory = path.join(process.cwd(), 'json')

    //read in contents from our json file 
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf-8')
    const data = JSON.parse(fileContents)
    //send all of the file's contents as json to the client 
    res.status(200).json(data)
}