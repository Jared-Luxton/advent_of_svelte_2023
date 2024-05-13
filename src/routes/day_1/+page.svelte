<script>
    let { data } = $props()
    let resultsList = data.results
</script>

<div>
    Day 1 - Naughty or Nice
</div>

<input type="text"/>
<table class="striped">
    <thead>
        <tr>
            <th scope="col">name</th>
            <th scope="col">tally</th>
            <th scope="col">behavior status</th>
        </tr>
    </thead>
    <tbody>
        {#each resultsList as res}
            <tr>
                <th scope="row">{res.name}</th>
                <td>{res.tally}</td>
                <td></td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
</style>