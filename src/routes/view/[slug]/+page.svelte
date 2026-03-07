<script lang="ts">
    import type { PageProps } from './$types';


    let { data, form }: PageProps = $props();
</script>

{#if form?.success}
    <h3>Submission Succeeded!</h3>
{/if}

<h2>{data.item?.desc}</h2>
<span class="claim"><div class="claim-border">
<img src={data.item?.img} alt="User-submitted item"/></div>
<br>
<br>

<form method="POST" action="?/claim">
   <!-- <ul>-->
        <!--<li>--><label>
            <input type="text" name="name" required  placeholder="Name"/>
        </label><!--</li>--><br>
        <!--<li>--><label>
            <input type="email" name="email" required placeholder="Email"/>
        </label><!--</li>--><br>
        <!--<li style="padding-left: 2px;">--><label>
            <input type="tel" name="tel" placeholder="Phone"/>
        </label><!--</li>--><br>
    <!--</ul>-->
    <button>Submit Claim</button>
</form>
</span>