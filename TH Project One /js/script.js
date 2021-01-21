/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array / theses are my quotes in a array of objects
***/
const quotes = [

  { 
    quote: 'I dont count my sit-ups; i only start counting when it starts hurting because theyre the only ones that count' , 
    source: 'Muhammad Ali', 
    year: '2016', 
    citation:'World Champs'
  },
  
  { 
    quote:'be like water my friend' ,
    source: ' Bruce Lee', 
    citation: 'Enter the Dragon', 
    year: '1971' 
  },

  { 
      quote:'just keep swimming' , 
      source: 'Dory', 
      year: '2003' , 
      citation: 'movie' 
  }, 

  {   quote: "yesterday is history, tomorrow is a mystery, but today is a gift. that is why it is called the present", 
      source: 'Master Oogway', 
      year: '2008' , 
      citation:'movie'
  },

  {   quote: 'Ohana means family and family means no one get left behind or forgotten', 
      source: 'lilo and stitch ', 
      year: '2002', 
      citation: 'movie' 
  } ,

{ 
  quote: 'Oh yes the past can hurt. But the way I see it you can either run from it… or learn from it.',
  source: 'Rafiki' ,
  year:'1994',
  citation: 'Lion King',
},
{ 
  quote: 'Love is putting someone else’s needs before yours.”',
  source: 'Olaf',
  year: '2013',
  citation: 'frozen'
},
{ 
  quote: 'Any day spent with you is my favorite day. So, today is my new favorite day.',
  source:'Winnie the pooh' ,
  year:'1928',
  citation:'',
},
{ 
  quote: '“The very things that hold you down are going to lift you up.”',
  source:'Timothy Mouse',
  year:'1941',
  citation: 'dumbo',
},
{ 
  quote: 'if your scared just be scarier then whatever is scaring you.',
  source: 'thumper ',
  year:'1942',
  citation:'bambi',
}

];


function changeBackgroundColor()    // assigns random color to background-color property of the body
{
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let quoteContainer = document.querySelector("body");
    quoteContainer.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;
    return quoteContainer.style.backgroundColor;
}

 // this function generates a random number to get a random quote.
function getRandomQuote()   
{
    let random = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[random];

    return randomQuote;
}


// this displays the random quote to the HTML
function printQuote()    
{
    let randQuote = getRandomQuote(quotes);

    let html = `<p class="quote">${randQuote.quote}</p>
        <p class="source"> ${randQuote.source}  `;

    if(randQuote.citation)
    {
        html += `<span class="citation" >${randQuote.citation} </span>`
    }

    if(randQuote.year)
    {
        html += `<span class="year">${randQuote.year}</span>`
    }
// newly added 
    if(randQuote.tag) 
    {
      html += `<span class="tag">${randQuote.tag}</span>`
    }


    html += `</p>`

    document.getElementById("quote-box").innerHTML = html;
    changeBackgroundColor();

    

}
// this allow the backcolor to chane every 10 seconds

let colorChange = setInterval(printQuote, 10000, quotes);


document.getElementById('load-quote').addEventListener("click", printQuote, false);