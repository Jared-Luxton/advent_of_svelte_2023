<script lang="ts">
    import type { Results } from "./model";
    let { data } = $props()
    let resultsList: Results[] = $state(data.results)

    let filters: Results = $state({
        name: "",
        tally: 0,
        behaviorStatus: "Nice"
    })

    let filteredResults = $derived.by(() => {
        return resultsList.filter(x => {
            return (x.name.toLowerCase().match(filters.name.toLowerCase()) &&
                x.tally >= filters.tally &&
                x.behaviorStatus == filters.behaviorStatus
            )
        })
    })

    $inspect(
        filteredResults,
        filters
    )
</script>

<div class="page-layout">
    <h1>Day 1 - Naughty or Nice</h1>
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
                <input type="radio" name="behaviorStatus" bind:group={filters.behaviorStatus} value={"Naughty"}/>
                Naughty
            </label>
            <label>
                <input type="radio" name="behaviorStatus" bind:group={filters.behaviorStatus} value={"Nice"} />
                Nice
            </label>

        </fieldset>
    </div>

    <table class="striped">
        <thead>
            <tr>
                <th scope="col">name</th>
                <th scope="col">tally</th>
                <th scope="col">behavior status</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredResults as res}
                <tr>
                    <th scope="row">{res.name}</th>
                    <td>{res.tally}</td>
                    <td>{res.behaviorStatus}</td>
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

    .filters {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
</style>