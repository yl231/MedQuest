async function searchByContent(){

    const condition = document.getElementById("exampleInputEmail1").value;
    const min_rnk = 1;
    const max_studies = 100;
    const format = "json"

    const req = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${condition}&min_rnk=${min_rnk}&max_rnk=${max_studies + min_rnk - 1}&fields=NCTId,Condition,BriefTitle,OverallStatus,LocationCountry,MaximumAge,MinimumAge,StudyType&fmt=json`;
    console.log("url link: ", req)
    // Display the JSON URL
    // document.getElementById('jsonData').textContent = req;

    const jsData = await fetchContentFromURL(req);
    console.log(jsData);

    const processed_jsData = processJsonData(jsData);
    console.log(processed_jsData);


}


function parseAge(ageString, status_code) {
    if (!ageString){
        if (status_code ==0){
            const numericValue = 0;
            const unit = "days";
            return {numericValue, unit};
        } else if (status_code==1){
            const numericValue = 1000;
            const unit = "years";
            return {numericValue, unit};
        } else {
            const numericValue = 18;
            const unit = "years";
            return {numericValue, unit};
        }
        
    }
    // Regular expression to match numeric values and units
    const regex = /(\d+)\s*(Years|Months|Weeks|Days|Year|Month|Week|Day)/i;
    const match = ageString.match(regex);
  
    if (match) {
        const numericValue = parseInt(match[1], 10);
        const unit = match[2].toLowerCase();
    
        return { numericValue, unit };
    }
  
    return null;
}

  
function compareAgeUnits(unitA, unitB) {
    const units = ['years', 'year', 'months','month', 'weeks','week', 'days', 'day'];
    return units.indexOf(unitA) - units.indexOf(unitB);
}
  

function processJsonData(jsonData) {
    const inputAgeUnit = 'Years';
    const inputAge = 5;
    // Ensure that the JSON data has the expected structure
  
    const studyFields = jsonData.StudyFieldsResponse.StudyFields;
    const statusList = [
        "Not yet recruiting",
        "Recruiting",
        "Enrolling by invitation",
        "Active, not recruiting",
        "Suspended",
        "Terminated",
        "Completed",
        "Withdrawn",
        "Unknown status"
      ];
    const inputStatus = [0, 1, 0, 0, 0, 0, 1, 0, 0];
    
    const filteredData = studyFields.filter((study) => {
        // Filter the data based on the age condition
        const minimumAge = parseAge(study.MinimumAge[0], 0);
        const maximumAge = parseAge(study.MaximumAge[0], 1);
        const inputAgeParsed = parseAge(`${inputAge} ${inputAgeUnit}`, 2);

        if (!minimumAge || !maximumAge || !inputAgeParsed) {
            return false; // Invalid age format, exclude the entry
        }

        // Compare the units based on their hierarchy
        const compareUnits = compareAgeUnits(minimumAge.unit, inputAgeParsed.unit);
        const compareUnitsMax = compareAgeUnits(inputAgeParsed.unit, maximumAge.unit);

        if (compareUnits < 0 || compareUnitsMax < 0) {
            // console.log("Age units errors: ",minimumAge, inputAgeParsed, maximumAge, compareUnits, compareUnitsMax);
            return false; 
        }
        let res1 = true;
        let res2 = true;
        if (compareUnits == 0){
            res1 = inputAgeParsed.numericValue >= minimumAge.numericValue;
        } 
        if (compareUnitsMax == 0){
            res2 = inputAgeParsed.numericValue <= maximumAge.numericValue;
        }
        const age_filter = res1 && res2;

        // filter by status:
        let status_bool = false;
        const trial_status = study.OverallStatus[0];
        for (let i = 0; i < statusList.length; i++) {
            if (inputStatus[i]==1 && trial_status==statusList[i]) {
                status_bool = true;
            }
        }

        // filter by study type:
        let study_type_bool = false;
        const input_study_type = document.getElementById("exampleSelect").value;
        console.log("Input study type: ", input_study_type);
        const trial_study_type = study.StudyType[0];
        const studyTypeMap = new Map([
            ['all', 'All Studies'],
            ['Intr', 'Interventional'],
            ['Obsr', 'Observational'],
            ['PReg', '-- Patient Registries'],
            ['Expn', 'Expanded Access Studies']
          ]);
        if (input_study_type == "all" || studyTypeMap.get(input_study_type) == trial_study_type){
            study_type_bool = true;
        }



        const aggr_bool = age_filter && status_bool && study_type_bool;
        return aggr_bool;
    });
    return filteredData;
}
  


async function fetchContentFromURL(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Change to response.json() if you're expecting JSON data
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Rethrow the error to propagate it further if needed
      });
  }