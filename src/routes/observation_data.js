import { currentDays, day } from "./stores";

export default class ObservationData {
    static parseData(rawData) {
        const lines = String(rawData).trim().split('\n');
        const observationDataArray = [];
        
        let reconParameter = -15;
        let bZprev = 0;
        let bZprev1 = 0;
        let bZprev2 = 0;
        let bZprev3 = 0;
        let bZprev4 = 0;

        let mag = [];

        let prevDay = 0;
        let days = [];

        lines.forEach(line => {
            const row_items = String(line).split(/\s+/);
            
            let bZ = parseFloat(row_items[16]);
            if (bZ > 999) {
                bZ = 0;
            }

            let magVec = bZ;

            if (
                magVec < reconParameter && (bZprev < reconParameter || bZprev == 0) 
                && (bZprev1 <reconParameter || bZprev1 == 0) 
                && (bZprev2 <reconParameter || bZprev2 == 0) 
                && (bZprev3 <reconParameter || bZprev3 == 0) 
                && (bZprev4 <reconParameter || bZprev4 == 0)) 
            {
                
               magVec = bZ; 
               let daysSince = parseInt(row_items[1], 10);
               if (daysSince != prevDay) {
                    days.push(daysSince);
               }
            }
            else {
                magVec=0;
            }
            bZprev = magVec;
            bZprev1 = bZprev
            bZprev2 = bZprev1;
            bZprev3 = bZprev2;
            bZprev4 = bZprev3;

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
    
        currentDays.set([...new Set(days)]);
        return observationDataArray;
    }
    
    year;
    days_since;
    hour;
    minute;
    bX;
    bY;
    bZ;
}