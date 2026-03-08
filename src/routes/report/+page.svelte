<script lang="ts">
    import type { PageProps } from './$types';
    let { data, form }: PageProps = $props();
</script>



<div style="text-align: center;">
<h2>Report found items here:</h2>
<form method="POST" enctype="multipart/form-data" action="?/report">
    <div class="report">
    <label>
<textarea name="desc" placeholder="Item Description and where it was found"></textarea>
    </label>
    <label>
        <h3 style="text-align: center;">Image of the item is required. Upload it here:</h3>
        <input type="file" name="img" />
    </label>
    <br>
    <br>
    <button>Submit Report</button>
    </div>
</form>

{#if form?.success}
<p>Item submitted! <br> Now give the item to the lost and found at the front office.</p>
{/if}


</div>
