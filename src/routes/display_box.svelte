<div>
    <slot name="row1" class="box-slot"></slot>
    <slot name="row2" class="box-slot"></slot>
    <slot name="row3" class="box-slot"></slot>
</div>

<style>
    div {
        margin-top: 20px;
        height: 300px;
        background-color: #2F2F2F;
        margin-right: 18%;
        margin-left: 18%;
        border-radius: 4px;
        display: flex;          
        flex-direction: column; 
        align-items: center; 
        justify-content: space-around;
    }

    .box-slot {
        display: block; 
        padding-bottom: 10px;
    }
</style>
