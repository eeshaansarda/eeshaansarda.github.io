const latestBlog = document.querySelector(".latest-blog p");

fetch("./blog.html").
    then((response) => response.text()).
    then((text) => {
        const otherDoc = document.implementation.createHTMLDocument("blog").documentElement;
        otherDoc.innerHTML = text;

        latestBlog.innerHTML = otherDoc.querySelector(".blogpost").textContent;
    });
