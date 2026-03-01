<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    
    import IconSlide from "$lib/icon-slide.svelte";
    import skyridge_exterior from "$lib/assets/skyridge_exterior.jpeg";
</script>

{#if data.redirect}
    <p>Submission Successful!</p>
{/if}

<div style="text-align: center;"><h1>Lost and Found</h1>
    <p>Welcome to the <strong><em>unofficial</em></strong> Skyridge lost and found website!</p>
</div>

<IconSlide />

<div class="header-bg">
    <img src={skyridge_exterior} alt="skyridge" style="display: block;">
</div>
