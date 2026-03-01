<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();

    let query = $state("");
</script>

<section id="search">
    <h2>Found Items</h2>
</section>

<div class="search">
    <input bind:value={query} type="text" placeholder="Search for Lost Items Here" style="width: 250px; height:30px; text-size: 26px;"/>
<br></div>

<div class="items">
    {#each data.items as item (item.id)}
        {#if item.desc.toLowerCase().includes(query.toLowerCase())}
            <div class="image-card">
                <img src={item.img} alt="unclaimed item" />
                <p>{item.desc}</p>
                <a href="/view/{item.id}">
                    <button>Claim</button>
                </a>
            </div>
        {/if}
    {/each}
</div>
