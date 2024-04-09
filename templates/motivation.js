
document.addEventListener("DOMContentLoaded", function() {
    const quoteContainer = document.getElementById("quote-container");
    const fetchQuoteButton = document.getElementById("fetch-quote-btn");

  
    function fetchAndDisplayQuote() {
       
        fetch("motivation_quotes.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                
                const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];

              
                const quoteElement = document.createElement("p");
                quoteElement.textContent = `${randomQuote.quote} - ${randomQuote.author}`;
                
               
                quoteContainer.innerHTML = "";
                quoteContainer.appendChild(quoteElement);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

   
    fetchQuoteButton.addEventListener("click", fetchAndDisplayQuote);

   
    fetchAndDisplayQuote();
});