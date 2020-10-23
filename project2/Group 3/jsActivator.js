//this file will activate anything that does not require user input

//runs the application and any of the functions inside it once
main();
function main(){
    
    
    findIsbnCorrelation()
    findMovie();

    // tellIsbnKeys();
    // getBooksMovies();
}

//this function gets any bookDetail given for the ISBN numbers, then outputs to isbnResults
//dosn't like being in the same file as what it's calling since it's called first before activating the classes
async function findIsbnCorrelation(){
    var bookarr = [];
    var moviearr = [];
    if(isbnlist.length != 0){
        for(let i = 0; i < isbnlist.length; i++){
            let book = new bookDetail(isbnlist[i], "M");
            await book.getDetail();
            let movie = new movieDetail(book.getTitle());
            await movie.getDetail();
            bookarr.push(book);
            moviearr.push(movie);
        }
        document.getElementById("isbnResults").innerHTML +="The Results for the ISBN List</br>";
        let y = 0;
        for(x of bookarr){
            document.getElementById("isbnResults").innerHTML +=
            "<div class='column' id='bookDetails'>"+
            x.cover()+
            "<br>"+
            "Author: "+x.getAuthor()+
            "<br>"+
            "Published: "+ x.getPublishDate()+
            "<br>"+
            "Pages: "+x.getPageAmount()+
            "</div>";

            document.getElementById("isbnResults").innerHTML +=
            "<div class='column' id='bookDetails'>"+
            moviearr[y].getPosterImage()+
            "<br>"+
            moviearr[y].getName()+
            "<br>"+
            "Released: "+moviearr[y].getReleaseDate()+
            "Average Rating: "+moviearr[y].getAverageRating()+
            "</div>";
            y++;
        }
    } else{
        document.getElementById("isbnResults").innerHTML = "There are no elements in the isbnList try with a new file."
    }
}

async function findMovie(){
    let movie = new movieDetail("the hobbit");
    await movie.getDetail();
}