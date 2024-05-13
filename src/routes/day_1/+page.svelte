<script lang="ts">
    import type { Results } from "./database";
    import { enhance } from "$app/forms"
    import editIcon from "./edit.svg"
    import { page } from "$app/stores"

    let { data } = $props()
    let resultsList: Results[] = $derived(data.results)

    let filters: ResultsFilter = $state({
        name: undefined,
        tally: undefined,
        behaviorStatus: undefined
    })

    type ResultsFilter = {
        name: string | undefined;
        tally: number | undefined;
        behaviorStatus: string | undefined
    }

    let filteredResults = $derived.by(() => {
        const matchName = (x: Results) => filters.name ? x.name.toLowerCase().match(filters.name.toLowerCase()) : true
        const greaterThan = (x: Results) => filters.tally ? x.tally >= filters.tally : true
        const matchStatus = (x: Results) => filters.behaviorStatus ? x.behaviorStatus == filters.behaviorStatus : true
        const filtersList = [matchName, greaterThan, matchStatus]

        return filtersList.reduce((resultsList, f) => resultsList.filter(f), resultsList)

        // return resultsList.filter(x => {
        //     return (x.name.toLowerCase().match(filters.name.toLowerCase()) &&
        //         x.tally >= filters.tally &&
        //         x.behaviorStatus == filters.behaviorStatus
        //     )
        // })
    })

    // $inspect(
        // resultsList
        // filteredResults,
        // filters
    // )
</script>

<div class="page-layout">
    <h1>Day 1 - Naughty or Nice</h1>

    <div class="top-menu">
        <h3>Filters</h3>
        <div class="filters">
            <label>
                Name
                <input type="text" name="name" bind:value={filters.name}/>
            </label>
            <label>
                Tally
                <input type="number" name="tally" bind:value={filters.tally}/>
            </label>
            <fieldset>
                <legend>Behavior status</legend>
                <label>
                    <input type="radio" name="behaviorStatus" bind:group={filters.behaviorStatus} value={"Naughty"} />
                    Naughty
                </label>
                <label>
                    <input type="radio" name="behaviorStatus" bind:group={filters.behaviorStatus} value={"Nice"} />
                    Nice
                </label>
            </fieldset>
        </div>
        <h3>Create</h3>
        <form class="create-person" use:enhance method="POST" action="?/createPerson">
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <label>
                Tally
                <input type="number" name="tally" />
            </label>
            <label>
                Behavior status
                <input type="string" name="behaviorStatus" disabled/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>

    <table class="striped">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">name</th>
                <th scope="col">tally</th>
                <th scope="col">behavior status</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredResults as row}
                <tr>
                    <td><a href={`/day_1/${row.name}`}><img src={editIcon} alt="edit row"/></a></td>
                    <th scope="row">{row.name}</th>
                    <td>{row.tally}</td>
                    <td>{row.behaviorStatus}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .page-layout {
        display: grid;
        grid-template-rows: repeat(auto-fit, 1fr);
        row-gap: 1rem;
    }

    .top-menu {
        display: grid;
    }

    .filters {
        display: flex;
        flex-direction: row;
        justify-content: right;
        gap: 2rem;
    }

    .create-person {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .create-person > button {
        max-width: 7.5rem;
    }
</style>