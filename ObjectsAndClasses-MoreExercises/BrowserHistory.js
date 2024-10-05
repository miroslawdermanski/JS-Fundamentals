function browserHistory(object, array){

    for(let command of array){

        if(command == 'Clear History and Cache'){

            object['Browser Logs'] = []
            object['Recently Closed'] = []
            object['Open Tabs'] = []
        } else {

            command = command.split(' ')
            let action = command[0]
            command = command.join(' ')
            let site = command.split(`${action} `)[1]

            if(action == 'Close'){

                if(object['Open Tabs'].includes(site)){

                    let siteIdx = object['Open Tabs'].indexOf(site)
                    object['Open Tabs'].splice(siteIdx, 1)
                    object['Recently Closed'].push(site)

                    object['Browser Logs'].push(command)
                }
            } else if(action == 'Open'){

                object['Open Tabs'].push(site)
                object['Browser Logs'].push(command)
            }
        }
        
    }

    console.log(`${object['Browser Name']}`);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

}

browserHistory({"Browser Name":"Google Chrome",
"Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]
)

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)