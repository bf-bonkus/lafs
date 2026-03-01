<script lang="ts">
    import type { PageProps } from './$types';
    let { data, form }: PageProps = $props();
</script>



<div style="text-align: center;">
<h2>Have a found item to report? Report it here and take it to the Lost and Found.</h2>
<form method="POST" enctype="multipart/form-data" action="?/report">
    <div class="report">
        <label>
            <textarea name="desc" placeholder="Item Description, Date, and where it was Found"></textarea>
        </label>
        <label>
            <h3 style="text-align: center;">Item Image:</h3>
            <input type="file" name="img" />
        </label>
        <br>
        <br>
            <button>Submit Report</button>
    </div>
</form>

{#if form?.success}
<p>Item reported successfully</p>
{/if}


</div>
<style>
    textarea {
        width: 300px;
        height: 150px;
    }
</style>