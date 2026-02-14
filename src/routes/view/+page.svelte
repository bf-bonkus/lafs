<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
</script>

{#each data.items as item}
    <img src={item.img} alt="unclaimed item" />
    <p>{item.desc}</p>
{/each}