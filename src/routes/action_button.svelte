<script>
    export let actionName = "";
    export let onClick;
</script>

<div class="button-container">
    <button on:click={onClick()}>
        <span>
            {actionName}
        </span>
    </button>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;     
        height: 100%;            
    }

    button {
        size: 21;
        height: 50px;
        width: 220px;
        border-width: 0;
        align-items: center;
        border-radius: 6px;
        background: #ad0101;
    }

    button:active {
        background-color: #830000;;
    }

    span {
        font-size: 16px;
        color: white;
    }
</style>
