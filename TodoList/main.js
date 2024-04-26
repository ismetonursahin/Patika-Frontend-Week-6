let inputDOM = document.querySelector("#task");
let ulDOM = document.querySelector("#list");

window.onload = function (e) {
  if (localStorage.getItem("list") !== null) {
    let list = JSON.parse(localStorage.getItem("list"));

    list.forEach((element) => {
      let liDOM = document.createElement("li");
      liDOM.dataset.value = element;
      let liValue = element;
      liDOM.innerHTML = liValue;
      ulDOM.append(liDOM);

      let liDelete = document.createElement("div");
      liDelete.innerHTML = " X ";
      liDelete.classList.add("delete");
      liDOM.append(liDelete);

      liDOM.addEventListener("click", (okey) => {
        liDOM.classList.toggle("checked");
      });

      liDelete.addEventListener("click", (remove) => {
        liDOM.parentNode.removeChild(liDOM);

        let newList = [...ulDOM.children];
        let liste = [];

        newList.forEach((e) => {
          liste.push(e.dataset.value);
        });

        localStorage.setItem("list", JSON.stringify(liste));
      });
    });
  }
};

function newElement() {
  if (inputDOM.value == "") {
    var notAdd = document.querySelector("#notAdd");
    notAdd.style.display = "block";
    setTimeout(() => {
      notAdd.style.display = "none";
    }, 2000);
  } else {
    let list = [];

    if (localStorage.getItem("list") !== null) {
      list = JSON.parse(localStorage.getItem("list"));
    }

    let liDOM = document.createElement("li");
    liDOM.dataset.value = inputDOM.value;
    let liValue = inputDOM.value;
    liDOM.innerHTML = liValue;
    ulDOM.append(liDOM);

    let liDelete = document.createElement("div");
    liDelete.innerHTML = " X ";
    liDelete.classList.add("delete");
    liDOM.append(liDelete);
    liDOM.addEventListener("click", (okey) => {
      liDOM.classList.toggle("checked");
    });

    liDelete.addEventListener("click", (remove) => {
      ulDOM.removeChild(remove.target.parentNode);

      let newList = [...ulDOM.children];
      let liste = [];

      newList.forEach((e) => {
        liste.push(e.dataset.value);
      });
      console.log(liste);
      localStorage.setItem("list", JSON.stringify(liste));
    });

    var addToast = document.querySelector("#add");
    addToast.style.display = "block";
    setTimeout(() => {
      addToast.style.display = "none";
    }, 2000);

    list.push(liValue);
    localStorage.setItem("list", JSON.stringify(list));

    inputDOM.value = "";
    console.log(list);
  }
}
