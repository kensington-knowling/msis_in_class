const booksApp = {
    data() {
      return {
            // "books":[],
            result: undefined,
            app: 0,
            books: [],
            bookForm: {}
        }
    },
    computed:  {},
    methods: {
        fetchBooksData() {
            // console.log("Fetching books for", s);
            fetch('/api/books/')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.books = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        },
        postNewBook(evt) {
            // this.bookForm.Title = this.selectedBook.Title;        
            // console.log("Posting:", this.bookForm);
            // alert("Posting!");
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
          }
    },
    created() {
        this.fetchBooksData();
    }
  }

  Vue.createApp(booksApp).mount('#booksApp');