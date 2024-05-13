import type { Results } from './model.js'

export async function load({ fetch }) {
    let resultsList = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
    let results: Results[] = await resultsList.json()
    results = results.map(x => {
        let status = x.tally > 50 ? "Nice" : "Naughty"
        return {...x, behaviorStatus: status}
    })

    console.log(results)

    return {
        results
    }
}