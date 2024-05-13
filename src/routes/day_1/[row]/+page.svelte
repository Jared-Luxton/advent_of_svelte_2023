<script lang="ts">
    import { enhance } from "$app/forms"
    // import { }
    let { data } = $props()
    let formInputs = $derived(data.row)
</script>

<div class="edit-layout">
    <a href="http://localhost:5173/day_1">Day 1</a>
    <h3>Edit</h3>
    <form class="edit-person" use:enhance method="POST" action="?/updatePerson">
        <label>
            Name
            <input type="text" name="name" bind:value={formInputs.name}/>
        </label>
        <label>
            Tally
            <input type="number" name="tally" bind:value={formInputs.tally}/>
        </label>
        <label>
            Behavior status
            <input type="string" name="behaviorStatus" disabled bind:value={formInputs.behaviorStatus}/>
        </label>
        <button type="submit">Submit</button>
    </form>
</div>

<style>
    .edit-layout {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .edit-person {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .edit-person > button {
        max-width: 7.5rem;
    }
</style>