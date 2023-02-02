//API Key: 8dd5253c3527a1ca341b1a6acca5a806


 var searchButton = document.querySelector("#input-button")

// var searchHistoryArr = [1]
// console.log(searchHistoryArr)
// var localStorageArr = []
// var currentDate 
// var searchHistory = localStorage.getItem('searchHistoryLS')
// console.log(searchHistory)
// var testLocalStorage1 = 1
// var testLocalStorage2 = 2


// console.log(localStorageArr)

// localStorage.setItem('myArray',testLocalStorage1)
// localStorage.setItem('myArray',testLocalStorage2)

// console.log(localStorage.getItem('myArray'))

//function saveToLS()
    
 
    function onSubmit(){
        searchButton.addEventListener("click", ()=> {
        
        
            userInput = document.getElementById("city-input")
            console.log(userInput)
            input = userInput.value
            console.log(input)
            obj = userInput.textContent
            console.log(userInput.textContent)
            console.log(localStorage.setItem('newInput',userInput.value))
            return false
         }
         );
        
        

        }
    
    
    
    
    //Checks length of searchHistoryArr to keep it from getting too long
    // if (searchHistoryArr.length < 6) {
    //     searchHistoryArr.push(userInput)
    // //Adds it to the Local Storage
    //     localStorage.setItem("searchHistoryLS", JSON.stringify(searchHistoryArr))
    //     }
    // if (searchHistoryArr.length > 6) {
    //     searchHistoryArr.splice([0],1)
    //     localStorage.setItem("searchHistoryLS", JSON.stringify(searchHistoryArr))
    // }
    
    // console.log(localStorage.getItem('searchHistoryArr'))





 





// ***************************************************************************************
//Objectives:

// Search for a city=>presented with current and future conditions for that city,
// 	city added to search history

//HTML: Search Bar=> Userinput & submit button.  "Recently Viewed" Section

//JS:Save search result to local storage to connect with 'Recently Viewed'.
//5 day forecast for current city:

//City Name
//Date
//Icon
//Temperature
//Humidity
//Wind Speed



// When I view future weather conditions for that city=> Presented with a 5-day forecast
// 	displaying date, an icon representation of weather conditions, the temperature
// 	wind speed, and the humidity

//JS: Current vs 5 Day forecast? HIDE vs Show?

// When I click on a city in the search history=> Presented with current and future conditions
// 	for that city

//JS: When search history city selected: becomes currentCity 