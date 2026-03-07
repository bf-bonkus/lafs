<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    
    import IconSlide from "$lib/icon-slide.svelte";
    import skyridge_exterior from "$lib/assets/skyridge_exterior.jpeg";
</script>

<title>SHS Lost and Found</title>


{#if data.redirect}
   <div style="text-align: right;">
     <p class="success">Your claim has been sent to the administrators. <br> They will reach out to you within 2 business days.</p>
    </div>
{/if}


<div style="text-align: center;">
    <p>Welcome to the <strong><em>unofficial</em></strong> Skyridge lost and found website!</p>
</div>

<IconSlide />

<div class="header-bg">
    <img src={skyridge_exterior} alt="skyridge" style="display: block;">
</div>
