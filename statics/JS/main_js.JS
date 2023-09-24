// Function to generate the JSON URL
function generateJSONURL() {
    // const inputText = document.getElementById('inputText').value;
    // const selectOption = document.getElementById('selectOption').value;

    // Construct the URL based on user input

    // const baseURL = 'https://example.com/api/data.json'; // Replace with your JSON API URL
    // const queryParams = `?text=${inputText}&option=${selectOption}`;
    // const jsonURL = baseURL + queryParams;

    const url = "https://classic.clinicaltrials.gov/api/query/full_studies?expr=Coronavirus+COVID&max_rnk=1&fmt=json";

    // Display the JSON URL
    document.getElementById('jsonData').textContent = url;
    fetchContentFromURL(url);
    // console.log(url);
}


function fetchContentFromURL(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Change to response.json() if you're expecting JSON data
        })
        .then((data) => {
            // Do something with the retrieved data
            console.log(data);
            // Update your webpage with the data as needed
            document.getElementById('jsonData').textContent = data;
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Attach the generateJSONURL function to the button click event
// var abc = document.getElementById('test');
// abc.addEventListener('click', generateJSONURL);
