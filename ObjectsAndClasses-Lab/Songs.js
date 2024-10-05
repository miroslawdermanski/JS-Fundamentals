function songs(array){

    let songs = []

    class Song {

        constructor(typeList, name, time){

            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = Number(array.shift())
    let typeList = array.pop()
         
    for(let song of array){

        let [type, name, time] = song.split('_')
        let newSong = new Song(type, name, time);
        songs.push(newSong)
    }

    if(typeList == 'all'){

        songs.forEach(song => console.log(song.name))
    } else {
        let filtered = songs.filter(song => song.typeList == typeList)
        filtered.forEach(song => console.log(song.name))
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])