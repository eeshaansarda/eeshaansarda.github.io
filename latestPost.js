const latestBlog = document.querySelector(".latest-blog p");

fetch("./blog.html").
    then((response) => response.text()).
    then((text) => {
        const otherDoc = document.implementation.createHTMLDocument("blog").documentElement;
        otherDoc.innerHTML = text;

        const blogposts = otherDoc.getElementsByClassName(".blogpost");
        latestBlog.innerHTML = blogposts[blogposts.length - 1].innerHTML;
    });
