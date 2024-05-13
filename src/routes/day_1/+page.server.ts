import * as db from './database.js'

export const load = async({ fetch }) => {

    return {
        results: db.getDatabase()
    }
}

export const actions = {
    createPerson: async ({ cookies, request}) => {
        const data = await request.formData();
        let name = String(data.get("name"))
        let tally = Number(data.get("tally"))
        db.createPerson(name, tally)
    },

    updateTally: async ({ cookies, request }) => {
        const data = await request.formData();
        let name = String(data.get("name"))
        let tally = Number(data.get("tally"))
        db.updatePerson(name, tally)
    }
}