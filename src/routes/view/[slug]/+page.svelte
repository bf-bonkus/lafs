<script lang="ts">
    import type { PageProps } from './$types';

    let { data, form }: PageProps = $props();
</script>

{#if form?.success}
    <h3>Submission Succeeded!</h3>
{/if}

<img src={data.item?.img} alt="User-submitted item" />
<p>{data.item?.desc}</p>

<form method="POST" action="?/claim">
    <ul>
        <li><label>
            Name:
            <input type="text" name="name" required />
        </label></li>
        <li><label>
            Email:
            <input type="email" name="email" required/>
        </label></li>
        <li><label>
            Phone number (optional):
            <input type="tel" name="tel" />
        </label></li>
    </ul>
    <button>Submit Claim</button>
</form>
