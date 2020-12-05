$(function () {
    $(".create-form").on("submit", (e) => {
        e.preventDefault();

        let newBurger = {
            burger_name: $("#newBurger").val().trim()
        };

        $.ajax("/api/create", {
            type: "POST",
            data: newBurger
        }).then((result) => {
            console.log("Created new burger" + result);
            location.reload();
        })
    });

    $(".updateDevoured").on("click", (e) =>{
        // e.preventDefault();
        // console.log($(e.target).data("id"));
        let id = $(e.target).data("id");
        console.log(id);

        $.ajax("/api/update", {
            type: "PUT",
            data: {id : id}
        }).then((result) =>{
            console.log("Updated Id : " + id);
            location.reload();
        })
    });
})