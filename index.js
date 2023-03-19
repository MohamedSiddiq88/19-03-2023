let xhr = new XMLHttpRequest();
xhr.open("GET", "generated.json");
xhr.send();
xhr.onload = () => {
    let result = JSON.parse(xhr.response);


};

//console.log(JSON.parse(xhr.response));


let pg = document.getElementById("pagination");
for (let i = 0; i < 10; i++) {
    let e;
    e = document.createElement("div");
    e.innerText = i + 1;
    e.setAttribute("onclick", "foo(" + i + "," + eval(i + 1) + ")");

    pg.append(e);
}

xhr.onload = () => {
    let result = JSON.parse(xhr.response);
    //create table
    let t = document.getElementById("table");
    let tharr = ["ID", "NAME", "EMAIL"];
    for (let i = 0; i <= 10; i++) {//10rows per paage
        let r = document.createElement("tr");

        for (let j = 0; j < 3; j++) {//3 column per page
            if (i == 0) {
                let e = document.createElement("th");
                e.innerText = tharr[j];
                r.append(e);
            }
            else {
                let e = document.createElement("td");
                e.innerText = result[i - 1][tharr[j]];
                r.append(e);
            }
        }
        t.append(r);
    }

};


//onclick function
function foo(start, end) {
    //s and e are s=starting point e=ending point
    document.body.style.backgroundColor = "blue";
    start = (10 * start);
    end = end * 10;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "generated.json");
    xhr.send();
    xhr.onload = () => {
        let result = JSON.parse(xhr.response);



        let t = document.getElementById("table");
        let tharr = ["ID", "NAME", "EMAIL"];
        for (let i = 0; i <= 10; i++) {//10rows per paage
            for (let j = 0; j < 3; j++) {//3 column per page
                if (i != 0) {

                    t.rows[i].cells[j].innerText = result[start - 1][tharr[j]];

                }
            }
            start++;

        }


    };


}