<script lang="ts">
    import type { PageProps } from './$types';
    let { data, form }: PageProps = $props();
</script>

{#if form?.success}
<p>Item reported</p>
{/if}

<p>Have any items to report? You're in the right place.</p>
<form method="POST" enctype="multipart/form-data" action="?/report">
    <label>
        Item Description:
        <textarea name="desc"></textarea>
    </label>
    <label>
        Image:
        <input type="file" name="img" />
    </label>
    <button>Submit</button>
</form>

<style>
    textarea {
        width: 300px;
        height: 150px;
    }
</style>