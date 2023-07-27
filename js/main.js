var quotes = [
    {
        author: "― Albert Einstein",
        qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        author: "― Frank Zappa",
        qoute: "“So many books, so little time.”"
    },
    {
        author: "― Marcus Tullius Cicero",
        qoute: "“A room without books is like a body without a soul.”"
    },
    {
        author: "― Bernard M. Baruch",
        qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        author: "― Mae West",
        qoute: "“You only live once, but if you do it right, once is enough.”"
    }
]
var oldIndex=-1;
function displayQuotes() {
    var index = Math.floor(Math.random() * 5);
    
    while(index==oldIndex){
        index = Math.floor(Math.random() * 5);
    }
    
        var cartona = '';
        cartona = `<p class="text-center mb-3">${quotes[index].qoute}</p>
         <p class="text-center mb-3">${quotes[index].author}</p>`
        document.getElementById('showQuotes').innerHTML = cartona;
        oldIndex=index;

    oldIndex==index;
    



}