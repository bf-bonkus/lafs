<script lang="ts">
    const images = Object.values(import.meta.glob('$lib/assets/icon_slide/*.png', { eager: true, query: '?url', import: 'default'}))
</script>

{#snippet icons()}
    <div class="icons-slide">
        {#each images as image}
            <img src={image} alt="icon"/>
        {/each}
    </div>
{/snippet}

<div class="icons">
    {@render icons()}
    {@render icons()}
</div>

<style>
    .icons {
        overflow: hidden;
        padding: 10px 0;
        white-space: nowrap;
        position: relative;
    }

    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    .icons:before,
    .icons:after {
        position:absolute;
        top: 0;
        width: 250px;
        height: 100%;
        content: "";
        z-index: 2;
    }

    .icons:before {
        left: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 0), #cdd4d8);
    }

    .icons:after {
        right: 0;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), #cdd4d8);
    }

    /* .icons:hover .icons-slide {
        animation-play-state: paused;
    } */

    .icons-slide { 
        display: inline-block;
        animation: 15s slide infinite linear;
    }

    .icons-slide img {
        width: 110px;
        margin-left: 160px;
    }
</style>