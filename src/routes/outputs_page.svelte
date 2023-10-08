<script>
    import ContentTitle from "./content_title.svelte";
    import DisplayBox from "./display_box.svelte";
    import ActionButton from "./action_button.svelte";
    import {currentDays, observations, selectedPage, year} from './stores.js';
    import UnavailableGraphBox from "./unavailable_graph_box.svelte";
    import fetchData from "./fetch_data";
    import Zchart from "./zchart.svelte";
    import {sattelite, day} from "./stores";
    import { writable } from "svelte/store";

    let dataForMagnitudeChart = writable([]);

    fetchData("https://spdf.gsfc.nasa.gov/pub/data/omni/high_res_omni/sc_specific/" + $sattelite.toLowerCase() + "_min_b" + $year + ".txt").then((res) => {    
        const lines = String(res).trim().split('\n');
        const observationDataArray = [];

        lines.forEach(line => {
            const row_items = String(line).split(/\s+/);
            
            let bZ = parseFloat(row_items[16]);
            if (bZ > 999) {
                bZ = 0;
            }

            let magVec = bZ;
            let daysSince = parseInt(row_items[1], 10);

            if (bZ < 999 && daysSince < $day + 1 && daysSince > $day - 1 ){
                magVec = bZ; 
            }
            else {
                magVec=0;
            }

            const observationData = {
                year: parseInt(row_items[0], 10),
                days_since: parseInt(row_items[1], 10),
                hour: parseInt(row_items[2], 10),
                minute: parseInt(row_items[3], 10),

                bX: parseFloat(row_items[12]),
                bY: parseFloat(row_items[15]),
                bZ: magVec
            };
            
            observationDataArray.push(observationData);
        });
    
        dataForMagnitudeChart.set(observationDataArray);
        console.log("Magnitude chart: " + $dataForMagnitudeChart);
    });
    console.log("FETCH FROM: https://spdf.gsfc.nasa.gov/pub/data/omni/high_res_omni/sc_specific/" + $sattelite.toLowerCase() + "_min_b" + $year + ".txt");


</script>  

<div class="spacer"></div>
<ContentTitle title="Output"></ContentTitle>
<div style="height: 15px;"></div>

{#if $observations.length == 0}
    <div class="loading-container">Reading NASA Database...</div>
{/if}

<DisplayBox>
    <Zchart slot="row1" observations={$observations}></Zchart>
</DisplayBox>

<div style="height: 25px;"></div>

<div class="input-container">
    <label style="color: white; margin-right: 10px;">Event List</label>
    <select bind:value={$day} style="width: 80px; height: 30px; border-radius: 5px; border: 1px solid gray;">
        <option value=""></option> <!-- Blank default element -->
        {#each $currentDays as dayValue}
            <option value={dayValue}>{dayValue}</option>
        {/each}
    </select>
</div>


<div class="spacer"></div>

<ActionButton actionName="Modify Parameters" onClick={() => {selectedPage.set("inputs_page")}}></ActionButton>

<div class="spacer"></div>

<style>
    
    .spacer {
		height: 30px;
	}
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px; /* or any height you find appropriate */
        font-size: 18px;
        color: white; /* or any other color you prefer */
    }

    .input-container {
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        justify-content: center; /* Horizontally center items */
        align-items: center; /* Vertically center items */
    }
</style>
