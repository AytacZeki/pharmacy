var findPill = document.querySelector(".find-pill");
var findPharm = document.querySelector(".find-pharmacy");
var addPill = document.querySelector(".add-pill");
var addPharm = document.querySelector(".add-pharmacy");
var h4 = document.querySelector(".pharmName");
var pharmbody = document.querySelector(".pharmacy tbody");
var pillbody = document.querySelector(".pill tbody");
console.log(pharmbody);
var mainarr = [];
var PharmacyObj = {
    pharmacyName: "",
    pills: [{
            name: '',
            count: '',
            price: '',
            pharmacy: ''
        }]
};
findPill === null || findPill === void 0 ? void 0 : findPill.addEventListener("click", function () {
    var fPill = prompt("find a pill");
    for (var i = 0; i < mainarr.length; i++) {
        for (var v = 0; v < mainarr[i].pills.length; v++) {
            if (mainarr[i].pills[v].name == fPill) {
                console.log(mainarr[i].pills[v]);
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                td1.innerHTML = "".concat(mainarr[i].pills[v].name);
                td2.innerHTML = "".concat(mainarr[i].pills[v].count);
                td3.innerHTML = "".concat(mainarr[i].pills[v].price);
                td4.innerHTML = "".concat(mainarr[i].pills[v].pharmacy);
                pillbody.append(tr);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
            }
        }
    }
});
findPharm === null || findPharm === void 0 ? void 0 : findPharm.addEventListener("click", function () {
    var fPharm = prompt("find pharmacy");
    for (var i = 0; i < mainarr.length; i++) {
        if (fPharm == mainarr[i].pharmacyName) {
            h4.innerHTML = "Pharmacy name: ".concat(fPharm);
            mainarr[i].pills.map(function (v) {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                td1.innerHTML = "".concat(v.name);
                td2.innerHTML = "".concat(v.count);
                td3.innerHTML = "".concat(v.price);
                pharmbody.append(tr);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
            });
        }
    }
});
addPill === null || addPill === void 0 ? void 0 : addPill.addEventListener("click", function () {
    var q1 = prompt("entered a pharmacy name");
    var q2 = prompt("entered a pill name");
    var q3 = prompt("entered a price");
    var q4 = prompt("entered a count");
    var objs = {
        name: String(q2),
        count: String(q4),
        price: String(q3),
        pharmacy: String(q1)
    };
    for (var i = 0; i < mainarr.length; i++) {
        if (objs.pharmacy == mainarr[i].pharmacyName) {
            mainarr[i].pills.push(objs);
        }
    }
    console.log(objs);
});
addPharm === null || addPharm === void 0 ? void 0 : addPharm.addEventListener("click", function () {
    h4.innerHTML = "Pharmacy name:";
    var aPharm = prompt("add a pharmacy");
    h4.innerHTML = "Pharmacy name: ".concat(aPharm);
    var PharmacyObj = {
        pharmacyName: String(aPharm),
        pills: [{
                name: '',
                count: '',
                price: '',
                pharmacy: ''
            }]
    };
    mainarr.push(PharmacyObj);
    console.log(PharmacyObj);
    console.log(mainarr);
});
