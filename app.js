document.addEventListener("DOMContentLoaded", () => {

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const thr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");

    table.className += "table table-dark table-bordered border-light table-striped table-hover";

    th1.innerHTML = "#";
    th1.setAttribute("align", "left");
    th1.className += "h3";
    th2.innerHTML = "Book Image";
    th2.setAttribute("align", "left");
    th2.className += "h3";
    th3.innerHTML = "Book Data";
    th3.setAttribute("align", "left");
    th3.className += "h3";

    thr.appendChild(th1);
    thr.appendChild(th2);
    thr.appendChild(th3);
    thead.appendChild(thr);

    console.log('shubham: ', bookStore)

    var id = 1;

    for (let book of bookStore) {

        const tr = document.createElement("tr");
        const td0 = document.createElement("td");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td0.innerHTML = id + ".";
        id++;

        const img = document.createElement("img");
        img.src = book.thumbnailUrl;

        const table2 = document.createElement("table");
        const tr21 = document.createElement("tr");
        const tr22 = document.createElement("tr");
        const tr23 = document.createElement("tr");
        const tr24 = document.createElement("tr");
        const tr25 = document.createElement("tr");
        const tr26 = document.createElement("tr");


        {
            const td21 = document.createElement("td");
            const td22 = document.createElement("td");
            td21.innerHTML = "<strong>Title:</strong>";
            td22.innerHTML = book.title;
            tr21.appendChild(td21);
            tr21.appendChild(td22);
        }

        {
            const td21 = document.createElement("td");
            const td22 = document.createElement("td");
            td21.innerHTML = "<strong>Page Count:</strong>";
            td22.innerHTML = book.pageCount;
            tr22.appendChild(td21);
            tr22.appendChild(td22);
        }

        {
            const td21 = document.createElement("td");
            const td22 = document.createElement("td");
            td21.innerHTML = "<strong>PublishedDate:</strong>";
            const dateFull = book.publishedDate && book.publishedDate.$date ? book.publishedDate['$date'] : ''
            const date = dateFull.substring(0, dateFull.indexOf('T'));
            td22.innerHTML = date;
            tr23.appendChild(td21);
            tr23.appendChild(td22);
        }

        {
            const td21 = document.createElement("td");
            const td22 = document.createElement("td");
            td21.innerHTML = "<strong>Description:</strong>";
            td21.setAttribute("valign", "top");
            td22.innerHTML = book.shortDescription;
            tr24.appendChild(td21);
            tr24.appendChild(td22);
        }

        {
            const td21 = document.createElement("td");
            const td22 = document.createElement("td");
            td21.innerHTML = "<strong>Author:</strong>";
            td22.innerHTML = book.authors;
            tr25.appendChild(td21);
            tr25.appendChild(td22);
        }

        {
            const td21 = document.createElement("td");
            const td22 = document.createElement("td");
            td21.innerHTML = "<strong>Categories:</strong>";
            td22.innerHTML = book.categories;
            tr26.appendChild(td21);
            tr26.appendChild(td22);
        }

        table2.appendChild(tr21);
        table2.appendChild(tr22);
        table2.appendChild(tr23);
        table2.appendChild(tr24);
        table2.appendChild(tr25);
        table2.appendChild(tr26);

        td1.appendChild(img);
        td2.appendChild(table2);
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("books-data").appendChild(table);
})