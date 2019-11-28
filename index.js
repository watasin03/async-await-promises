// Call back function
const fetchData = (userId, callback) => {
    setTimeout(() => {
        const fakeData = {
            id : userId,
            name: "Wutt"
        };
        callback(fakeData);
    }, 500);
};

const cb = data => {
    console.log("Here's your Data ", data);
};

fetchData(5, cb);

//Promises
const fetchData2 = userId => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            if(Math.random() < 0.1) {
                rej("Fetch failed!");
            }
            const fakeData = {
                id : userId,
                name: "Wutt"
            };
            res(fakeData);
        }, 2000);
    });
};

const fetchData4 = userId => {
    return new Promise((res,rej) => {
        j = "";
        for(i = 0; i < userId; i++) {
            j = ("Hellow " + i);
        };
        res(j)
    })
};

const fetchData3 = userId => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            if(Math.random() < 0.1) {
                rej("Fetch failed!");
            }
            const fakeData = {
                id : userId,
                name: "Wutt"
            };
            res(fakeData);
        }, 5000);
    });
};

fetchData2(10)
    .then(user => {
        console.log("Here's your Data ", user);
    }).catch(err => {
        console.log(err);
    });

Promise.all([fetchData2(7), fetchData2(15)])
    .then(user => {
        console.log("Here's your Data ", user);
    }).catch(err => {
        console.log(err);
    });

//Async-Await
const fetchUser = async userId => {
    try {
        const cal = await fetchData4(userId);
        for(i = 0; i < userId; i++) {
            console.log("Here's your Data ", cal);
        }
        const user = await fetchData3(userId);
        console.log("Here's your Data ", user);
        const username = await fetchData2(userId);
        console.log("Here's your Data ", username);
        
    } catch (err) {
        console.log(err);
    }

   
    
};

fetchUser(10);