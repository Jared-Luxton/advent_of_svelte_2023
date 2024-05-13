export type Results = {
    name: string;
    tally: number;
    behaviorStatus?: string;
}

const calculateBehaviorStatus = (tally: number) => {
    return tally > 0 ? "Nice" : "Naughty"
}

export const fetchData = async() => {
    let data = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
    let res: Results[] = await data.json()
    let results = res.map(x => {
        return {
            ...x,
            behaviorStatus: calculateBehaviorStatus(x.tally)
        }
    })

    return results
}

let db = await fetchData()

export function getDatabase() {
    return db.sort((a, b) => a.name.localeCompare(b.name));
}

export function createPerson(name: string, tally: number) {
    let newPerson = {
        name: name,
        tally: tally,
        behaviorStatus: calculateBehaviorStatus(tally)
    }

    db.push(newPerson)
}

export function updatePerson(name: string, tally: number) {
    let person = db.filter(x => x.name === name)[0]
    person.name = name
    person.tally = tally
    person.behaviorStatus = calculateBehaviorStatus(tally)
}
