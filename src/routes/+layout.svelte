<script lang="ts">
    import "@picocss/pico"
    import "../app.css"
    let { children } = $props()
</script>

<div class="app-layout">
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
        </ul>
    </nav>
    <main>
        {@render children()}
    </main>
    <footer>
    </footer>
</div>

<style>
    .app-layout {
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto;
        margin: 2rem;
        gap: 2rem;
    }
    ul {
        display: flex;
    }
</style>