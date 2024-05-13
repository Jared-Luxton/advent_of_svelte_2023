import { error } from '@sveltejs/kit'
import * as db from '../database.js'

export const load = async({ params }) => {
    const row = db.getDatabase().filter(x => x.name === params.row)[0]

    if (!row) throw error(404);

    return {
        row
    }
}

export const actions = {
    updatePerson: async({ cookies, request }) => {
        const data = await request.formData();
        let name = String(data.get("name"))
        let tally = Number(data.get("tally"))
        db.updatePerson(name, tally)
    }
}