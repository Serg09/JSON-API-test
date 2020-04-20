// -- 2 Get JSON data from online file

const addButton = document.getElementById("addButton");
addButton.addEventListener('click', addJSON);

// const testButton = document.getElementById("testButton");
// testButton.addEventListener('click', tester);
// function tester() {
//     console.log('clicked');
//     let tempArray = [4,5,6,7,8,11];
//     const html = tempArray.map(function(val,i){
//         // return val * 2 + i;
//             return '<li>' + i + ' = ' + (val * 2) + '</li>'; // list it
//         })
//         console.log(html.join(""));
//         output.innerHTML = '<ul>' + html.join("") + '</ul';
//     }

//     String.prototype.capitalize = function(){
//         return this.charAt(0).toUpperCase() + this.slice(1); // takes first simbol (0) and capitilize
//     }
    
    const output = document.querySelector('#output');

function addJSON() {

    // const id = "1ng88mgpBY3xxBxOhZ2Z5fclHFbEyoKBXRQnS7o93Azc"
    const id = "1_MHkGgGOed6yhXHH_ujM1Pqhx_jArG4pE_ReB-LUnxA"
    // const id = "2PACX-1vSihcartuV8weN7op_Ys_1VEOTsHQ2DNiB3Va8xut62ai7qk9C9jgve9-nANYRe1yJzr6mnlTmeVIh3";
    const url = "https://spreadsheets.google.com/feeds/list/" + id + "/od6/public/full?alt=json";
    // const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSihcartuV8weN7op_Ys_1VEOTsHQ2DNiB3Va8xut62ai7qk9C9jgve9-nANYRe1yJzr6mnlTmeVIh3/pubhtml?gid=0&single=true"
    // console.log('clicked');
    // output.innerHTML = "WORKING"; // update HTML whenewher we invoke .
    // const url = "https://api.npoint.io/fd7522dfc3625b8881e5"; // this API npoint (Diana's data - First, Last, Age, City)
    // const url = "https://randomuser.me/api/?results=1"; // One user
    
    // const url = "https://randomuser.me/api/?results=5"; // Generated Users
    
    output.innerHTML = ""; //clear page everytime when Get User clicked
    // fetch(url, {
    //     mode: "no-cors",
    // })
    fetch(url)
    
    .then(function(response) {
        // console.log(response.status);
        // return response.text()
        return response.json() // instead of `text` do `json` and it will transform into json format
        
    })
    .then(function(data){
        // console.log(data);
        // console.log(JSON.parse(data)); // no need do `parse` here as we already call json format in `return response.json()`

        // Data from RandomUser
        // let people = data.results;

        // API, random Users
        console.log(data);
        console.log(data.feed.entry);

        let entry = data.feed.entry;
        for(let x = 0; x < entry.length; x++) {
            let id = entry[x].gsx$id.$t;
            let email = entry[x].gsx$email.$t;
            let first = entry[x].gsx$firstname.$t;
            let last = entry[x].gsx$lastname.$t;
            output.innerHTML += "<div>"+id+". Name: "+first+", Last Name: "+last+", Email: "+email+"</div>";
            console.log(email);
        }
        // const html = people.map(function(val,i){
        // return people.map(function(val,i){ // instead of maping in to HTML (line above) will build directly with HTML
        //     // let firstName = val.name.first.toUpperCase(); // create new variable with all Upper case
        //     // let lastName = val.name.last.toUpperCase();
        //     let div = document.createElement('div');
        //     let img = document.createElement('img');
        //     let span = document.createElement('span');
        //     let firstName = val.name.first.capitalize(); // replace Upper case with created Capitilize function
        //     let lastName = val.name.last.capitalize();
        //     img.src = val.picture.thumbnail;
        //     span.innerHTML =  (i+1) + ". " + firstName + ", " + lastName + ". email: " + val.email.bold();
        //     div.append(span);
        //     div.appendChild(img);
        //     output.appendChild(div);

            // console.log(people);
            // return '<li>' + (i+1) + ". " + val.name.first + ", " + val.name.last + ". email: " + val.email + '</li>'; // list it
            // in this 'return' we changed val.name.last/first with new variable with upper case
            // return '<div>' + (i+1) + ". " + firstName + ", " + lastName + ". email: " + val.email.bold() + '</div>'; // list it
            // output.innerHTML = '<div>' + (i+1) + ". " + firstName + ", " + lastName + ". email: " + val.email.bold() + '</div>'; // list it
        // })
        // output.innerHTML = '<ul>' + html.join("") + '</ul'; // was used with const.html

        
        // // For One Person API
        // console.log(people[0].name.first); // For One Person API
        // output.innerHTML = "First Name: " + people[0].name.first+ "<br> Last Name: " + people[0].name.last;



        // // DATA from saved file
        // // First
        // var node = document.createElement("F"); 
        // var f = document.createTextNode(data.first); 
        // node.appendChild(f); 
        // document.getElementById("first").appendChild(node);   
        // console.log(node);

        // // Last
        // var node = document.createElement("L"); 
        // var l = document.createTextNode(data.last); 
        // node.appendChild(l); 
        // document.getElementById("last").appendChild(node);   
        // console.log(node);

        // // Age
        // var node = document.createElement("A"); 
        // var a = document.createTextNode(data.age); 
        // node.appendChild(a); 
        // document.getElementById("age").appendChild(node);   
        // console.log(node);

        // // City
        // var node = document.createElement("C"); 
        // var c = document.createTextNode(data.city); 
        // node.appendChild(c); 
        // document.getElementById("city").appendChild(node);   
        // console.log(node);

        // OR THIS ONE FOR innerHTML
        // output.innerHTML = "First Name: " + data.first + ", Last Name: " + data.last + ", Age: " + data.age + ", City: " + data.city;


        // var node = document.createElement("P"); 
        // var t = document.createTextNode(JSON.stringify(data)); 
        // node.appendChild(t); 
        // document.getElementById("output").appendChild(node);   
        // console.log(node);

        // var obj = data;
        // var myJSON = JSON.stringify(obj);
        // document.getElementById("output").innerHTML = JSON.parse(myJSON);
        // // console.log(myJSON.canApprove);
        // console.log(JSON.parse(myJSON));
      
    })
    .catch(function(error) { // showing error in a console
        console.log(error);
    })
}

// -- 2 --




// -- 1 -- Use of `stringify` and `parse` in local database
// document.getElementById("addButton").addEventListener('click', addToStorage);
// document.getElementById("seeButton").addEventListener('click', viewStorage);
// // var myJSON = {"first":"Sergey", "last":"Skumatov"};

// // way to hold the storage contant. It returns all data from storage in object view
// const people = JSON.parse(localStorage.getItem('tester1')) || {"first":"none", "last":"none"}
// console.log(people);


// // The way how to store data localy in JSON format
// function addToStorage() {
//     let tempFirst = document.getElementById("firstName").value;
//     let tempLast = document.getElementById("lastName").value;
//     let myObj = JSON.stringify({
//         "first":tempFirst, 
//         "last":tempLast,
//     });
//     console.log(myObj);
//     // var myJSON = {"first":"Sergey", "last":"Skumatov"};
//     localStorage.setItem('tester1',myObj);
//     // console.log('Clicked' + myObj);
// }
// function viewStorage() {
//     let tempHolder = JSON.parse(localStorage.getItem('tester1')) || people;
//     console.log(tempHolder);
// }
// -- 1 -- 




// var myJSON = {"first":"Sergey", "last":"Skumatov"};
// console.log(myJSON);
// var myJSONstring = JSON.stringify(myJSON); // `strinify` converts object into the string
// console.log(myJSONstring);
// var myJSONparsed = JSON.parse(myJSONstring); // `parsed` retrun back to object
// myJSONparsed.first = "Diana";
// console.log(myJSONparsed);
// var sendData = JSON.stringify(myJSONparsed);
// console.log(sendData);

// var myJSON = {"name":"Sergey", "age":40}; // valid JSON
// var myJSON = {name:"Sergey", age:40}; //no valid JSON (valid Javascript)
// var myObj = function(){return 'Hello}'};
// var myObj1 = {'test':function(){return 'Hello'}};

// var tString = "Hello";
// var tString2 = 'Hello';
// var tNumber = 3;
// var tBoolean = true;
// var tNull = null;
// var tUndefined = undefined;
// var tArray = ['test',30,[5,6,6,]];
// var tObjects = {'first':'Laurence'};
// var tObjects2 = {first:'Laurence'};
// var tObjects3={"first":'Laurence'};
// var tObjects4 = {};
// tObjects4.first = 'Laurence';
// tObjects4['last']='Svekis';
// var tObjects5 = {'myarray':tArray};
// tObjects5.myObj = tObjects4;