export type Results = {
    name: string;
    tally: number;
    behaviorStatus?: string;
}

const calculateBehaviorStatus = (tally: number) => {
    return tally > 50 ? "Nice" : "Naughty"
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

// let db = await fetchData()
let db = [
    { name: 'Lilly', tally: -86, behaviorStatus: 'Naughty' },
    { name: 'Bethel', tally: 58, behaviorStatus: 'Nice' },
    { name: 'Vada', tally: -88, behaviorStatus: 'Naughty' },
]

let version = 0

export function getDatabase() {
    version += 1
    console.log("getting data!", db, Date.now(), version)
    return db.sort((a, b) => a.name.localeCompare(b.name));
}

export function createPerson(name: string, tally: number) {
    let newPerson = {
        name: name,
        tally: tally,
        behaviorStatus: calculateBehaviorStatus(tally)
    }

    db.push(newPerson)

    // console.log(
    //     db.filter(x => x.name === name),
    //     "hello",
    //     db
    // )
}

export function updateTally(name: string, tally: number) {
    let person = db.filter(x => x.name === name)[0]
    person.tally = tally
}
