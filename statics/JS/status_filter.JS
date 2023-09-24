const data = {
    // ... (your JSON object)
};

function filterByStatus(status) {
    return data.StudyFieldsResponse.StudyFields.filter(trial => {
        return trial.OverallStatus[0] === status;
    });
}

const inputStatus = "Recruiting"; // Example input status
const matchingTrials = filterByStatus(inputStatus);

console.log(matchingTrials);
