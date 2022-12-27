let findPill = document.querySelector(".find-pill") as HTMLButtonElement
let findPharm = document.querySelector(".find-pharmacy") as HTMLButtonElement
let addPill = document.querySelector(".add-pill") as HTMLButtonElement
let addPharm = document.querySelector(".add-pharmacy") as HTMLButtonElement
let h4 = document.querySelector(".pharmName") as HTMLElement
let pharmbody = document.querySelector(".pharmacy tbody") as HTMLTableElement
let pillbody = document.querySelector(".pill tbody") as HTMLTableElement
console.log(pharmbody);
let mainarr: {
    pharmacyName: string, 
    pills: {
    name: string,
        count: string,
        price: string,
        pharmacy: string
}[]}[] = [];

let PharmacyObj: {
    pharmacyName: string,
    pills: [{name: string,
        count: string,
        price: string,
        pharmacy: string}]
} = {
    pharmacyName: "",
    pills: [{
        name: '',
        count: '',
        price: '',
        pharmacy: ''
    }],
};

findPill?.addEventListener("click", () => {
    let fPill = prompt("find a pill");
    for (let i = 0; i < mainarr.length; i++) {
        for (let v = 0; v < mainarr[i].pills.length; v++) {
            if (mainarr[i].pills[v].name == fPill) {
                console.log(mainarr[i].pills[v])
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                td1.innerHTML = `${mainarr[i].pills[v].name}`;
                td2.innerHTML = `${mainarr[i].pills[v].count}`;
                td3.innerHTML = `${mainarr[i].pills[v].price}`;
                td4.innerHTML = `${mainarr[i].pills[v].pharmacy}`;
                pillbody.append(tr);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
            }
        }
    }
});
findPharm?.addEventListener("click", () => {
    let fPharm = prompt("find pharmacy");
    for (let i = 0; i < mainarr.length; i++) {
        if (fPharm == mainarr[i].pharmacyName) {
            h4.innerHTML = `Pharmacy name: ${fPharm}`;
            mainarr[i].pills.map((v) => {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                td1.innerHTML = `${v.name}`;
                td2.innerHTML = `${v.count}`;
                td3.innerHTML = `${v.price}`;
                pharmbody.append(tr);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
            });
        }
    }
});
addPill?.addEventListener("click", () => {
    let q1: string | null = prompt("entered a pharmacy name");
    let q2: string | null = prompt("entered a pill name");
    let q3: string | null = prompt("entered a price");
    let q4: string | null = prompt("entered a count");
    let objs = {
        name: String(q2),
        count: String(q4),
        price: String(q3),
        pharmacy: String(q1),
    };
    for (let i = 0; i < mainarr.length; i++) {
        if (objs.pharmacy == mainarr[i].pharmacyName) {
            mainarr[i].pills.push(objs);
        }
    }
    console.log(objs);
});
addPharm?.addEventListener("click", () => {
    h4.innerHTML = "Pharmacy name:";
    let aPharm: string | null = prompt("add a pharmacy");
    h4.innerHTML = `Pharmacy name: ${aPharm}`;
    let PharmacyObj = {
        pharmacyName: String(aPharm),
        pills: [{
            name: '',
            count: '',
            price: '',
            pharmacy: ''
        }],
    };
    mainarr.push(PharmacyObj);
    console.log(PharmacyObj);
    console.log(mainarr);
});
