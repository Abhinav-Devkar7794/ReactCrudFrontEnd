import config from './bookConfig'

const apiUrl2 = config.apiUrl

const urlConstant = {
    BookUrls : {
        CreateBook : `${apiUrl2}rest/books`,
        DeleteBook : `${apiUrl2}rest/books/`,
        GetBookById: `${apiUrl2}rest/books/`,
        BookList : `${apiUrl2}rest/books`
    }
}

export default urlConstant;