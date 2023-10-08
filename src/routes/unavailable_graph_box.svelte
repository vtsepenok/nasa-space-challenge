<script>
    import { selectedReconnection } from "./stores";

</script>
<div>
    <!--Listen to a store-->
    {#if ($selectedReconnection === "")}
        <h2>Select an event to view magnitude</h2>
    {/if}
</div>

<style>
    div {
        background-color: #2F2F2F;
        height: 300px;
        margin-right: 18%;
        margin-left: 18%;
        border-radius: 4px;
        display: flex;          
        flex-direction: column; 
        align-items: center; 
        justify-content: space-around;
    }

    h2 {
        color: #C6C6C6;
        text-align: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>
