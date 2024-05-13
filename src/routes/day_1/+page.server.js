export async function load({ fetch }) {
    let resultsList = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
    let results = await resultsList.json()

    return {
        results
    }
}