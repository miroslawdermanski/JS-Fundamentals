function comments(array){

    let users = []

    let articles = []

    let comments = {}

    for(let string of array){

        if(string.includes('user ')){

            string = string.split('user ')
            let user = string[1]
            if(!users.includes(user)){
                users.push(user)
            }
        } else if(string.includes('article ')){

            string = string.split('article ')
            let article = string[1]
            if(!articles.includes(article)){
                articles.push(article)
                comments[article] = []
            }
        } else {

            string = string.split(' posts on ')
            let user = string.shift()
            if(users.includes(user)){
                string = string.join()
                string = string.split(': ')
                let articleName = string.shift()
                if(articles.includes(articleName)){
                    string = string.join()
                    string = string.split(', ')
                    let title = string.shift()
                    let content = string.shift()

                    let newComment = {
                        user,
                        title,
                        content
                    }
                    comments[articleName].push(newComment) 
                }
            }
        }
    }

    let sortedComments = Object.entries(comments).sort((a, b) => b[1].length - a[1].length)

    sortedComments.forEach(([article, info]) => {

        console.log(`Comments on ${article}`);
        info.sort((a, b) => Object.values(a)[0].localeCompare(Object.values(b)[0]))
        info.forEach(comment => {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
        })
    })
}

comments(['user aUser123', 
        'someUser posts on someArticle: NoTitle, stupidComment', 
        'article Books', 'article Movies', 'article Shopping', 
        'user someUser', 'user uSeR4', 'user lastUser', 
        'uSeR4 posts on Books: I like books, I do really like them', 
        'uSeR4 posts on Movies: I also like movies, I really do', 
        'someUser posts on Shopping: title, I go shopping every day', 
        'someUser posts on Movies: Like, I also like movies very much'])

comments(['user Mark', 
        'Mark posts on someArticle: NoTitle, stupidComment', 
        'article Bobby', 'article Steven', 'user Liam', 'user Henry', 
        'Mark posts on Bobby: Is, I do really like them', 
        'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])