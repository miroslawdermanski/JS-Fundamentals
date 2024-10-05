function softUniStudents(array){

    let courses = {}

    for(let x of array){

        if(x.includes(': ')){
            let [course, capacity] = x.split(': ');
            if(course in courses){
                courses[course].capacity += Number(capacity);
            } else {
                courses[course] = {}
                courses[course].capacity = Number(capacity);
                courses[course].students = [];
            }
        } else {
            let [studentInfo, courseName] = x.split(' joins ')
                if(courses.hasOwnProperty(courseName) && courses[courseName].students.length < courses[courseName].capacity){
                    let student = {}
                    let [usernameCredits, email] = studentInfo.split(' with email ')
                    student.email = email
                    let [username, credits] = usernameCredits.replace(']', '').split('[')
                    student.username = username
                    student.credits = Number(credits)
                    courses[courseName].students.push(student)
                }          
        }
    }

    let sortedCourses = Object.entries(courses)
    .sort((a, b) => b[1].students.length - a[1].students.length)

    for(let course of sortedCourses){

        console.log(`${course[0]}: ${course[1].capacity-course[1].students.length} places left`);
        
        course[1].students.sort((a, b) => b.credits - a.credits)
        .forEach(element => {
            console.log(`--- ${element.credits}: ${element.username}, ${element.email}`);
        }); 
    }
}

softUniStudents(['JavaBasics: 2', 
'user1[25] with email user1@user.com joins C#Basics', 
'C#Advanced: 3', 'JSCore: 4', 
'user2[30] with email user2@user.com joins C#Basics', 
'user13[50] with email user13@user.com joins JSCore', 
'user1[25] with email user1@user.com joins JSCore', 
'user8[18] with email user8@user.com joins C#Advanced', 
'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 
'user11[3] with email user11@user.com joins JavaBasics', 
'user45[105] with email user45@user.com joins JSCore', 
'user007[20] with email user007@user.com joins JSCore', 
'user700[29] with email user700@user.com joins JSCore', 
'user900[88] with email user900@user.com joins JSCore'])

softUniStudents(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore'])