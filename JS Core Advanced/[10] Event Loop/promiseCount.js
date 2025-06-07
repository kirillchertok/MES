let num = 1;

function getCurrentTime() {
    const now = new Date()
    const hours = String(now.getHours())
    const minutes = String(now.getMinutes())
    const seconds = String(now.getSeconds())

    return `${hours}:${minutes}:${seconds}`;
}

function count(){
    return new Promise((resolve, reject) => {
        if (num <= 10){
            setTimeout(() => {
                console.log(getCurrentTime() + " - " + num)
                num++
                count()
            }, 1000)
        }
        else{
            resolve()
        }
    })
}

count()

// 1:11:39 - 1
// 1:11:40 - 2
// 1:11:41 - 3
// 1:11:42 - 4
// 1:11:43 - 5
// 1:11:44 - 6
// 1:11:45 - 7
// 1:11:46 - 8
// 1:11:47 - 9
// 1:11:48 - 10