function extractEmails(input){

    const emailPattern = /(^|(?<=\s))([A-Za-z0-9])+([\.\-\_][A-Za-z0-9]+)*@([A-Za-z-]+)\.([A-Za-z-]+)([\.A-Za-z-])*(\b|(?=\s))/g
    let matches = input.match(emailPattern)
    if(matches){
        matches.forEach(email => console.log(email.trim()))
    }
}

extractEmails('Please contact us at: support@github.com.')

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')