<script>
    let days = 6
</script>

<div class="page-layout">
    <h1>
        Welcome to this Advent of Svelte 2023!
    </h1>
    <nav>
        <ul class="day-grid">
            <li>
                <a href="day_1">Day 1</a>
            </li>
            <li>
                Day 2
            </li>
            <li>
                Day 3
            </li>
            <li>
                Day 4
            </li>
            <li>
                Day 5
            </li>
            <li>
                Day 6
            </li>
        </ul>
    </nav>
</div>

<style>
    .page-layout {
        display: grid;
        grid-template-rows: repeat(auto-fit, 1fr);
        gap: 1rem;
    }
    .day-grid {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        gap: 5rem;
    }
    .day-grid > * {
        display: flex;
    }
</style>