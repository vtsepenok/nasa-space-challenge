<script>
    import ContentTitle from "./content_title.svelte";
    import DisplayBox from "./display_box.svelte";
    import ActionButton from "./action_button.svelte";
    import {sattelite, selectedPage, year} from './stores.js';
</script>

<div class="spacer"></div>
<ContentTitle title="Parameters Select"></ContentTitle>


<DisplayBox>
    <div class="spacer"></div>
    <span slot="row1">
        <div class="spacer"></div>
        <label style="color: white;" for="sattelites">Spacecraft Source: </label>
        <div></div>
        <select bind:value={$sattelite} style="width: 200px; height: 30px" name="sattelites" id="sattelites">
            <option value="Ace">Ace</option>
            <option value="Wind">Wind</option>
            <option value="Wind">DSCOVR</option>
        </select>
    </span>

    <span slot="row2">
        <label style="color: white;" for="start">Period:</label>
        <div></div>
        <input style="width: 200px; height: 25px; border-radius: 2px; margin-bottom: 40px" type="year" id="start" name="start" min="2000" bind:value={$year}>
    </span>
    <div class="spacer"></div>
    <div class="spacer"></div>
</DisplayBox>

<div class="spacer"></div>

<ActionButton actionName="Display Reconnections" onClick={() => {selectedPage.set("outputs_pages")}}></ActionButton>
<div class="spacer"></div>

<style>
    .spacer {
		height: 30px;
	}
</style>